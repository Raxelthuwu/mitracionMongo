import { ObjectId } from "mongodb";

// Collection names
export const COLLECTIONS = {
  MIGRANTES: "migrantes",
  USUARIOS: "usuarios",
  REGISTROS_ATENCION: "registros_atencion",
} as const;

// Migrante
export interface Migrante {
  _id?: ObjectId;

  nombre_completo: string;
  documento: string;
  nacionalidad: string;
  pais_origen: string;
  fecha_llegada: string;
  motivo_migracion: string;

  edad?: number | null;
  genero?: string | null;
  correo?: string | null;
  numero_telefonico?: string | null;
}

// Usuario
export type RolUsuario = "FUNCIONARIO" | "ADMIN" | "COORDINADOR";

export interface Usuario {
  _id?: ObjectId;

  nombre: string;
  rol: RolUsuario;
  correo: string;
  contrasena: string;
}

// Registro de atención
export interface RegistroAtencion {
  _id?: ObjectId;

  fecha: string;
  id_funcionario: ObjectId;
  id_institucion: ObjectId;
  id_migrante: ObjectId;

  observaciones?: string | null;
  id_migrante_servicio?: ObjectId | null;
}
