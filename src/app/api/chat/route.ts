import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { getEmbedding } from "@/lib/gemini";
import { collectionClient } from "@/lib/astradb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const currentMessageContent = messages[messages.length - 1].content;

    const messageVector = await getEmbedding(currentMessageContent);

    const chatModel = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-flash",
      temperature: 0,
      maxRetries: 2,
      apiKey: process.env.GOOGLE_API_KEY,
      streaming: false,
    });

    const similarVectors = await collectionClient.find(
      {},
      {
        sort: {
          $vector: messageVector,
        },
        limit: 5,
        includeSimilarity: true,
      },
    );

    let context = "";
    for await (const doc of similarVectors) {
      context = context + doc.data + "\n";
    }

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for a personal portfolio website. You impersonate the website's owner. Answer the user's questions based on the below context. Whenever it makes sense, provide links to make the answer more informative about the topic from the given context. Try to keep your answer under 50-60 words. You can access certain portions of the website using https://akshay-kumar-pandey.vercel.app#about, #work, #education, #skills, #projects, #certifications, #extra-curricular and #contact. Format the messages in markdown format. \n\n" +
          "Context: \n{context}",
      ],
      ["user", "{input}"],
    ]);

    const chain = prompt.pipe(chatModel);

    const response = await chain.invoke({
      input: currentMessageContent,
      context,
    });

    return new Response(JSON.stringify({ message: response.content }), {
      status: 200,
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
