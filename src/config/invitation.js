/**
 * ============================================================
 *  PUSAT KONFIGURASI UNDANGAN
 *  Semua yang bisa diubah ada di file ini: nama, tanggal, foto,
 *  audio, acara, galeri, rekening, sampai seluruh teks & label UI.
 *  Tidak perlu menyentuh file komponen sama sekali.
 * ============================================================
 *
 *  PANDUAN CEPAT:
 *  1. site       → judul tab browser & preview saat link dibagikan
 *  2. groom/bride→ data mempelai
 *  3. date       → tanggal acara, label, lock H-n
 *  4. media      → foto utama, musik, efek suara
 *  5. quote      → ayat pembuka
 *  6. story      → love story (timeline)
 *  7. events     → akad & resepsi
 *  8. gallery    → 6 slot foto
 *  9. gift       → rekening & alamat kado
 * 10. rsvp       → endpoint + ucapan awal
 * 11. text       → SEMUA tulisan/label yang tampil di layar
 * 12. theme      → warna
 *
 *  Cara isi foto: taruh file di folder public/photos/, lalu tulis
 *  path-nya seperti "/photos/namafile.jpg". Kosongkan ("") bila
 *  ingin menampilkan placeholder.
 */

export const config = {
  /* ==========================================================
   * 1. IDENTITAS SITUS (tab browser & preview share)
   * ========================================================== */
  site: {
    title: "Anan & Sarah — Wedding Invitation",
    description: "The Wedding of Anan & Sarah — Sabtu, 27 September 2026 di Gedung Pariwisata Kota Kendari. Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.",
    ogTitle: "The Wedding of Anan & Sarah — 27 September 2026",
    ogDescription: "Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa dan restu. Sabtu, 27 September 2026 · Gedung Pariwisata Kota Kendari.",
    favicon: "/favicon.svg",
    lang: "id",

    /* --- Preview saat link dibagikan (WhatsApp, FB, Telegram) ---
     *
     * PENTING: WhatsApp tidak menjalankan JavaScript. Nilai di sini
     * TIDAK terbaca oleh WhatsApp — yang dibaca hanyalah meta statis
     * di index.html. Jadi setiap kali mengubah 4 nilai di bawah ini
     * (atau ogTitle/ogDescription di atas), ubah juga meta yang sama
     * di index.html agar preview WhatsApp ikut berubah.
     *
     * url: alamat undangan, tanpa garis miring di akhir.
     *      Ganti saat domain asli sudah ada.
     * ogImage: WAJIB URL absolut (https://...), ukuran 1200x630,
     *      dan di bawah ~300 KB agar dijemput WhatsApp.
     */
    url: "https://undangan-anan-sarah.vercel.app",
    ogImage: "/og-image.jpg",          // relatif; digabung dengan url di atas
    ogImageWidth: 1200,
    ogImageHeight: 630
  },

  /* ==========================================================
   * 2. PASANGAN
   * ========================================================== */
  groom: {
    name: "MUHAMAD ANAN MAKRIFSYAH GANI",
    short: "ANAN",
    father: "Bapak Drs. La Gani",
    mother: "Ibu Wa Ode Emirias",
    instagram: "amkgani",
    photo: "/photos/p2.png"
  },
  bride: {
    name: "AIZARAH YUSDIAWATI TOSEPU",
    short: "SARAH",
    father: "Bapak Yusrin A. Tosepu, S.Komm M.I.Kom",
    mother: "Ibu Corawati (Almh)",
    instagram: "twdsyharas",
    photo: "/photos/p3.png"
  },

  /* --- Inisial pada segel lilin & preloader (mis. "A&S") --- */
  monogram: "A&S",

  /* ==========================================================
   * 3. TANGGAL & AKSES 222222
   * ========================================================== */
  weddingDate: "2026-09-27T08:00:00+07:00",
  dateLabel: "SABTU, 27 SEPTEMBER 2026",
  dateShort: "27 . 09 . 2026",
  dateShareText: "27 September 2026",  // dipakai di pesan WhatsApp
  unlockDays: 0,                       // 0 = tanpa lock. Set 5 = buka mulai H-5.
  hashtag: "#AnanSarahForever",

  /* ==========================================================
   * 4. MEDIA
   * ========================================================== */
  heroPhoto: "/photos/p1.png",
  music: "/audio/music2.mp3",          // kosongkan "" untuk menonaktifkan musik
  musicVolume: 0.5,                    // 0 – 1
  musicStart: 5,                       // mulai musik dari detik ke-N
  musicFadeIn: 2,                      // durasi fade-in (detik), 0 = tanpa fade
  sfx: {
    seal: "/audio/sfx-seal.wav",
    paper: "/audio/sfx-paper.wav"
  },

  /* ==========================================================
   * 5. AYAT / QUOTE PEMBUKA
   * ========================================================== */
  quote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya.",
    source: "QS. Ar-Rum : 21"
  },

  /* ==========================================================
   * 6. LOVE STORY
   * ========================================================== */
  story: [
    {
      year: "2024",
      title: "PERTAMA BERTEMU",
      text: "Sebuah pertemuan sederhana di sebuah acara gigs Metal. Tidak ada yang menyangka bahwa percakapan singkat malam itu akan menjadi awal dari segalanya.",
      photo: "",
      placeholder: "Foto pertama bertemu"
    },
    {
      year: "2025",
      title: "MEMULAI BERSAMA",
      text: "Melewati jarak, kesibukan, dan banyak hal yang tidak mudah. Dari situ kami belajar bahwa saling menguatkan adalah bentuk cinta yang paling nyata.",
      photo: "",
      placeholder: "Foto awal hubungan"
    },
    {
      year: "2026",
      title: "LAMARAN",
      text: "Dengan niat yang baik dan restu kedua keluarga, kami memutuskan untuk melangkah lebih jauh dan menyempurnakan ikatan ini dalam sebuah pernikahan.",
      photo: "",
      placeholder: "Foto lamaran",
      highlight: true
    }
  ],
  storyClosing: "Dan kisah itu berlanjut, 27 September 2026.",

  /* ==========================================================
   * 7. ACARA
   *    icon: "mosque" (akad) atau "hall" (resepsi/gedung)
   * ========================================================== */
  events: [
    {
      icon: "mosque",
      title: "AKAD NIKAH",
      date: "Sabtu, 27 September 2026",
      time: "08.00 – 10.00 WIB",
      venue: "Gedung Pariwisata Kota Kendari",
      address: "Jl. Tebaununggu, Korumba, Kec. Mandonga, Kota Kendari (Samping Eks. MTQ)",
      maps: "https://maps.google.com"
    },
    {
      icon: "hall",
      title: "RESEPSI",
      date: "Sabtu, 27 September 2026",
      time: "11.00 – 14.00 WIB",
      venue: "Gedung Pariwisata Kota Kendari",
      address: "Jl. Tebaununggu, Korumba, Kec. Mandonga, Kota Kendari (Samping Eks. MTQ)",
      maps: "https://maps.google.com"
    }
  ],
  /* Cadangan bila jam pada events[0].time tidak bisa dibaca otomatis */
  calendarUrl: "https://calendar.google.com",

  /* ==========================================================
   * 8. GALERI — 6 slot (2 portrait, 1 lanskap, 3 kotak)
   *    span : lebar kolom di grid (total 6 per baris)
   *    ratio: rasio gambar, mis. "4/5", "16/9", "1/1"
   * ========================================================== */
  gallery: [
    { photo: "/photos/32123.jpg", placeholder: "Foto galeri 1", span: 3, ratio: "4/5" },
    { photo: "/photos/23144.jpg", placeholder: "Foto galeri 2", span: 3, ratio: "4/5" },
    { photo: "/photos/p1.png", placeholder: "Foto galeri utama (lanskap)", span: 6, ratio: "16/9" },
    { photo: "/photos/DSCF4983.JPG", placeholder: "Foto galeri 4", span: 2, ratio: "1/1" },
    { photo: "photos/DSCF4981.JPG", placeholder: "Foto galeri 5", span: 2, ratio: "1/1" },
    { photo: "/photos/1334432.jpg", placeholder: "Foto galeri 6", span: 2, ratio: "1/1" }
  ],

  /* ==========================================================
   * 9. WEDDING GIFT
   * ========================================================== */
  banks: [
    { bank: "BANK JAGO SYARIAH", number: "505290347419", holder: "a.n. Muhamad Anan Makrifsyah Gani" },
    { bank: "BCA", number: "1580354048", holder: "a.n. Aizarah Yusdiawati Tosepu" }
  ],
  giftAddress: {
    line: "Perumahan Maharani Poasia Blok C No 23",
    recipient: "Penerima: Aizarah Yusidawati Tosepu & Muhamad Anan Makrifsyah Gani · 0822–9324–2722"
  },

  /* ==========================================================
   * 10. RSVP
   *     rsvpEndpoint kosong ("") = ucapan hanya tersimpan di
   *     localStorage browser tamu. Isi dengan URL Google Apps
   *     Script / API agar tersimpan sungguhan & dilihat semua tamu.
   * ========================================================== */
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbz5Q4nfDqHc3pXdgXdv4zQ2bRAHwakLdfbqD0HlQTXrNDyL4Z4jEFfXS0nTy2aVp3lr/exec",

  seedWishes: [
    { name: "Dimas & Sari", attend: "Hadir", msg: "Selamat Anan & Sarah! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah." },
    { name: "Nadia Rahma", attend: "Hadir", msg: "Bahagia sekali melihat kalian sampai di titik ini. Sampai jumpa di hari bahagia!" }
  ],

  /* ==========================================================
   * 11. SELURUH TEKS / LABEL YANG TAMPIL DI LAYAR
   *     Ubah bebas — termasuk untuk menerjemahkan ke bahasa lain.
   * ========================================================== */
  text: {
    /* --- Layar loading pertama --- */
    preloader: {
      label: "Menyiapkan Undangan"
    },

    /* --- Ritual amplop bersegel --- */
    seal: {
      cardEyebrow: "The Wedding of",
      buttonTitle: "Buka segel",
      hintSealed: "Ketuk segel untuk membuka",
      hintOpening: "Membuka undangan"
    },

    /* --- Layar pembuka (setelah segel) --- */
    opening: {
      eyebrow: "The Wedding of",
      guestTo: "KEPADA YTH.",
      guestHonorific: "Bapak/Ibu/Saudara/i",
      guestFallback: "Nama Tamu",
      lockTitle: "Undangan Dibuka Dalam",
      lockNotePrefix: "Dapat dibuka mulai ",
      openButton: "Buka Undangan",
      lockedButton: "Belum Dapat Dibuka",
      musicNote: "MUSIK AKAN DIPUTAR SETELAH UNDANGAN DIBUKA"
    },

    /* --- Hero --- */
    hero: {
      eyebrow: "The Celebration of Love",
      scrollCue: "SCROLL"
    },

    /* --- Label satuan countdown --- */
    countdown: {
      days: "HARI",
      hours: "JAM",
      minutes: "MENIT",
      seconds: "DETIK"
    },

    /* --- Mempelai --- */
    couple: {
      bismillah: "Bismillahirrahmanirrahim",
      lede: "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.",
      groomRole: "Mempelai Pria",
      brideRole: "Mempelai Wanita",
      groomParentLabel: "Putra dari",
      brideParentLabel: "Putri dari",
      groomPhotoPlaceholder: "Foto mempelai pria",
      bridePhotoPlaceholder: "Foto mempelai wanita"
    },

    /* --- Love story --- */
    story: {
      eyebrow: "Our Journey",
      title: "LOVE STORY"
    },

    /* --- Detail acara --- */
    events: {
      eyebrow: "Save The Date",
      title: "DETAIL ACARA",
      lede: "Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa dan restu.",
      locationLabel: "Lokasi",
      mapsButton: "Lihat Lokasi",
      calendarButton: "Simpan ke Kalender"
    },

    /* --- Galeri --- */
    gallery: {
      eyebrow: "Moments",
      title: "GALERI"
    },

    /* --- RSVP --- */
    rsvp: {
      eyebrow: "Konfirmasi Kehadiran",
      title: "RSVP",
      lede: "Mohon konfirmasi kehadiran dan tinggalkan doa terbaik Anda untuk kami.",
      nameLabel: "Nama",
      namePlaceholder: "Nama Anda",
      attendLabel: "Kehadiran",
      attendOptions: ["Hadir", "Masih Ragu", "Tidak Hadir"],
      attendDefault: "Belum dikonfirmasi",
      messageLabel: "Ucapan & Doa",
      messagePlaceholder: "Tulis ucapan dan doa terbaik Anda…",
      submitButton: "Kirim Ucapan",
      thanks: "Terima kasih, ucapan Anda telah kami terima.",
      countSuffix: "Ucapan"
    },

    /* --- Wedding gift --- */
    gift: {
      eyebrow: "Tanda Kasih",
      title: "WEDDING GIFT",
      lede: "Kehadiran dan doa Anda adalah hadiah terindah. Namun apabila ingin memberi tanda kasih, kami sediakan kanal berikut.",
      accountLabel: "Nomor Rekening",
      copyButton: "Salin Nomor",
      copiedButton: "✓ Tersalin",
      addressLabel: "Kirim Hadiah"
    },

    /* --- Penutup --- */
    closing: {
      body: "Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.",
      signature: "Kami yang berbahagia",
      family: "Beserta Keluarga Besar Kedua Mempelai",
      shareLabel: "Bagikan Undangan",
      shareSub: "Tulis nama tamu untuk membuat tautan undangan personal.",
      sharePlaceholder: "Nama tamu",
      copyButton: "Salin Tautan",
      copiedButton: "✓ Tersalin",
      whatsappButton: "WhatsApp",
      /* {groom} {bride} {date} {link} akan diganti otomatis */
      whatsappTemplate: "Assalamualaikum, dengan penuh rasa syukur kami mengundang Anda ke pernikahan {groom} & {bride}, {date}. Undangan lengkap: {link}",
      credit: "DIBUAT DENGAN SEPENUH HATI · 2026"
    },

    /* --- Tombol musik & navigasi bawah --- */
    music: {
      titleOn: "Matikan musik",
      titleOff: "Nyalakan musik"
    },
    nav: {
      hero: "Awal",
      couple: "Mempelai",
      events: "Acara",
      gallery: "Galeri",
      rsvp: "RSVP"
    },

    /* --- Teks default slot foto kosong --- */
    photo: {
      heroPlaceholder: "Foto utama pasangan",
      defaultPlaceholder: "Foto"
    }
  },

  /* ==========================================================
   * 12. WARNA TEMA
   * ========================================================== */
  theme: {
    ink: "#050807",
    emerald: "#0f6b50",
    emeraldDeep: "#062820",
    emeraldMid: "#0b3d32",
    emeraldSoft: "#071d18",
    jade: "#19A974",
    gold: "#BFA15F",
    goldLight: "#D8C48C",
    cream: "#F2F1EA"
  }
};

/* Alias lama agar impor c yang sudah ada tetap berfungsi */
export const c = config.theme;

export default config;