# SISTEM LAYANAN APOTEK

Singkat: backend API untuk layanan apotek — mengelola obat, pelanggan, dan transaksi. Dibangun dengan Node.js, Express, dan Prisma.

## Teknologi
- Node.js
- Express
- Prisma
- Database: MySQL (lihat `prisma/schema.prisma`)

## Prasyarat
- Node.js 16+ dan `npm`
- Database MySQL (atau yang disesuaikan di `DATABASE_URL`)

## Instalasi
1. Clone repository:

   git clone https://github.com/farmardann/SISTEM-LAYANAN-APOTEK.git

2. Masuk ke folder proyek:

   cd "SISTEM LAYANAN APOTEK"

3. Instal dependensi:

```bash
npm install
```

## Konfigurasi
- Duplikasi ` .env.example` menjadi `.env` dan sesuaikan nilai:

```
DATABASE_URL="mysql://root:@localhost:3306/your_database_name"
JWT_SECRET="your_jwt_secret"
PORT=2026
```

- Pastikan `DATABASE_URL` sesuai server database Anda.

## Prisma (migrasi & seed)
- Jalankan migrasi development:

```bash
npx prisma migrate dev
```

- Jalankan seed:

```bash
node prisma/seed.js
```

## Menjalankan Aplikasi
- Development:

```bash
npm run dev
```

## Dokumentasi API
- Dokumentasi Spesifikasi API tersedia di [api-docs.md](api-docs.md).

## Dokumentasi Pengujian dengan Swagger UI
Aplikasi mendukung Swagger UI untuk membaca dan menguji spesifikasi OpenAPI.

Langkah cepat:

1. Jalankan server:

```bash
npm run dev
```

2. Buka Swagger UI di browser:

`http://localhost:2026/api-docs` (ganti `2026` sesuai `PORT` di `.env` jika berbeda)

3. Di Swagger UI:
- Pilih endpoint yang diinginkan.
- Klik **Try it out** untuk mengisi parameter dan body.
- Jika endpoint memerlukan otentikasi, klik tombol **Authorize** dan masukkan token dengan format `Bearer <token>` atau tambahkan header `Authorization: Bearer <token>` sebelum eksekusi.

4. Klik **Execute** untuk menjalankan request dan lihat respons.

## File Laporan Web Service Programming
- Berikut adalah file laporannya [LAPORAN WEB SERVICE.pdf](LAPORAN-WEB-SERVICE.pdf)
  
## Debugging & Logs
- Lihat output terminal saat menjalankan `npm run dev`.
- Periksa koneksi database jika ada error terkait DB.

## Kontak & Kontribusi
- Untuk perubahan dokumentasi atau penambahan endpoint, beri tahu saya detail yang ingin ditambahkan.

