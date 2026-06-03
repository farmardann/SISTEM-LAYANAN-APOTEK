import { prismaClient } from "../database/dbConfig.js";

export const getAllTransaksi = () => {
  return prismaClient.transaksi.findMany({
    include: {
      obat: true,
      pelanggan: true,
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