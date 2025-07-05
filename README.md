# Technical Test CyberSecurity MBC Laboratory
DIpublikasi untuk memenuhi Technical Test MBC 2025

# MBC-Technical-Test-2025-1-
Proyek Website ini dibuat untuk memenuhi persyaratan technical test MBC Lab divisi CyberSecurity. Project ini terdiri dari frontend berbasis HTML, CSS & JavaScript, serta backend sederhana menggunakan Node.js untuk mengelola form kontak. Project ini telah dideploy secara online menggunakan Vercel.

## Live Website :

https://mbc-technical-test-2025-1-i6q91mlvy-afif-alims-projects.vercel.app/

## Struktur Proyek

````bash

```plaintext
mbc-lab-website/
├── backend/                  # Server & API
│   ├── node_modules/         # Dependencies Node.js
│   ├── .env                  # Konfigurasi environment (email, port)
│   ├── package-lock.json     # Lock dependency versions
│   ├── package.json          # Dependencies & scripts
│   ├── README.md             # Panduan backend
│   └── server.js             # API & email handler
│
└── frontend/                 # Client-side
    ├── assets/               # Aset statis
    │   ├── Logo MBC (2).png  # Logo utama
    │   └── profile-pict1.jpg # Foto developer
    ├── index.html            # Halaman utama
    ├── main.js               # Interaksi & animasi
    └── styles.css

````

## Langkah - langkah/Instruksi Instalasi Lokal

Berikut langkah-langkah untuk menjalankan project ini di komputer secara lokal:

### 1. Duplicate Repository

Duplicate repository berikut ke komputer anda:

```bash
git clone https://github.com/Api1pp/MBC-Technical-Test-2025-1-
cd MBC-Technical-Test-2025-1-
```

### 2. Jalankan Back-End

Masuk ke folder Backend, install dependesi, lalu jalankan server:

```bash
cd backend
npm install
node server.js
```

\*pastikan Node.js sudah terinstall di perangkat anda : https://nodejs.org
\*disarankan untuk menggunakan command promt/bash dari git : https://git-scm.com/downloads

### 3. Buka Frontend

Buka file HTML dari folder frontend/ langsung lewat browser:
-index.html
-styles.css
-main.js

## Deployment

1. Buka halaman github, login dengan masing-masing akun
2. Ke bagian repositories, lalu klik new untuk membuat repository baru
3. Buat repository, atur judul, deskripsi & settings lain sesuai keinginan (bisa gunakan default)
4. Create Repository
5. Klik opsi add file, lalu upload files
6. Upload keseluruhan file source code dari VS Code
7. Bisa juga dilakukan dengan cara berikut

   - Copy URL repo GitHub, lalu :

```bash
git remote add origin https://github.com/Api1pp/MBC-Technical-Test-2025-1-
git branch -M main
git push -u origin main
```

-Project akan muncul di Github

8. Deployment melalui Vercel (Frontend)

- Buka: https://vercel.com
- Login dengan akun GitHub
- Klik New Project
- Pilih repo anda → MBC-Technical-Test-2025-1-
- Klik Deploy, lalu biarkan vercel melakukan generate website beserta dengan linknya

🔗 Live: https://mbc-technical-test-2025-1-i6q91mlvy-afif-alims-projects.vercel.app/

### Backend

Source Code backend masih dijalankan secara lokal. Serta terdapat beberapa kendala di dalam program backend sehingga hasil tidak dapat berjalan secara maksimal ketika diaplikasikan untuk form kontak.

## Konfigurasi SSL & Backend

- Frontend sudah otomatis menggunakan protokol HTTPS dari Vercel, sehingga aman saat diakses publik.
- Backend saat ini masih dijalankan secara lokal melalui server.js, dan belum dihosting secara online.
- Belum menggunakan file .env, namun struktur project sudah mendukung jika dibutuhkan di masa depan.

## Catatan

- Kendala:
  Backend belum terdeploy secara online (masih lokal)
  Integrasi form kontak memerlukan penyempurnaan

* Improvement Potensial:
  - Deployment backend menggunakan Render/Railway
  - Penambahan database untuk menyimpan pesan
  - Implementasi autentikasi untuk admin panel

## Penutup

Proyek ini disusun oleh Afif Alim Mufid sebagai bagian dari Technical Test MBC 2025 yang dilaksanakan untuk merekrut asisten - asisten riset Laboratorium MBC 2025. Dokumentasi, struktur folder, serta alur kerja aplikasi telah diupayakan sebaik mungkin agar mudah dipahami. Meski masih terdapat keterbatasan sistem, saya yakin dengan pembekalan pengetahuan yang lebih maksimal proyek ini akan siap dikembangkan ke tahap selanjutnya.
Terima kasih kepada MBC Laboratory atas kesempatan mengerjakan technical test ini. Proyek ini telah memberikan pengalaman berharga dalam:

- Pengembangan fitur keamanan (HTTPS, form validation)
- Integrasi frontend-backend
- Deployment modern dengan Vercel

