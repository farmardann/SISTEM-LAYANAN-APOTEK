import joi from "joi";

export const pelangganSchema = joi.object({
  nama: joi.string().required().messages({
    "string.empty": "Nama pelanggan wajib diisi",
    "any.required": "Nama pelanggan wajib diisi",
  }),
  alamat: joi.string().required().messages({
    "string.empty": "Alamat pelanggan wajib diisi",
    "any.required": "Alamat pelanggan wajib diisi",
  }),
  no_hp: joi.string().required().messages({
    "string.empty": "Nomor HP wajib diisi",
    "any.required": "Nomor HP wajib diisi",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Email wajib diisi",
    "string.email": "Email tidak valid",
    "any.required": "Email wajib diisi",
  }),
  jenis_kelamin: joi.string().valid("L", "P").required().messages({
    "string.empty": "Jenis kelamin wajib diisi",
    "any.only": "Jenis kelamin harus 'L' atau 'P'",
    "any.required": "Jenis kelamin wajib diisi",
  }),
  kode_member: joi.string().required().messages({
    "string.empty": "Kode member wajib diisi",
    "any.required": "Kode member wajib diisi",
  }),
});
