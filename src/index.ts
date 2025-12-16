import "dotenv/config";
import { connectMongo } from "./config/mongoDBconnection";

async function bootstrap() {
  try {
    await connectMongo();
    console.log("✅ Conexión a MongoDB Atlas: OK (ping exitoso)");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
  }
}

bootstrap();
