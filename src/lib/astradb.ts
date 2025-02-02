import { DataAPIClient } from "@datastax/astra-db-ts";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";

if (!endpoint || !token || !collection) {
  throw new Error("Missing AstraDB environment variables");
}

const client = new DataAPIClient(token);
const db = client.db(endpoint);

export const collectionClient = db.collection(collection);
