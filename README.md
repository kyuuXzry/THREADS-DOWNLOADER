<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:000000,55:262626,100:737373&height=260&section=header&text=THREADS%20DOWNLOADER&fontSize=46&fontColor=FAFAFA&fontAlignY=40&desc=Scraper%20%26%20Downloader%20Threads%20Performa%20Tinggi&descSize=16&descColor=A3A3A3&descAlignY=62&animation=twinkling" width="100%"/>

<a href="https://github.com/kyuuXzry/THREADS-DOWNLOADER">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=2800&pause=900&color=A3A3A3&center=true&vCenter=true&width=700&height=45&lines=Cepat%2C+andal%2C+dan+bebas+watermark;Plugin+Baileys+%2B+CLI+Termux;Foto+resolusi+tertinggi+%7C+Video+kualitas+asli;Deteksi+media+otomatis" alt="Typing SVG"/>
</a>

<br/>

<a href="https://github.com/kyuuXzry/THREADS-DOWNLOADER/stargazers">
  <img src="https://img.shields.io/github/stars/kyuuXzry/THREADS-DOWNLOADER?style=for-the-badge&logo=github&color=262626&labelColor=000000&logoColor=FAFAFA" alt="Stars"/>
</a>
<a href="https://github.com/kyuuXzry/THREADS-DOWNLOADER/network/members">
  <img src="https://img.shields.io/github/forks/kyuuXzry/THREADS-DOWNLOADER?style=for-the-badge&logo=github&color=737373&labelColor=000000&logoColor=FAFAFA" alt="Forks"/>
</a>
<a href="https://github.com/kyuuXzry/THREADS-DOWNLOADER/issues">
  <img src="https://img.shields.io/github/issues/kyuuXzry/THREADS-DOWNLOADER?style=for-the-badge&logo=github&color=404040&labelColor=000000&logoColor=FAFAFA" alt="Issues"/>
</a>
<a href="https://github.com/kyuuXzry/THREADS-DOWNLOADER/commits">
  <img src="https://img.shields.io/github/last-commit/kyuuXzry/THREADS-DOWNLOADER?style=for-the-badge&logo=git&color=262626&labelColor=000000&logoColor=FAFAFA" alt="Last Commit"/>
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-v18%2B-000000?style=for-the-badge&logo=nodedotjs&logoColor=FAFAFA" alt="Node.js"/>
<a href="https://github.com/WhiskeySockets/Baileys">
  <img src="https://img.shields.io/badge/Baileys-Latest-000000?style=for-the-badge&logo=whatsapp&logoColor=FAFAFA" alt="Baileys"/>
</a>
<img src="https://img.shields.io/badge/Termux-Supported-000000?style=for-the-badge&logo=termux&logoColor=FAFAFA" alt="Termux"/>
<img src="https://img.shields.io/badge/Axios-HTTP-000000?style=for-the-badge&logo=axios&logoColor=FAFAFA" alt="Axios"/>
<img src="https://img.shields.io/badge/Threads-Downloader-FAFAFA?style=for-the-badge&logo=threads&logoColor=000000" alt="Threads"/>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

</div>

<br/>

<div align="center">

<h2><img src="https://api.iconify.design/lucide:book-open.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Ringkasan</h2>

</div>

Repositori ini menyediakan scraper performa tinggi untuk **Threads** dalam dua implementasi:

<table align="center" width="100%">
<tr>
<td width="50%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:bot.svg?color=%23A3A3A3" width="34"/>

**Plugin Bot WhatsApp**

Memakai library Baileys. Kirim link Threads ke bot, media langsung dikirim balik ke chat.

<sub><code>plugins/threads.js</code></sub>

</td>
<td width="50%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:terminal.svg?color=%23A3A3A3" width="34"/>

**Script CLI**

Dioptimalkan untuk Termux. Media diunduh ke penyimpanan Android lalu dibuka otomatis.

<sub><code>threads-cli.js</code></sub>

</td>
</tr>
</table>

Keduanya mendeteksi jenis media secara otomatis, mengambil gambar dengan resolusi tertinggi, mendapatkan video dengan kualitas asli, dan melewati watermark.

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:sparkles.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Fitur Utama</h2>

</div>

<table align="center" width="100%">
<tr>
<td width="33%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:scan-search.svg?color=%23A3A3A3" width="30"/>

**Deteksi Media Otomatis**

Membedakan gambar (`mediaType 1`) dan video (`mediaType 2`).

</td>
<td width="33%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:image.svg?color=%23A3A3A3" width="30"/>

**Resolusi Tertinggi**

Memilih gambar dengan jumlah piksel terbanyak (`lebar × tinggi`).

</td>
<td width="33%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:video.svg?color=%23A3A3A3" width="30"/>

**Video Kualitas Asli**

Mengambil URL video bertipe `101` untuk kualitas terbaik yang tersedia.

</td>
</tr>
<tr>
<td width="33%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:droplets.svg?color=%23A3A3A3" width="30"/>

**Bebas Watermark**

Media diambil langsung dari sumbernya tanpa watermark tambahan.

</td>
<td width="33%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:file-text.svg?color=%23A3A3A3" width="30"/>

**Metadata Lengkap**

Mengekstrak username penulis dan caption postingan secara akurat.

</td>
<td width="33%" valign="top" align="center">

<img src="https://api.iconify.design/lucide:download.svg?color=%23A3A3A3" width="30"/>

**Unduh Otomatis (CLI)**

Simpan ke penyimpanan Android dan buka lewat `termux-open`.

</td>
</tr>
</table>

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:workflow.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Cara Kerja</h2>

</div>

