import * as TransaksiModel from "../models/transaksiModel.js";
import validator from "../validators/validator.js";
import {
  transaksiSchema,
} from "../validators/transaksiValidator.js";

export const index = async (req, res) => {
  try {
    const data = await TransaksiModel.getAllTransaksi();
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

    const data = await TransaksiModel.getTransaksiById(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Transaksi tidak ditemukan",
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

    const { error, value } = validator(transaksiSchema, body);

    if (error) {
      return res.status(400).json({
        success: false,
        errors: error,
      });
    }

    const data = await TransaksiModel.createTransaksi(value);

    return res.status(201).json({
      success: true,
      message: "Tambah transaksi berhasil",
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

    const data = await TransaksiModel.deleteTransaksi(id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Transaksi tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Transaksi berhasil dihapus",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};