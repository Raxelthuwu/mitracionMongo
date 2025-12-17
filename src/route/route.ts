// src/route/route.ts
import { Router } from "express";
import {
  migranteController,
  registroAtencionController,
  usuarioController,
} from "../controller/controller";

export const routes = Router();

// Migrantes CRUD
routes.post("/migrantes", migranteController.create);
routes.get("/migrantes", migranteController.getAll);
routes.get("/migrantes/:id", migranteController.getById);
routes.put("/migrantes/:id", migranteController.update);
routes.delete("/migrantes/:id", migranteController.remove);

// Registros de atención CRUD
routes.post("/registros-atencion", registroAtencionController.create);
routes.get("/registros-atencion", registroAtencionController.getAll);
routes.get("/registros-atencion/:id", registroAtencionController.getById);
routes.put("/registros-atencion/:id", registroAtencionController.update);
routes.delete("/registros-atencion/:id", registroAtencionController.remove);

// Usuarios (solo consulta básica)
routes.get("/usuarios", usuarioController.getBasic);
