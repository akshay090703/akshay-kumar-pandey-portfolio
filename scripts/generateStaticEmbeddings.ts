import { collectionClient } from "@/lib/astradb";
import { getEmbedding } from "@/lib/gemini";

export const generateStringEmbedding = async (info: string) => {
  const embedding = await getEmbedding(info);

  const data = {
    data: info,
    $vector: embedding,
  };

  const inserted = await collectionClient.insertOne(data);

  console.log("String embedding stored in AstraDB");
  return inserted;
};

export const generateArrayEmbedding = async (info: string[]) => {
  const embeddings = [];

  for (const data of info) {
    const embedding = await getEmbedding(data);
    embeddings.push({
      data,
      $vector: embedding,
    });
  }

  const inserted = await collectionClient.insertMany(embeddings);

  console.log("Array embedding stored in AstraDB");
  return inserted;
};
