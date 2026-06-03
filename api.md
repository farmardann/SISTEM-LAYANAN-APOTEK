# Sistem Layanan Apotek API

## Base URL

http://localhost:3000/api

---

## Obat

### GET Semua Obat

GET /obat

Response:

{
"success": true,
"data": []
}

---

### GET Detail Obat

GET /obat/:id

---

### Tambah Obat

POST /obat

Body:

{
"nama_obat": "Paracetamol",
"kategori": "Demam",
"stok": 100,
"harga": 5000
}

---

### Update Obat

PUT /obat/:id

Body:

{
"nama_obat": "Paracetamol",
"kategori": "Demam",
"stok": 150,
"harga": 6000
}

---

### Hapus Obat

DELETE /obat/:id

---

## Pelanggan

GET /pelanggan

POST /pelanggan

PUT /pelanggan/:id

DELETE /pelanggan/:id

---

## Transaksi

GET /transaksi

POST /transaksi

PUT /transaksi/:id

DELETE /transaksi/:id
