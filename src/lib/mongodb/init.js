import { MongoClient } from "mongodb";

const uri = process.env.MongoDB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error(
    "MONGO URI  belum dimasukan kedalam env local harap masukan terlebih dahulu"
  );
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
