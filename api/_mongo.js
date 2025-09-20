/* eslint-disable no-undef */
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  global._mongoClientPromise = client.connect();
}

export async function getDb() {
  const client = await global._mongoClientPromise;
  return client.db(dbName);
}
