# Undangan Pernikahan — Anan & Sarah

Vue 3 + Vite. Semua konten undangan ada di satu file: `src/config/invitation.js`.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil siap deploy ada di dist/
```

## Yang perlu Anda isi

Buka `src/config/invitation.js`:

| Bagian | Isi |
|---|---|
| `groom` / `bride` | nama, nama orang tua, Instagram, foto |
| `weddingDate` | tanggal acara (format ISO, sudah +07:00) |
| `unlockDays` | `0` = undangan langsung bisa dibuka. `5` = baru bisa dibuka H-5 |
| `heroPhoto` | foto besar di layar hero |
| `story` | 3 milestone love story |
| `events` | Akad & Resepsi, termasuk link Google Maps |
| `gallery` | 6 slot foto |
| `banks` / `giftAddress` | rekening & alamat kirim hadiah |
| `rsvpEndpoint` | kosong = RSVP tersimpan di browser saja |
| `hashtag` | tagar acara |

### Menambahkan foto

Taruh file di `public/photos/`, lalu tulis path-nya di config:

```js
groom: { photo: "/photos/groom.jpg", ... }
heroPhoto: "/photos/hero.jpg",
gallery: [{ photo: "/photos/gal-1.jpg", ... }]
```

Slot yang kosong otomatis menampilkan placeholder, jadi tidak akan rusak.

### Mengganti musik

Taruh file di `public/audio/`, lalu ubah `config.music`. Bawaannya
`music-default.wav` — loop instrumental sementara, sebaiknya diganti.

## Menyimpan RSVP sungguhan (semua tamu lihat ucapan yang sama)

Cara paling ringan: Google Apps Script yang membaca & menulis ke Google Sheet.
`doPost` menyimpan ucapan baru, `doGet` mengembalikan semua ucapan sebagai
JSON — ini yang dipakai undangan untuk menampilkan daftar ucapan bersama ke
semua tamu, bukan cuma yang tersimpan di browser masing-masing.

1. Buat Google Sheet baru, lalu **Extensions → Apps Script**.
2. Tempel:

```js
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSheet().appendRow([new Date(), d.name, d.attend, d.msg]);
  return ContentService.createTextOutput("ok");
}

function doGet(e) {
  const rows = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  const wishes = rows.map(r => ({
    at: r[0] instanceof Date ? r[0].toISOString() : String(r[0]),
    name: String(r[1] || ""),
    attend: String(r[2] || ""),
    msg: String(r[3] || "")
  })).filter(w => w.name && w.msg);

  return ContentService
    .createTextOutput(JSON.stringify(wishes))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy → New deployment → Web app**, akses "Anyone".
4. Salin URL-nya ke `config.rsvpEndpoint`.

Saat undangan dibuka, daftar ucapan lama (localStorage) tampil dulu supaya
tidak pernah kosong, lalu diam-diam diganti dengan daftar dari Google Sheet
begitu berhasil dimuat — jadi semua tamu melihat ucapan yang sama. Kalau
`rsvpEndpoint` kosong atau gagal diakses (offline, server error), undangan
otomatis kembali memakai `localStorage` per-perangkat sebagai cadangan.

**Catatan:** setiap kali deploy ulang Apps Script (misal setelah mengubah
kode di atas), URL deployment bisa berubah — pastikan `config.rsvpEndpoint`
diperbarui ke URL yang baru.

## Tautan undangan personal

`?to=Nama+Tamu` akan muncul di layar pembuka. Blok "Bagikan Undangan" di
penutup membuat tautan ini otomatis, termasuk pesan WhatsApp siap kirim.

## Struktur

```
src/
  config/invitation.js      ← SEMUA KONTEN DI SINI
  assets/main.css           ← reset, keyframes, kelas hover
  composables/
    useCountdown.js         countdown + lock H-n
    useScrollSpy.js         progress bar, section aktif, smooth scroll
    useSfx.js               efek suara + getaran
    useRsvp.js              simpan ucapan
  components/
    ThePreloader.vue        layar muat
    SealRitual.vue          ritual buka segel lilin
    OpeningScreen.vue       nama + nama tamu + tombol buka
    GoldName.vue            kaligrafi tinta emas + kilau foil
    HeroSection.vue
    QuoteSection.vue
    CoupleSection.vue
    StorySection.vue
    EventSection.vue
    GallerySection.vue
    RsvpSection.vue
    GiftSection.vue
    ClosingSection.vue
    NavDock.vue
    MusicButton.vue
    SectionHeading.vue
    PhotoSlot.vue
```

## Catatan teknis

- Animasi reveal memakai `animation-timeline: view()`; di browser yang belum
  mendukung, elemen langsung tampil utuh (tanpa animasi) — tidak pernah
  tersembunyi permanen.
- `prefers-reduced-motion` dihormati di `main.css`.
- Warna dan font mengikuti palet emerald + emas; token warna ada di
  `config/invitation.js` (export `c`) bila ingin dipakai di komponen baru.
