import * as PelangganModel from "../models/pelangganModel.js";
import validator from "../validators/validator.js";
import {
  pelangganSchema,
} from "../validators/pelangganValidator.js";

export const index = async (req, res) => {
  try {
    const data = await PelangganModel.getAllPelanggan();
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


export const show = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PelangganModel.getPelangganById(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Pelanggan tidak ditemukan",
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

export const store = async (req, res) => {
  try {
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

  const data = await PelangganModel.createPelanggan(value);
  
  return res.status(201).json({
    success: true,
    message: "Tambah pelanggan berhasil",
    data,
  });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data_id = await PelangganModel.getPelangganById(id);
    if (!data_id) {
      return res.status(404).json({
        success: false,
        message: "Pelanggan tidak ditemukan",
      });
    }
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

    const data = await PelangganModel.updatePelanggan(id, value);

    res.status(200).json({
      success: true,
      message: "Pelanggan berhasil diupdate",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PelangganModel.deletePelanggan(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Pelanggan tidak ditemukan",
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Pelanggan berhasil dihapus",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
