import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
import router from "./routes/api.js";

// Karena ESM tidak bisa import JSON langsung tanpa flag
const require = createRequire(import.meta.url);
const swaggerDocument = require("./docs/openapi.json");

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const app = express();
const port = process.env.PORT || 2026;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: "Sistem Layanan Apotek API Docs",
  }),
);

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint tidak ditemukan" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs: http://localhost:${port}/api-docs`);
});
