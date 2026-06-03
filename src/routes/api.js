import express from "express";
import * as ObatController from "../controllers/obatController.js";
import * as PelangganController from "../controllers/pelangganController.js";
import * as TransaksiController from "../controllers/transaksiController.js";
import authController from "../controllers/authController.js";
import jwtAuth from "../middleware/jwtAuth.js";
const router = express.Router();

// Auth
router.post("/auth", authController.login);

// Obat
router.get("/obat", jwtAuth, ObatController.index);
router.post("/obat", jwtAuth, ObatController.store);
router.put("/obat/:id", jwtAuth, ObatController.update);
router.delete("/obat/:id", jwtAuth, ObatController.destroy);

// Pelanggan
router.get("/pelanggan", jwtAuth, PelangganController.index);
router.post("/pelanggan", jwtAuth, PelangganController.store);
router.put("/pelanggan/:id", jwtAuth, PelangganController.update);
router.delete("/pelanggan/:id", jwtAuth, PelangganController.destroy);

// Transaksi
router.get("/transaksi", jwtAuth, TransaksiController.index);
router.post("/transaksi", jwtAuth, TransaksiController.store);
router.delete("/transaksi/:id", jwtAuth, TransaksiController.destroy);

export default router;
