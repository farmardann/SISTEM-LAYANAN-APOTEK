import pkg from "@prisma/client";
const { PrismaClient } = pkg;

import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaMariaDb(connectionString);

export const prismaClient = new PrismaClient({
  adapter,
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prismaClient.$on("query", (e) => {
  console.log("QUERY:", e.query);
});

prismaClient.$on("error", (e) => {
  console.error("ERROR:", e);
});

prismaClient.$on("warn", (e) => {
  console.warn("WARNING:", e);
});

prismaClient.$on("info", (e) => {
  console.info("INFO:", e);
});