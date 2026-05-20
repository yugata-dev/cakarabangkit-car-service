
# Car Service Cakarabangkit - Landing Page

Landing page responsif dan modern untuk **Cakarabangkit Car Service**, sebuah bisnis perawatan dan perbaikan otomotif profesional yang berbasis di Malang. Website ini dirancang untuk memberikan informasi layanan, menampilkan profil bengkel, serta memfasilitasi pelanggan untuk mengirim pesan atau melakukan *booking* servis.

---

## 🚀 Fitur Utama

* **Desain Modern & Responsif:** Tampilan optimal di berbagai perangkat, mulai dari desktop, tablet, hingga *smartphone* (Mobile-first adjustment).
* **Menu Navigasi Dinamis:** Fitur *hamburger menu* yang interaktif pada layar perangkat *mobile*.
* **Formulir Kontak Terintegrasi:** Fitur kirim pesan/feedback yang berfungsi langsung (tanpa *backend* sendiri) menggunakan **Web3Forms**.
* **Ikon Kustom:** Menggunakan **Feather Icons** untuk visual yang bersih dan minimalis.
* **Tipografi Menarik:** Kombinasi *font* Bebas Neue, Barlow Condensed, Montserrat, dan Inter untuk kesan otomotif yang kuat dan profesional.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5** - Untuk struktur semantik halaman web.
* **CSS3 (Custom Properties & Grid/Flexbox)** - Untuk tata letak modern tanpa *framework* tambahan (Pure CSS).
* **JavaScript (Vanilla JS)** - Untuk logika interaksi komponen (Toggle menu & penanganan *submit* formulir AJAX).
* **Feather Icons** - Untuk penyediaan komponen ikon di seluruh halaman.
* **Web3Forms API** - Untuk menangani pengiriman formulir langsung ke email.

---

## 📂 Struktur Berkas

```text
├── index.html          # Halaman utama website
├── style.css           # Berkas gaya/styling utama (termasuk media queries)
├── app.js              # Logika JavaScript untuk interaksi & integrasi form
└── src/                # Direktori untuk aset gambar pendukung

```

---

## ⚙️ Konfigurasi Formulir Kontak (Web3Forms)

Formulir kontak pada website ini menggunakan layanan **Web3Forms** agar dapat menerima pesan langsung ke email tanpa perlu membuat server *backend*.

Untuk mengaktifkannya secara penuh:

1. Daftarkan email Anda di [Web3Forms](https://web3forms.com/) untuk mendapatkan **Access Key**.
2. Buka file `index.html`.
3. Cari baris berikut di dalam `<form>` bagian kontak:
```html

<input type="hidden" name="access_key" value="masukan-code-khusus-dari-web3form">

```


4. Ganti nilai `value` tersebut dengan **Access Key** pribadi Anda.

---

## 📸 Lisensi & Kredit

* Desain & Kode oleh [Yugata Halimawan](https://github.com/yugata-dev)
* Gambar aset bersumber dari Unsplash (kategori otomotif/bengkel).

Kamu tinggal buka file `README.md` lewat VS Code (atau text editor andalanmu), lalu **copypaste seluruh isi kotak di atas** ke dalamnya, terus di-save.

### 2. Bagian "Sedikit Catatan Tambahan untuk Proyekmu"
Kalau yang ini **TIDAK PERLU ditaro di mana-mana**. 

Itu cuma pesan/catatan apresiasi dariku buat kamu, karena aku melihat logika `fetch` di `app.js` yang kamu bikin sudah bagus banget buat ukuran pemula. Jadi itu murni obrolan kita di sini saja, gak usah dimasukkan ke kode atau ke GitHub.

Sampai di sini, apakah file `README.md` di komputermu sudah aman diisi?
```
