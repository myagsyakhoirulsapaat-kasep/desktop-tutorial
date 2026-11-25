# Portfolio Yagsya

Website statis portfolio pribadi. File utama berada di `index.html`, sedangkan CSS, JavaScript, gambar, dan halaman proyek disimpan terpisah agar mudah dikelola.

## Struktur

```text
cek ombak/
├── assets/
│   ├── css/
│   ├── images/
│   └── js/
├── projects/
│   ├── perkenalan.html
│   └── webinkuiri/
├── index.html
└── README.md
```

## Menjalankan lokal

Buka `index.html` di browser. Tidak perlu instalasi dependency atau proses build.

## Deploy ke Vercel

Impor repository GitHub ke Vercel dan atur **Root Directory** ke folder `cek ombak` (atau `.` jika repository hanya berisi isi folder ini). Karena ini website HTML statis, biarkan **Build Command** dan **Output Directory** kosong; tidak perlu framework preset.

Setelah push perubahan ke branch yang terhubung, Vercel akan menjalankan deployment otomatis.
