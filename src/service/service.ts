// src/service/service.ts
import { ObjectId } from "mongodb";
import { connectMongo } from "../config/mongoDBconnection";
import { COLLECTIONS, Migrante, RegistroAtencion, Usuario } from "../models/models";

function toObjectId(id: string): ObjectId {
  return new ObjectId(id);
}

export const migranteService = {
  async create(data: Migrante) {
    const db = await connectMongo();
    const col = db.collection<Migrante>(COLLECTIONS.MIGRANTES);

    const result = await col.insertOne(data);
    return { ...data, _id: result.insertedId };
  },

  async getAll() {
    const db = await connectMongo();
    const col = db.collection<Migrante>(COLLECTIONS.MIGRANTES);

    return col.find({}).toArray();
  },

  async getById(id: string) {
    const db = await connectMongo();
    const col = db.collection<Migrante>(COLLECTIONS.MIGRANTES);

    return col.findOne({ _id: toObjectId(id) });
  },

  async update(id: string, data: Partial<Migrante>) {
    const db = await connectMongo();
    const col = db.collection<Migrante>(COLLECTIONS.MIGRANTES);

    const _id = toObjectId(id);
    const { _id: _, ...setData } = data;

    const result = await col.updateOne({ _id }, { $set: setData });
    return result.matchedCount > 0;
  },

  async remove(id: string) {
    const db = await connectMongo();
    const col = db.collection<Migrante>(COLLECTIONS.MIGRANTES);

    const result = await col.deleteOne({ _id: toObjectId(id) });
    return result.deletedCount > 0;
  },
};

export const registroAtencionService = {
  async create(data: RegistroAtencion) {
    const db = await connectMongo();
    const col = db.collection<RegistroAtencion>(COLLECTIONS.REGISTROS_ATENCION);

    const result = await col.insertOne(data);
    return { ...data, _id: result.insertedId };
  },

  async getAll() {
    const db = await connectMongo();
    const col = db.collection<RegistroAtencion>(COLLECTIONS.REGISTROS_ATENCION);

    return col.find({}).toArray();
  },

  async getById(id: string) {
    const db = await connectMongo();
    const col = db.collection<RegistroAtencion>(COLLECTIONS.REGISTROS_ATENCION);

    return col.findOne({ _id: toObjectId(id) });
  },

  async update(id: string, data: Partial<RegistroAtencion>) {
    const db = await connectMongo();
    const col = db.collection<RegistroAtencion>(COLLECTIONS.REGISTROS_ATENCION);

    const _id = toObjectId(id);
    const { _id: _, ...setData } = data;

    const result = await col.updateOne({ _id }, { $set: setData });
    return result.matchedCount > 0;
  },

  async remove(id: string) {
    const db = await connectMongo();
    const col = db.collection<RegistroAtencion>(COLLECTIONS.REGISTROS_ATENCION);

    const result = await col.deleteOne({ _id: toObjectId(id) });
    return result.deletedCount > 0;
  },
};


export const usuarioService = {
  async getBasic() {
    const db = await connectMongo();
    const col = db.collection<Usuario>(COLLECTIONS.USUARIOS);

    return col.find({}, { projection: { nombre: 1, rol: 1 } }).toArray();
  },
};
