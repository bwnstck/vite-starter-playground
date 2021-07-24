import { MongoClient } from 'mongodb';
let client: any;
let db: any;

export const connectToDb = async (url: string, dbName: string) => {
  try {
    client = await MongoClient.connect(url);
    db = client.db(dbName);
  } catch (error) {
    console.error(error);
  }
};

export const closeDbConnection = () => {
  client.close();
};

export const collection = (name: string) => {
  return db.collection(name);
};
