# Cara Menyesuaikan Undangan

Semua penyesuaian dilakukan di satu file: **`src/config/invitation.js`**.
Tidak ada teks, foto, tanggal, atau warna yang perlu diubah dari file komponen.

## Isi file config

| Bagian | Isi |
|---|---|
| `site` | Judul tab browser & preview saat link dibagikan (otomatis diterapkan, `index.html` tidak perlu diubah) |
| `groom`, `bride` | Nama lengkap, nama pendek, orang tua, Instagram, foto |
| `monogram` | Inisial pada segel lilin & layar loading, mis. `"A&S"` |
| `weddingDate`, `dateLabel`, `dateShort`, `dateShareText` | Tanggal acara & cara penulisannya di berbagai tempat |
| `unlockDays` | `0` = undangan langsung bisa dibuka. `5` = baru bisa dibuka mulai H-5 |
| `hashtag` | Tagar pasangan |
| `heroPhoto`, `music`, `musicVolume`, `sfx` | Media |
| `quote` | Ayat pembuka |
| `story`, `storyClosing` | Timeline love story |
| `events`, `calendarUrl` | Akad & resepsi |
| `gallery` | 6 slot foto galeri |
| `banks`, `giftAddress` | Wedding gift |
| `rsvpEndpoint`, `seedWishes` | RSVP |
| `text` | **Semua tulisan/label yang tampil di layar** |
| `theme` | Warna |

## Mengganti foto

1. Taruh file di folder `public/photos/`
2. Tulis path-nya di config, contoh: `photo: "/photos/prewed-1.jpg"`
3. Kosongkan (`""`) bila ingin menampilkan kotak placeholder

Sama untuk audio: taruh di `public/audio/`, lalu tulis `"/audio/namafile.mp3"`.

## Mengganti tulisan

Semua teks statis ada di `config.text`, dikelompokkan per bagian layar
(`preloader`, `seal`, `opening`, `hero`, `countdown`, `couple`, `story`,
`events`, `gallery`, `rsvp`, `gift`, `closing`, `music`, `nav`, `photo`).

Khusus `text.closing.whatsappTemplate`, placeholder berikut diganti otomatis:

- `{groom}` → nama pendek mempelai pria
- `{bride}` → nama pendek mempelai wanita
- `{date}` → nilai `dateShareText`
- `{link}` → tautan undangan (berisi nama tamu bila diisi)

## Menambah / mengurangi item

`story`, `events`, `gallery`, `banks`, dan `seedWishes` berupa array —
tambah atau hapus objek di dalamnya sesuai kebutuhan.

Untuk `gallery`, `span` adalah lebar kolom (total 6 per baris) dan `ratio`
adalah rasio gambar (`"4/5"`, `"16/9"`, `"1/1"`).

## Menjalankan

```bash
npm run dev      # mode pengembangan
npm run build    # build produksi ke folder dist/
```
