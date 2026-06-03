export const index = (req, res) => {
  res.json({
    success: true,
    message: "GET semua transaksi",
  });
};

export const show = (req, res) => {
  res.json({
    success: true,
    message: `GET transaksi ${req.params.id}`,
  });
};

export const store = (req, res) => {
  res.json({
    success: true,
    message: "Tambah transaksi",
  });
};

export const destroy = (req, res) => {
  res.json({
    success: true,
    message: `Hapus transaksi ${req.params.id}`,
  });
};