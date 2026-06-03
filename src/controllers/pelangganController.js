import validator from "../validators/validator.js";
import {
  pelangganSchema,
} from "../validators/pelangganValidator.js";

export const index = (req, res) => {
  res.json({
    success: true,
    message: "GET semua pelanggan",
  });
};

export const show = (req, res) => {
  res.json({
    success: true,
    message: `GET pelanggan ${req.params.id}`,
  });
};

export const store = (req, res) => {
  const { body } = req;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Data tidak lengkap",
    });
  }

  const { error, value } = validator(pelangganSchema, body);

  if (error) {
    return res.status(400).json({
      success: false,
      errors: error,
    });
  }

  return res.status(201).json({
    success: true,
    message: "Tambah pelanggan berhasil",
    data: value,
  });
};

export const update = (req, res) => {
  res.json({
    success: true,
    message: `Update pelanggan ${req.params.id}`,
  });
};

export const destroy = (req, res) => {
  res.json({
    success: true,
    message: `Hapus pelanggan ${req.params.id}`,
  });
};
