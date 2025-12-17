// src/controller/controller.ts
import { Request, Response } from "express";
import {
  migranteService,
  registroAtencionService,
  usuarioService,
} from "../service/service";
import { Migrante, RegistroAtencion } from "../models/models";

export const migranteController = {
  async create(req: Request, res: Response) {
    try {
      const data = req.body as Migrante;
      const created = await migranteService.create(data);
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ message: "Error creando migrante", error });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const items = await migranteService.getAll();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ message: "Error obteniendo migrantes", error });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const item = await migranteService.getById(req.params.id);
      if (!item) return res.status(404).json({ message: "Migrante no encontrado" });
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ message: "Error obteniendo migrante", error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const ok = await migranteService.update(req.params.id, req.body as Partial<Migrante>);
      if (!ok) return res.status(404).json({ message: "Migrante no encontrado" });
      return res.json({ message: "Migrante actualizado" });
    } catch (error) {
      return res.status(500).json({ message: "Error actualizando migrante", error });
    }
  },

  async remove(req: Request, res: Response) {
    try {
      const ok = await migranteService.remove(req.params.id);
      if (!ok) return res.status(404).json({ message: "Migrante no encontrado" });
      return res.json({ message: "Migrante eliminado" });
    } catch (error) {
      return res.status(500).json({ message: "Error eliminando migrante", error });
    }
  },
};

export const registroAtencionController = {
  async create(req: Request, res: Response) {
    try {
      const data = req.body as RegistroAtencion;
      const created = await registroAtencionService.create(data);
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ message: "Error creando registro de atención", error });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const items = await registroAtencionService.getAll();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ message: "Error obteniendo registros de atención", error });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const item = await registroAtencionService.getById(req.params.id);
      if (!item) return res.status(404).json({ message: "Registro no encontrado" });
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ message: "Error obteniendo registro", error });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const ok = await registroAtencionService.update(
        req.params.id,
        req.body as Partial<RegistroAtencion>
      );
      if (!ok) return res.status(404).json({ message: "Registro no encontrado" });
      return res.json({ message: "Registro actualizado" });
    } catch (error) {
      return res.status(500).json({ message: "Error actualizando registro", error });
    }
  },

  async remove(req: Request, res: Response) {
    try {
      const ok = await registroAtencionService.remove(req.params.id);
      if (!ok) return res.status(404).json({ message: "Registro no encontrado" });
      return res.json({ message: "Registro eliminado" });
    } catch (error) {
      return res.status(500).json({ message: "Error eliminando registro", error });
    }
  },
};

export const usuarioController = {
  async getBasic(req: Request, res: Response) {
    try {
      const users = await usuarioService.getBasic();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: "Error obteniendo usuarios", error });
    }
  },
};
