import { prismaClient } from "../database/dbConfig.js";

export const getAllTransaksi = () => {
  return prismaClient.transaksi.findMany({
    include: {
      obat: true,
      pelanggan: true,
    },
  });
};

export const getTransaksiById = (id) => {
  return prismaClient.transaksi.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const createTransaksi = (data) => {
  return prismaClient.transaksi.create({
    data: {
      obatId: Number(data.obatId),
      pelangganId: Number(data.pelangganId),
      jumlah: Number(data.jumlah),
      total_harga: Number(data.total_harga),
      harga_satuan: Number(data.harga_satuan),
      tanggal: data.tanggal,
      kode_transaksi: data.kode_transaksi,
      metode_bayar: data.metode_bayar,
      status: data.status,
    },
  });
};

export const deleteTransaksi = (id) => {
  return prismaClient.transaksi.delete({
    where: {
      id: Number(id),
    },
  });
};
