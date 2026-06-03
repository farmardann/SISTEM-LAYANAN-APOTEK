import { body } from "express-validator";
import joi from "joi";

export const transaksiSchema = joi.object({
  jumlah: joi.number().integer().min(1).required().messages({
    "number.base": "Jumlah harus berupa angka",
    "number.integer": "Jumlah harus berupa bilangan bulat",
    "number.min": "Jumlah tidak boleh kurang dari 1",
    "any.required": "Jumlah wajib diisi",
  }),
  total_harga: joi.number().positive().required().messages({
    "number.base": "Total harga harus berupa angka",
    "number.positive": "Total harga tidak boleh negatif",
    "any.required": "Total harga wajib diisi",
  }),
  tanggal: joi.string().required().messages({
    "string.empty": "Tanggal wajib diisi",
    "any.required": "Tanggal wajib diisi",
  }),
  obatId: joi.number().integer().required().messages({
    "number.base": "Obat ID harus berupa angka",
    "number.integer": "Obat ID harus berupa bilangan bulat",
    "any.required": "Obat ID wajib diisi",
  }),
  pelangganId: joi.number().integer().required().messages({
    "number.base": "Pelanggan ID harus berupa angka",
    "number.integer": "Pelanggan ID harus berupa bilangan bulat",
    "any.required": "Pelanggan ID wajib diisi",
  }),
  harga_satuan: joi.number().positive().required().messages({
    "number.base": "Harga satuan harus berupa angka",
    "number.positive": "Harga satuan tidak boleh negatif",
    "any.required": "Harga satuan wajib diisi",
  }),
  kode_transaksi: joi.string().required().messages({
    "string.empty": "Kode transaksi wajib diisi",
    "any.required": "Kode transaksi wajib diisi",
  }),
  metode_bayar: joi.string().valid("Tunai", "Kartu").required().messages({
    "string.empty": "Metode bayar wajib diisi",
    "any.only": "Metode bayar harus 'Tunai' atau 'Kartu'",
    "any.required": "Metode bayar wajib diisi",
  }),
  status: joi.string().valid("Sukses", "Gagal").required().messages({
    "string.empty": "Status wajib diisi",
    "any.only": "Status harus 'Sukses' atau 'Gagal'",
    "any.required": "Status wajib diisi",
  }),
});
