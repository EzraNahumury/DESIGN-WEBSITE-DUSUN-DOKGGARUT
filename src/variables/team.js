// Anggota Tim KKN 34 UKDW 2025 (unit "Dokgarut 34") — data mengikuti poster
// perkenalan di public/team. Halaman memakai versi terkompresi .jpg
// (asli .png 1,8–2 MB per file, di-resize ke lebar 1100px).
const FOTO = `${process.env.PUBLIC_URL}/team`;

export const teamUnit = {
  name: 'Dokgarut 34',
  program: 'KKN Reguler 2025 · Universitas Kristen Duta Wacana Yogyakarta',
  tagline: '#BersamaBerbuatBermanfaat',
};

export const teamMembers = [
  {
    id: 'ezra',
    name: 'Ezra Kristanto Nahumury',
    role: 'Ketua',
    major: 'Informatika 2022',
    photo: `${FOTO}/ketua.jpg`,
  },
  {
    id: 'elisabeth',
    name: 'Elisabeth Luiza Fernandez',
    role: 'Sekretaris',
    major: 'Kedokteran 2021',
    photo: `${FOTO}/sekertaris.jpg`,
  },
  {
    id: 'shendiana',
    name: 'Shendiana Bernadeth Siallagan',
    role: 'Bendahara',
    major: 'Akuntansi 2022',
    photo: `${FOTO}/Bendahara.jpg`,
  },
  {
    id: 'adhiatma',
    name: 'Adhiatma Santoso',
    role: 'Humas',
    major: 'Kedokteran 2021',
    photo: `${FOTO}/Humas.jpg`,
  },
  {
    id: 'epike',
    name: 'Epike Kiwak',
    role: 'Perlengkapan',
    major: 'Manajemen 2022',
    photo: `${FOTO}/Perkap.jpg`,
  },
  {
    id: 'ishak',
    name: 'Ishak Bramsky',
    role: 'Perlengkapan',
    major: 'Arsitektur 2022',
    photo: `${FOTO}/perkap2.jpg`,
  },
  {
    id: 'stanley',
    name: 'Stanley Yorindra Anugraha',
    role: 'Desain & Dokumentasi',
    major: 'Sistem Informasi 2022',
    photo: `${FOTO}/Desdok.jpg`,
  },
];
