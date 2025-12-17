// src/index.ts
import "dotenv/config";
import express from "express";
import { connectMongo } from "./config/mongoDBconnection";
import { routes } from "./route/route";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3000;

async function bootstrap() {
  try {
    await connectMongo();
    console.log("✅ Conexión a MongoDB Atlas: OK (ping exitoso)");

    app.listen(PORT, () => {
      console.log(`🚀 API corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error iniciando la app:", error);
    process.exit(1);
  }
}

bootstrap();


