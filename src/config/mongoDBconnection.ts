import { MongoClient, Db, ServerApiVersion } from "mongodb";
import "dotenv/config";

function requireEnv(name: "MONGO_URI" | "MONGO_DB_NAME"): string {
  const value = process.env[name];
  if (!value) throw new Error(`Falta ${name} en el .env`);
  return value;
}

const uri = requireEnv("MONGO_URI");
const dbName = process.env.MONGO_DB_NAME ?? "admin";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectMongo(): Promise<Db> {
  if (db) return db;

  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }); // serverApi habilita Stable API (v1) en el driver [web:248]

  await client.connect();
  db = client.db(dbName);

  // Ping para confirmar conexión (igual al snippet de Atlas)
  await db.command({ ping: 1 }); // comando ping para validar conexión [web:248]

  return db;
}

export async function disconnectMongo(): Promise<void> {
  if (!client) return;
  await client.close();
  client = null;
  db = null;
}



