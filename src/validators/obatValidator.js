import joi from "joi";
import { update } from "../controllers/obatController.js";

export const obatSchema = joi.object({
  nama_obat: joi.string().required().messages({
    "string.empty": "Nama obat wajib diisi",
    "any.required": "Nama obat wajib diisi",
  }),
  kategori: joi.string().required().messages({
    "string.empty": "Kategori wajib diisi",
    "any.required": "Kategori wajib diisi",
  }),
  stok: joi.number().integer().min(0).required().messages({
    "number.base": "Stok harus berupa angka",
    "number.min": "Stok tidak boleh negatif",
    "any.required": "Stok wajib diisi",
  }),
  deskripsi: joi.string().required().messages({
    "string.empty": "Deskripsi wajib diisi",
    "any.required": "Deskripsi wajib diisi",
  }),
  harga_beli: joi.number().positive().required().messages({
    "number.base": "Harga harus berupa angka",
    "number.positive": "Harga tidak boleh negatif",
    "any.required": "Harga wajib diisi",
  }),
  harga_jual: joi.number().positive().required().messages({
    "number.base": "Harga harus berupa angka",
    "number.positive": "Harga tidak boleh negatif",
    "any.required": "Harga wajib diisi",
  }),
  kode_obat: joi.string().required().messages({
    "string.empty": "Kode obat wajib diisi",
    "any.required": "Kode obat wajib diisi",
  }),
  supplier: joi.string().required().messages({
    "string.empty": "Supplier wajib diisi",
    "any.required": "Supplier wajib diisi",
  }),
  tanggal_expired: joi.string().required().messages({
    "string.empty": "Tanggal expired wajib diisi",
    "any.required": "Tanggal expired wajib diisi",
  }),
  tanggal_masuk: joi.string().required().messages({
    "string.empty": "Tanggal masuk wajib diisi",
    "any.required": "Tanggal masuk wajib diisi",
  }),
  satuan: joi.string().required().messages({
    "string.empty": "Satuan wajib diisi",
    "any.required": "Satuan wajib diisi",
  }),
});

export const obatUpdateSchema = obatSchema
  .fork(
    [
      "nama_obat",
      "kategori",
      "stok",
      "deskripsi",
      "harga_beli",
      "harga_jual",
      "kode_obat",
      "supplier",
      "tanggal_expired",
      "satuan",
    ],
    (schema) => schema.optional(),
  )
  .min(1)
  .messages({
    "object.min": "Setidaknya satu field harus diubah",
  });
