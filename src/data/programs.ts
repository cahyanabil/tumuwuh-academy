export type ProgramStatus = 'available' | 'upcoming' | 'future';

export type Program = {
  id: string;
  title: string;
  category: string;
  description: string;
  objectives: string[];
  duration: string;
  schedule: string;
  format: string;
  status: ProgramStatus;
  reservationUrl: string;
};

export const programs: Program[] = [
  {
    id: 'data-analytics-foundations',
    title: 'Data Analytics Foundations',
    category: 'Data Analytics',
    description:
      'Belajar cara membaca data, menganalisis tren, dan mengambil keputusan berbasis bukti dalam konteks kerja dan organisasi.',
    objectives: ['Menguasai dasar analisis data', 'Membaca pola dan tren', 'Menyusun insight yang bisa ditindaklanjuti'],
    duration: '4 minggu',
    schedule: 'Jadwal menyesuaikan kelompok belajar',
    format: 'Kelas kolaboratif & praktik',
    status: 'available',
    reservationUrl: 'https://forms.gle/your-google-form-id',
  },
  {
    id: 'data-science-practice',
    title: 'Data Science Practice',
    category: 'Data Science',
    description:
      'Ruang belajar untuk memahami proses dari pengolahan data hingga dasar model dan interpretasi hasil secara kontekstual.',
    objectives: ['Memahami alur kerja data science', 'Menerapkan pengolahan data', 'Mempelajari pendekatan analisis berbasis data'],
    duration: '6 minggu',
    schedule: 'Jadwal akan diumumkan setelah pendaftaran dibuka',
    format: 'Diskusi, tugas, dan belajar lintas disiplin',
    status: 'upcoming',
    reservationUrl: 'https://forms.gle/your-google-form-id',
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Digital Marketing Strategy',
    category: 'Digital Marketing',
    description:
      'Mengenal strategi komunikasi digital, audiens, dan pengukuran efektivitas kampanye secara sederhana namun relevan.',
    objectives: ['Menyusun strategi komunikasi digital', 'Memahami kebutuhan audiens', 'Mengukur efektivitas kampanye'],
    duration: '5 minggu',
    schedule: 'Belum ditentukan',
    format: 'Kelas interaktif dengan studi kasus',
    status: 'future',
    reservationUrl: 'https://forms.gle/your-google-form-id',
  },
];

export const faqItems = [
  {
    question: 'Apa itu Tumuwuh?',
    answer:
      'Tumuwuh adalah ruang belajar kolaboratif yang dibuat untuk mempertemukan individu yang ingin belajar, berbagi, dan berkembang bersama melalui pengalaman yang bermakna.',
  },
  {
    question: 'Siapa yang bisa ikut?',
    answer:
      'Tumuwuh terbuka untuk siapa saja yang ingin belajar, berdiskusi, dan berkembang bersama. Setiap individu memiliki kesempatan untuk ikut serta sesuai kebutuhan dan minatnya.',
  },
  {
    question: 'Apakah partisipasi gratis?',
    answer:
      'Informasi terkait biaya atau format partisipasi dapat disesuaikan dengan program yang sedang dibuka. Tumuwuh tetap mengutamakan transparansi dan akses yang inklusif.',
  },
  {
    question: 'Bidang belajar apa yang tersedia?',
    answer:
      'Saat ini, bidang yang mulai dikembangkan mencakup Data Analytics, Data Science, dan Digital Marketing. Tumuwuh juga berpotensi berkembang ke bidang lain seiring kontribusi kolaborator.',
  },
  {
    question: 'Bisakah seseorang menjadi kolaborator?',
    answer:
      'Ya. Tumuwuh membuka kesempatan bagi individu yang ingin berbagi keahlian, pengalaman, atau pandangan untuk mendukung komunitas belajar yang lebih luas.',
  },
  {
    question: 'Bagaimana cara reservasi?',
    answer:
      'Pilih program yang sesuai, lalu lanjutkan ke formulir reservasi yang tersedia. Setelah pendaftaran diterima, kamu akan menerima konfirmasi lanjutan sesuai jadwal program.',
  },
];

export const collaboratorPlaceholders = [
  { name: 'Mentor Placeholder', field: 'Area Keahlian Placeholder', description: 'Profil kolaborator akan ditambahkan seiring berkembangnya komunitas Tumuwuh.' },
  { name: 'Facilitator Placeholder', field: 'Area Keahlian Placeholder', description: 'Kolaborator akan membawa pengalaman, pendekatan, dan wawasan baru ke ruang belajar.' },
  { name: 'Community Partner Placeholder', field: 'Area Keahlian Placeholder', description: 'Tempat untuk berbagi praktik, refleksi, dan peluang belajar yang lebih luas.' },
];
