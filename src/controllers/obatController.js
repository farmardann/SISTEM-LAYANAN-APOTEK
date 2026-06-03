import * as ObatModel from "../models/obatModel.js";
import validator from "../validators/validator.js";
import { obatSchema, obatUpdateSchema } from "../validators/obatValidator.js";
// GET semua obat
export const index = async (req, res) => {
  try {
    const data = await ObatModel.getAllObat();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET obat berdasarkan id
export const show = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await ObatModel.getObatById(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Obat tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// POST tambah obat
export const store = async (req, res) => {
  try {
    const { body } = req;

    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Data tidak lengkap",
      });
    }

    const { error, value } = validator(obatSchema, body);

    if (error) {
      return res.status(400).json({
        success: false,
        errors: error,
      });
    }

    const data = await ObatModel.createObat(value);

    return res.status(201).json({
      success: true,
      message: "Obat berhasil ditambahkan",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// PUT update obat
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Data tidak lengkap",
      });
    }

    const { error, value } = validator(obatUpdateSchema, body);

    if (error) {
      return res.status(400).json({
        success: false,
        errors: error,
      });
    }

    const data = await ObatModel.updateObat(id, value);

    res.status(200).json({
      success: true,
      message: "Obat berhasil diupdate",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE obat
export const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    await ObatModel.deleteObat(id);

    res.status(200).json({
      success: true,
      message: "Obat berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