```mermaid
flowchart LR
    A([Link Threads]) --> B[Validasi URL]
    B --> C[POST ke API threadsdl.app]
    C --> D{Tipe media}
    D -->|mediaType 1| E[Pilih gambar<br/>piksel terbanyak]
    D -->|mediaType 2| F[Pilih video<br/>tipe 101]
    E --> G([Kirim ke chat / Simpan ke storage])
    F --> G
```

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:settings.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Prasyarat</h2>

</div>

```bash
$ node -v
v18.17.0   # versi minimum yang dibutuhkan

$ npm install axios
```

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:package.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Instalasi &amp; Penggunaan</h2>

</div>

### <img src="https://api.iconify.design/lucide:bot.svg?color=%23A3A3A3" width="22" align="center"/>&nbsp;A. Bot WhatsApp (Baileys)

1. Salin file `threads.js` ke direktori `plugins/` bot Anda.
2. Pastikan file utama bot (misalnya `main.js`) mengirim parameter `m, { conn, text, command, usedPrefix }` ke plugin.
3. Restart bot Anda.
4. Gunakan perintahnya:

```text
.threads https://www.threads.net/@user/post/xxxx
```

> Alias yang tersedia: `.threads`, `.threadsdl`, `.threadsdownloader`

### <img src="https://api.iconify.design/lucide:terminal.svg?color=%23A3A3A3" width="22" align="center"/>&nbsp;B. CLI (Termux / Terminal)

1. Unduh file `threads-cli.js`.
2. *(Opsional)* Untuk fitur buka otomatis, pasang Termux API: `pkg install termux-api` dan aplikasi **Termux:API**.
3. Aktifkan izin penyimpanan di Termux: `termux-setup-storage`.
4. Jalankan:

```bash
node threads-cli.js
```

5. Tempel URL Threads saat diminta.

File hasil unduhan disimpan di `/storage/emulated/0/jsom`.

<details>
<summary><b>Contoh tampilan CLI</b></summary>

```text
============================================================
  THREADS DOWNLOADER - UNDUH & BUKA OTOMATIS
============================================================

[12:00:01] [INFO] Target URL: https://www.threads.net/@user/post/xxxx
[12:00:01] [PROSES] Menghubungi API ThreadsDL...
------------------------------------------------------------
  METADATA POSTINGAN
------------------------------------------------------------
  Username : @user
  Caption  : "Contoh caption postingan"
------------------------------------------------------------

[ Media 1 ]
  Tipe     : Video (MP4)
  Kualitas : Asli / HD
[12:00:03] [SELESAI] Tersimpan: threads_user_1700000000000_1.mp4
```

</details>

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:wrench.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Konfigurasi Teknis (Plugin)</h2>

</div>

Plugin mengikuti arsitektur standar Baileys. Jika base bot Anda berbeda, sesuaikan parameter dan pemanggilan fungsinya.

| Parameter | Tipe Data | Deskripsi |
| :-- | :-- | :-- |
| `m` | `Object` | Objek pesan masuk dari Baileys. |
| `conn` | `Object` | Objek koneksi socket Baileys. |
| `text` | `String` | URL setelah command. |
| `command` | `String` | Nama command yang dipanggil. |
| `usedPrefix` | `String` | Prefix command (contoh: `.`). |

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:folder-tree.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Struktur Repositori</h2>

</div>

```text
THREADS-DOWNLOADER
├── plugins
│   └── threads.js        # Plugin bot WhatsApp (Baileys)
├── threads-cli.js        # Script CLI untuk Termux / Terminal
└── README.md
```

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:life-buoy.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Pemecahan Masalah</h2>

</div>

| Masalah | Solusi |
| :-- | :-- |
| `Link tidak valid` | Pastikan URL mengandung `threads.net` atau `threads.com`. |
| `Koneksi timeout` | Server API terlalu lama merespons. Coba lagi beberapa saat kemudian. |
| Gagal membuat folder (CLI) | Jalankan `termux-setup-storage` dan izinkan akses penyimpanan. |
| File tidak terbuka otomatis | Pasang `termux-api` dan aplikasi Termux:API. |
| Plugin tidak merespons | Cek apakah struktur parameter bot Anda sama dengan struktur standar Baileys. |

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:737373,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:send.svg?color=%23A3A3A3" width="26" align="center"/>&nbsp;Kontak</h2>

<a href="https://wa.me/628567126744">
  <img src="https://img.shields.io/badge/WhatsApp-Hubungi-262626?style=for-the-badge&logo=whatsapp&logoColor=FAFAFA&labelColor=000000"/>
</a>
<a href="https://instagram.com/rissxzry_">
  <img src="https://img.shields.io/badge/Instagram-Follow-262626?style=for-the-badge&logo=instagram&logoColor=FAFAFA&labelColor=000000"/>
</a>
<a href="https://github.com/kyuuXzry">
  <img src="https://img.shields.io/badge/GitHub-kyuuXzry-262626?style=for-the-badge&logo=github&logoColor=FAFAFA&labelColor=000000"/>
</a>

<br/><br/>

<sub>Jika repositori ini bermanfaat, berikan <b>bintang</b> sebagai dukungan.</sub>

<br/><br/>

<a href="https://github.com/kyuuXzry/THREADS-DOWNLOADER/stargazers">
  <img src="https://img.shields.io/badge/GIVE%20A%20STAR-262626?style=for-the-badge&logo=github&logoColor=FAFAFA&labelColor=000000"/>
</a>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=14&duration=3500&pause=1500&color=A3A3A3&center=true&vCenter=true&width=480&height=30&lines=Dirancang+dengan+presisi+oleh+KyuuXzry." alt="footer typing"/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:737373,55:262626,100:000000&height=120&section=footer&animation=twinkling" width="100%"/>

</div>
