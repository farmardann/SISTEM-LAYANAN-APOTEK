# 💊 Sistem Layanan Apotek — API Documentation

> **Base URL:** `http://localhost:2026/api`  
> **Authentication:** JWT Bearer Token (kecuali endpoint `/auth`)  

---

## 🔐 Authentication

### Login

| | |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/auth` |
| **Auth** | ❌ Tidak diperlukan |

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response Success (200):**
```json
{
    "status": true,
    "message": "Login Success",
    "data": {
        "id": 1,
        "name": "admin",
        "email": "admin@example.com",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Field Password salah atau kosong | `{ "message": "Invalid Password" }` |
| `404` | Field email salah atau kosong | `{ "message": "User not found" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

## 💊 Obat

> Semua endpoint Obat memerlukan header: `Authorization: Bearer <token>`

### Get All Obat

| | |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/obat` |
| **Auth** | ✅ JWT Required |

**Response Success (200):**
```json
{
    "succes": true,
    "data": [ 
        {
        "id": 1,
        "nama_obat": "Paracetamol",
        "kategori": "Demam",
        "stok": 100,
        "....."
        }
    ]
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Get Obat by ID

| | |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/obat/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID obat |

**Response Success (200):**
```json
{
    "success": true,
    "data": {
        "id": 5,
        "nama_obat": "Bodrex",
        "kategori": "Demam",
        "stok": 100,
        "....."
    }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Obat dengan ID tersebut tidak ditemukan | `{ "success: false", "message": "Obat tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Create Obat

| | |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/obat` |
| **Auth** | ✅ JWT Required |

**Request Body:**
```json
{
  "nama_obat": "Sangobion",
  "kategori": "Suplemen",
  "stok": 85,
  "deskripsi": "Suplemen zat besi dan vitamin untuk mengatasi anemia.",
  "harga_beli": 18500,
  "harga_jual": 22000,
  "kode_obat": "SNG-003",
  "satuan": "Box",
  "supplier": "PT Merck Tbk",
  "tanggal_expired": "2028-10-15T00:00:00.000Z",
  "tanggal_masuk": "2026-06-01T00:00:00.000Z"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Obat berhasil ditambahkan",
  "data": {
    "nama_obat": "Sangobion",
    "kategori": "Suplemen",
    "stok": 85,
    "......"
  }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `400` | Field wajib tidak diisi / tipe data salah | `{ "success": false, "error": "nama_obat wajib diisi, ....." }` |
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Update Obat

| | |
|---|---|
| **Method** | `PUT` |
| **Endpoint** | `/obat/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID obat yang akan diupdate |

**Request Body:**
```json
{
  "nama_obat": "Vitacimin",
  "kategori": "Suplemen",
  "stok": 80,
  "deskripsi": "Suplemen vitamin C",
  "harga_beli": 18500,
  "harga_jual": 22000,
  "kode_obat": "SNG-004",
  "satuan": "Box",
  "supplier": "PT Merck Tbk",
  "tanggal_expired": "2028-10-15T00:00:00.000Z",
  "tanggal_masuk": "2026-06-01T00:00:00.000Z"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Obat berhasil diupdate",
  "data": {
    "id": 1,
    "nama_obat": "Vitacimin",
    "kategori": "Suplemen",
    "stok": 80
    "......"
  }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `400` | Field tidak valid / tipe data salah | `{ "success": false, "error": "harga harus berupa angka, ......" }` |
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Obat dengan ID tersebut tidak ditemukan | `{ "success": false, "message": "Obat tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Delete Obat

| | |
|---|---|
| **Method** | `DELETE` |
| **Endpoint** | `/obat/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID obat yang akan dihapus |

**Response Success (200):**
```json
{
  "success": true,
  "message": "Obat berhasil dihapus"
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Obat dengan ID tersebut tidak ditemukan | `{ "success": false,"message": "Obat tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

## 👤 Pelanggan

> Semua endpoint Pelanggan memerlukan header: `Authorization: Bearer <token>`

### Get All Pelanggan

| | |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/pelanggan` |
| **Auth** | ✅ JWT Required |

**Response Success (200):**
```json
{
    "succes": true,
    "data": [ 
        {
        "id": 1,
        "nama": "Budi Santoso",
        "alamat": "Jl. Merdeka No. 1",
        "no_telepon": "08123456789",
        "....."
        }
    ]
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Get Pelanggan by ID

| | |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/pelanggan/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID pelanggan |

**Response Success (200):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "nama": "Budi Santoso",
        "alamat": "Jl. Merdeka No. 1",
        "no_telepon": "08123456789",
        "....."
    }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Pelanggan dengan ID tersebut tidak ditemukan | `{ "success": false, "message": "Pelanggan tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Create Pelanggan

| | |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/pelanggan` |
| **Auth** | ✅ JWT Required |

**Request Body:**
```json
{
    "nama": "Kevin Hendara",
    "alamat": "Jl. Merdeka No. 123, Bandung",
    "no_hp": "081234567811",
    "email": "kevin.hendrawan@example.com",
    "jenis_kelamin": "L",
    "kode_member": "MBR-2026-002"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Pelanggan berhasil ditambahkan",
  "data": {
    "id": 1,
    "nama": "Kevin Hendara",
    "alamat": "Jl. Merdeka No. 123, Bandung",
    "no_telepon": "081234567811",
    "......"
  }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `400` | Field wajib tidak diisi / tipe data salah | `{ "success": false, "error": "nama wajib diisi", .... }` |
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Update Pelanggan

| | |
|---|---|
| **Method** | `PUT` |
| **Endpoint** | `/pelanggan/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID pelanggan yang akan diupdate |

**Request Body:**
```json
{
    "nama": "Kevin Sanjaya",
    "alamat": "Jl. Merdeka No. 123, Bandung",
    "no_hp": "081234567811",
    "email": "kevin.hendrawan@example.com",
    "jenis_kelamin": "L",
    "kode_member": "MBR-2026-002"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Pelanggan berhasil diupdate",
  "data": {
    "id": 1,
    "nama": "Kevin Sanjaya",
    "alamat": "Jl. Merdeka No. 123, Bandung",
    "no_telepon": "081234567811",
    "......"
  }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `400` | Field tidak valid / tipe data salah | `{ "success": false, "error": "no_telepon harus berupa string" }` |
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Pelanggan dengan ID tersebut tidak ditemukan | `{ "success": false,"message": "Pelanggan tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Delete Pelanggan

| | |
|---|---|
| **Method** | `DELETE` |
| **Endpoint** | `/pelanggan/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID pelanggan yang akan dihapus |

**Response Success (200):**
```json
{
  "success": true,
  "message": "Pelanggan berhasil dihapus"
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Pelanggan dengan ID tersebut tidak ditemukan | `{ "success": false,"message": "Pelanggan tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

## 🧾 Transaksi

> Semua endpoint Transaksi memerlukan header: `Authorization: Bearer <token>`

### Get All Transaksi

| | |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/transaksi` |
| **Auth** | ✅ JWT Required |

**Response Success (200):**
```json
{
    "succes": true,
    "data": [ 
        {
        "id": 1,
        "jumlah": "Budi Santoso",
        "total_harga": "Jl. Merdeka No. 1",
        "tanggal": "2026-06-03T13:00:00.000Z",
        "....."
        }
    ]
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Get Transaksi by ID

| | |
|---|---|
| **Method** | `GET` |
| **Endpoint** | `/transaksi/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID transaksi |

**Response Success (200):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "jumlah": "Budi Santoso",
        "total_harga": "Jl. Merdeka No. 1",
        "tanggal": "2026-06-03T13:00:00.000Z",
        "....."
    }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Transaksi dengan ID tersebut tidak ditemukan | `{ "success": false,"message": "Transaksi tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Create Transaksi

| | |
|---|---|
| **Method** | `POST` |
| **Endpoint** | `/transaksi` |
| **Auth** | ✅ JWT Required |

**Request Body:**
```json
{
  "jumlah": 5,
  "total_harga": 105000,
  "tanggal": "2026-06-03T13:00:00.000Z",
  "obatId": 1,
  "pelangganId": 1,
  "harga_satuan": 15000,
  "kode_transaksi": "TRX-20260603-001",
  "metode_bayar": "Tunai",
  "status": "Sukses"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Transaksi berhasil dibuat",
  "data": {
    "jumlah": 5,
    "total_harga": 105000,
    "tanggal": "2026-06-03T13:00:00.000Z",
    "....."
  }
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `400` | Field wajib tidak diisi / tipe data salah | `{ "success": false, "error": "jumlah harus berupa angka positif", .... }` |
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Pelanggan atau Obat tidak ditemukan | `{ "success": false,"message": "Pelanggan tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---

### Delete Transaksi

| | |
|---|---|
| **Method** | `DELETE` |
| **Endpoint** | `/transaksi/:id` |
| **Auth** | ✅ JWT Required |

**Path Parameter:**

| Parameter | Tipe | Deskripsi |
|---|---|---|
| `id` | `integer` | ID transaksi yang akan dihapus |

**Response Success (200):**
```json
{
  "success": true,
  "message": "Transaksi berhasil dihapus"
}
```

**Response Error:**

| Status | Kondisi | Response Body |
|---|---|---|
| `401` | Token tidak ada atau tidak valid | `{ "error": "Invalid Token" }` |
| `404` | Transaksi dengan ID tersebut tidak ditemukan | `{ "success": false,"message": "Transaksi tidak ditemukan" }` |
| `500` | Kesalahan server | `{ "message": "Internal Server Error" }` |

---
