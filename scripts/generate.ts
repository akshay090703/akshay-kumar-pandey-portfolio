import {
  generateArrayEmbedding,
  generateStringEmbedding,
} from "./generateStaticEmbeddings";
import JsonData from "../src/data/resume.json";

const flattenJSON = (obj: any, prefix = ""): string[] => {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result.push(...flattenJSON(obj[key], `${prefix}${key}.`));
    } else {
      result.push(`${prefix}${key}: ${obj[key]}`);
    }
  }
  return result;
};

async function generateEmbeddings() {
  const myInfo = {
    name: JsonData.name,
    initials: JsonData.initials,
    url: JsonData.url,
    location: JsonData.location,
    locationLink: JsonData.locationLink,
    description: JsonData.description,
  };

  const myInfoString = Object.entries(myInfo)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  await generateStringEmbedding(myInfoString);

  const skillsString =
    "Skills: " + JsonData.skills.map((skill: string) => skill).join(", ");

  await generateStringEmbedding(skillsString);

  const summary = `summary: ${JsonData.summary}`;

  await generateStringEmbedding(summary);

  const contactsString = flattenJSON(JsonData.contact).join(", ");

  await generateStringEmbedding(contactsString);

  const workArr = JsonData.work.map(function (job) {
    return (
      "Company: " +
      job.company +
      ", Title: " +
      job.title +
      ", Location: " +
      job.location +
      ", Duration: " +
      job.start +
      " - " +
      job.end +
      ", Description: " +
      job.description
    );
  });

  await generateArrayEmbedding(workArr);

  const educationArr = JsonData.education.map(function (edu) {
    return (
      "School: " +
      edu.school +
      ", Degree: " +
      edu.degree +
      ", Duration: " +
      edu.start +
      " - " +
      edu.end
    );
  });

  await generateArrayEmbedding(educationArr);

  const projectsArr = JsonData.projects.map(function (project) {
    return (
      "Title: " +
      project.title +
      ", Dates: " +
      project.dates +
      ", Active: " +
      project.active +
      ", Description: " +
      project.description +
      ", Technologies: " +
      project.technologies.join(", ") +
      ", Links: " +
      project.links.map((link) => link.type + " - " + link.href).join(", ")
    );
  });

  await generateArrayEmbedding(projectsArr);

  const certificateArr = JsonData.certifications.map(function (certification) {
    return (
      "Title: " +
      certification.title +
      ", Location: " +
      certification.location +
      ", Provider: " +
      certification.provider +
      ", Dates: " +
      certification.start +
      " - " +
      certification.end +
      ", Description: " +
      certification.description +
      ", Certification Link: " +
      certification.href
    );
  });

  await generateArrayEmbedding(certificateArr);

  const exCurricularArr = JsonData.extraCurricular.map(function (curricular) {
    const links = curricular.links
      .map((link) => `Link: ${link.title} (${link.href})`)
      .join(", ");
    return `Title: ${curricular.title}, Dates: ${curricular.dates}, Location: ${curricular.location}, Description: ${curricular.description}, Links: [${links}], Image: ${curricular.image}, MLH: ${curricular.mlh}`;
  });

  await generateArrayEmbedding(exCurricularArr);

  console.log("All vector embeddings created");
}

generateEmbeddings();
