import { prismaClient } from "../database/dbConfig.js";

export const getAllObat = () => {
  return prismaClient.obat.findMany();
};

export const getObatById = (id) => {
  return prismaClient.obat.findUnique({
    where: { id: Number(id) },
  });
};

export const createObat = (data) => {
  return prismaClient.obat.create({
    data,
  });
};

export const updateObat = (id, data) => {
  return prismaClient.obat.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteObat = (id) => {
  return prismaClient.obat.findUnique({
    where: { id: Number(id) },
  });
};