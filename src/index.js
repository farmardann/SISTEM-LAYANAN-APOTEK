import "dotenv/config";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

import express from "express";
import router from "./routes/api.js";

const app = express();
const port = process.env.PORT || 2026;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint tidak ditemukan" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});