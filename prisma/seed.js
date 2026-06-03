import "dotenv/config";
import { prismaClient } from "../src/database/dbConfig.js";
import bcrypt from "bcrypt";

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);
  await prismaClient.users.create({
    data: {
      name: "adminapotek",
      email: "admin@apotek.ac.id",
      password: hashedPassword,
      created_at: new Date(),
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prismaClient.$disconnect());
