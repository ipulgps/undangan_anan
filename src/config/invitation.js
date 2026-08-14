/**
 * SEMUA KONTEN UNDANGAN ADA DI FILE INI.
 * Ubah di sini saja — tidak perlu menyentuh komponen.
 */

export const config = {
  /* --- Pasangan --- */
  groom: {
    name: "ANAN PRATAMA",
    short: "ANAN",
    father: "Bapak [Nama Ayah]",
    mother: "Ibu [Nama Ibu]",
    instagram: "ananpratama",
    photo: "/photos/p2.png"            // contoh: "/photos/groom.jpg"
  },
  bride: {
    name: "SARAH PUTRI",
    short: "SARAH",
    father: "Bapak [Nama Ayah]",
    mother: "Ibu [Nama Ibu]",
    instagram: "sarahputri",
    photo: "/photos/p3.png"
  },

  /* --- Tanggal & akses --- */
  weddingDate: "2026-12-12T08:00:00+07:00",
  dateLabel: "SABTU, 12 DESEMBER 2026",
  dateShort: "12 . 12 . 2026",
  unlockDays: 0,         // 0 = tanpa lock. Set 5 untuk buka mulai H-5.
  hashtag: "#AnanSarahForever",

  /* --- Media --- */
  heroPhoto: "/photos/p1.png",
  music: "/audio/music1.mp3",
  sfx: {
    seal: "/audio/sfx-seal.wav",
    paper: "/audio/sfx-paper.wav"
  },

  /* --- Ayat --- */
  quote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya.",
    source: "QS. Ar-Rum : 21"
  },

  /* --- Love story --- */
  story: [
    {
      year: "2019",
      title: "PERTAMA BERTEMU",
      text: "Sebuah pertemuan sederhana di sebuah acara kampus. Tidak ada yang menyangka bahwa percakapan singkat malam itu akan menjadi awal dari segalanya.",
      photo: "",
      placeholder: "Foto pertama bertemu"
    },
    {
      year: "2022",
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
  storyClosing: "Dan kisah itu berlanjut, 12 Desember 2026.",

  /* --- Acara --- */
  events: [
    {
      icon: "mosque",
      title: "AKAD NIKAH",
      date: "Sabtu, 12 Desember 2026",
      time: "08.00 – 10.00 WIB",
      venue: "Masjid Agung Al-Falah",
      address: "Jl. Sultan Thaha No. 1, Jakarta",
      maps: "https://maps.google.com"
    },
    {
      icon: "hall",
      title: "RESEPSI",
      date: "Sabtu, 12 Desember 2026",
      time: "11.00 – 14.00 WIB",
      venue: "Ballroom Graha Sejahtera",
      address: "Jl. Merdeka Selatan No. 24, Jakarta",
      maps: "https://maps.google.com"
    }
  ],
  calendarUrl: "https://calendar.google.com",

  /* --- Galeri: 6 slot (2 portrait, 1 lanskap, 3 kotak) --- */
  gallery: [
    { photo: "", placeholder: "Foto galeri 1", span: 3, ratio: "4/5" },
    { photo: "", placeholder: "Foto galeri 2", span: 3, ratio: "4/5" },
    { photo: "/photos/p1.png", placeholder: "Foto galeri utama (lanskap)", span: 6, ratio: "16/9" },
    { photo: "", placeholder: "Foto galeri 4", span: 2, ratio: "1/1" },
    { photo: "", placeholder: "Foto galeri 5", span: 2, ratio: "1/1" },
    { photo: "", placeholder: "Foto galeri 6", span: 2, ratio: "1/1" }
  ],

  /* --- Wedding gift --- */
  banks: [
    { bank: "BCA", number: "1234567890", holder: "a.n. Anan Pratama" },
    { bank: "MANDIRI", number: "0987654321", holder: "a.n. Sarah Putri" }
  ],
  giftAddress: {
    line: "Jl. Kenanga No. 12, Kebayoran Baru, Jakarta Selatan 12160",
    recipient: "Penerima: Sarah Putri · 0812–3456–7890"
  },

  /* --- Ucapan awal (seed) --- */
  seedWishes: [
    { name: "Dimas & Sari", attend: "Hadir", msg: "Selamat Anan & Sarah! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah." },
    { name: "Nadia Rahma", attend: "Hadir", msg: "Bahagia sekali melihat kalian sampai di titik ini. Sampai jumpa di hari bahagia!" }
  ],

  /**
   * RSVP: biarkan kosong = tersimpan di localStorage saja.
   * Isi dengan URL Google Apps Script / API Anda untuk menyimpan sungguhan.
   */
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbz5Q4nfDqHc3pXdgXdv4zQ2bRAHwakLdfbqD0HlQTXrNDyL4Z4jEFfXS0nTy2aVp3lr/exec",

  /* --- Teks penutup --- */
  closing: {
    body: "Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.",
    family: "Beserta Keluarga Besar Kedua Mempelai"
  }
};

export const c = {
  ink: "#050807",
  emerald: "#0f6b50",
  emeraldDeep: "#062820",
  emeraldMid: "#0b3d32",
  emeraldSoft: "#071d18",
  jade: "#19A974",
  gold: "#BFA15F",
  goldLight: "#D8C48C",
  cream: "#F2F1EA"
};

export default config;
