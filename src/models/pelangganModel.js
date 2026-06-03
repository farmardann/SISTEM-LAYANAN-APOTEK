import { prismaClient } from "../database/dbConfig.js";

export const getAllPelanggan = () => {
  return prismaClient.pelanggan.findMany();
};

export const getPelangganById = (id) => {
  return prismaClient.pelanggan.findUnique({
    where: { id: Number(id) },
  });
};

export const createPelanggan = (data) => {
  return prismaClient.pelanggan.create({
    data,
  });
};

export const updatePelanggan = (id, data) => {
  return prismaClient.pelanggan.update({
    where: { id: Number(id) },
    data,
  });
};

export const deletePelanggan = (id) => {
  return prismaClient.pelanggan.delete({
    where: { id: Number(id) },
  });
};