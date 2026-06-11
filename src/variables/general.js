// Sumber data konten situs — komponen TIDAK hardcode konten (lihat DESIGN-SPEC.md §6).
// Gambar berita memakai versi terkompresi di src/assets/news (semula PNG 0,4–1 MB per file).

import k1 from '../assets/news/k1.jpg';
import k2 from '../assets/news/k2.jpg';
import k3 from '../assets/news/k3.jpg';
import k4 from '../assets/news/k4.jpg';
import k5 from '../assets/news/k5.jpg';
import p1 from '../assets/news/p1.jpg';
import p2 from '../assets/news/p2.jpg';
import p3 from '../assets/news/p3.jpg';
import p4 from '../assets/news/p4.jpg';
import p5 from '../assets/news/p5.jpg';
import x1 from '../assets/news/x1.jpg';
import x2 from '../assets/news/x2.jpg';
import x3 from '../assets/news/x3.jpg';
import x4 from '../assets/news/x4.jpg';
import x5 from '../assets/news/x5.jpg';
import lesehan from '../assets/news/lesehan.jpg';
import bantuanPendidikan from '../assets/news/bantuan-pendidikan.png';
import kampungKb from '../assets/WATUKARUNG02.jpg';

import fotoKasap from '../assets/travel/kasap.jpg';
import fotoCokel from '../assets/travel/cokel.jpg';
import fotoCamping from '../assets/travel/camping.jpg';
import fotoParkir from '../assets/travel/parkir.jpg';
import fotoPakKus from '../assets/travel/pakkus.jpg';

import logoKarangTaruna from '../assets/supports/karang-taruna.png';
import logoPkk from '../assets/supports/pkk-removebg-preview.png';
import logoPengajian from '../assets/supports/pengajian-removebg-preview.png';
import logoSeni from '../assets/supports/seni-removebg-preview.png';
import logoVoli from '../assets/supports/voli-removebg-preview.png';
import logoNelayan from '../assets/supports/nelayan-removebg-preview.png';
import logoTani from '../assets/supports/tani-removebg-preview.png';

// ---------------------------------------------------------------------------
// Statistik kunci dusun
// ---------------------------------------------------------------------------
export const stats = [
  { value: '164', label: 'Jiwa Penduduk', note: 'Sensus 2025' },
  { value: '6', label: 'Titik Wisata & Fasilitas', note: 'Pantai, sungai & camping' },
  { value: '7', label: 'Lembaga Aktif', note: 'Penggerak dusun' },
];

// ---------------------------------------------------------------------------
// Berita — category: 'pemerintahan' | 'pendidikan' | 'kesehatan'
// dateISO dipakai untuk pengurutan, date untuk tampilan.
// ---------------------------------------------------------------------------
const news = [
  {
    id: 'phbs-first-aid',
    category: 'kesehatan',
    title: 'Edukasi Perilaku Hidup Bersih dan Sehat (PHBS) dan First Aid',
    date: '10 Juli 2025',
    dateISO: '2025-07-10',
    image: k5,
    caption:
      'Edukasi PHBS dan pertolongan pertama bagi warga Dusun Dokgarut agar kebiasaan hidup bersih dan kesiapsiagaan menghadapi kecelakaan ringan tumbuh dari rumah.',
  },
  {
    id: 'nugget-ikan',
    category: 'pendidikan',
    title: 'Pemberdayaan Pangan melalui Inovasi Olahan Nugget Ikan',
    date: '10 Juli 2025',
    dateISO: '2025-07-10',
    image: x3,
    caption:
      'Program pemberdayaan pangan di Dusun Dokgarut yang mengolah hasil tangkapan nelayan menjadi nugget ikan bernilai tambah sebagai alternatif usaha warga.',
  },
  {
    id: 'literasi-keuangan',
    category: 'pendidikan',
    title: 'Penguatan Literasi Keuangan Masyarakat',
    date: '10 Juli 2025',
    dateISO: '2025-07-10',
    image: x5,
    caption:
      'Pendampingan pengelolaan keuangan rumah tangga yang mandiri dan efisien — dari mencatat pemasukan-pengeluaran hingga merencanakan tabungan keluarga.',
  },
  {
    id: 'edukasi-anemia',
    category: 'kesehatan',
    title: 'Edukasi Anemia pada Usia Anak hingga Remaja',
    date: '7 Juli 2025',
    dateISO: '2025-07-07',
    image: x4,
    caption:
      'Penyuluhan pencegahan anemia bagi anak dan remaja dusun: mengenali gejala, pentingnya gizi seimbang, dan konsumsi tablet tambah darah bagi remaja putri.',
  },
  {
    id: 'pelatihan-ai',
    category: 'pendidikan',
    title: 'Pelatihan Pengenalan Kecerdasan Buatan (AI) untuk Anak-Anak',
    date: '4 Juli 2025',
    dateISO: '2025-07-04',
    image: x1,
    caption:
      'Pengenalan kecerdasan buatan untuk anak-anak Dusun Dokgarut melalui Teachable Machine dan Scratch — menumbuhkan kreativitas, logika berpikir, dan literasi digital sejak dini.',
  },
  {
    id: 'pelatihan-desain',
    category: 'pendidikan',
    title: 'Pelatihan Desain Dasar bagi Anak-Anak untuk Promosi UMKM Lokal',
    date: '4 Juli 2025',
    dateISO: '2025-07-04',
    image: x2,
    caption:
      'Anak-anak belajar dasar desain grafis sambil bermain, lalu karyanya dipakai mendukung promosi produk usaha warga sekitar.',
  },
  {
    id: 'pemeriksaan-gratis',
    category: 'kesehatan',
    title: 'Pemeriksaan Kesehatan Gratis',
    date: '21 Februari 2025',
    dateISO: '2025-02-21',
    image: k3,
    caption:
      'Layanan pemeriksaan kesehatan gratis bagi warga dusun: cek tekanan darah, gula darah, dan konsultasi kesehatan umum.',
  },
  {
    id: 'pernikahan-dini',
    category: 'kesehatan',
    title: 'Sosialisasi Pencegahan Pernikahan Dini dan Pembuatan Kreasi Bunga',
    date: '25 Desember 2024',
    dateISO: '2024-12-25',
    image: k4,
    caption:
      'Sosialisasi dampak pernikahan dini bagi remaja yang dirangkai dengan pelatihan keterampilan membuat kreasi bunga sebagai kegiatan produktif.',
  },
  {
    id: 'pupuk-organik',
    category: 'pemerintahan',
    title: 'Sosialisasi Pembuatan Pupuk Organik',
    date: '8 Agustus 2024',
    dateISO: '2024-08-08',
    image: p5,
    caption:
      'Pelatihan pembuatan pupuk organik dari limbah rumah tangga dan pertanian untuk mendukung pertanian dusun yang lebih hemat dan ramah lingkungan.',
  },
  {
    id: 'fgd-pariwisata',
    category: 'pemerintahan',
    title: 'FGD Sosialisasi Masyarakat oleh Dinas Pariwisata Kabupaten Pacitan',
    date: '6 Agustus 2024',
    dateISO: '2024-08-06',
    image: p4,
    caption:
      'Diskusi terarah bersama Dinas Pariwisata Kabupaten Pacitan tentang pengembangan potensi wisata Watukarung dan peran aktif masyarakat dusun.',
  },
  {
    id: 'posyandu-putri-ceria',
    category: 'kesehatan',
    title: 'Posyandu Remaja "Putri Ceria"',
    date: '3 Agustus 2024',
    dateISO: '2024-08-03',
    image: k1,
    caption:
      'Posyandu remaja yang aktif sejak 2018 sebagai wadah pembinaan kesehatan remaja — pemantauan gizi, konseling, dan edukasi kesehatan reproduksi.',
  },
  {
    id: 'pilkasun-pemungutan',
    category: 'pemerintahan',
    title: 'Pemungutan Suara Pilkasun Dusun Dokgarut',
    date: '4 Januari 2024',
    dateISO: '2024-01-04',
    image: p3,
    caption:
      'Warga Dusun Dokgarut menggunakan hak pilihnya dalam pemilihan kepala dusun yang berlangsung tertib dan demokratis.',
  },
  {
    id: 'pilkasun-sosialisasi',
    category: 'pemerintahan',
    title: 'Sosialisasi Pilkasun Dokgarut, Desa Watukarung',
    date: '10 November 2023',
    dateISO: '2023-11-10',
    image: p2,
    caption:
      'Warga diberikan informasi tata cara, jadwal, tahapan, dan kriteria calon dalam pemilihan kepala dusun, serta diajak menjaga ketertiban selama proses berlangsung.',
  },
  {
    id: 'soth',
    category: 'pemerintahan',
    title: 'Sekolah Orang Tua Hebat (SOTH) Desa Watukarung',
    date: '1 November 2023',
    dateISO: '2023-11-01',
    image: p1,
    caption:
      'Program edukatif untuk meningkatkan pengetahuan, keterampilan, dan peran aktif orang tua dalam mendampingi tumbuh kembang anak secara holistik.',
  },
  {
    id: 'kampung-kb',
    category: 'kesehatan',
    title: 'Kampung KB "Watukarung Sehat" Desa Watukarung',
    date: '23 Januari 2023',
    dateISO: '2023-01-23',
    image: kampungKb,
    caption:
      'Pencanangan Kampung Keluarga Berkualitas "Watukarung Sehat" sebagai upaya peningkatan kualitas hidup keluarga di Desa Watukarung, Kecamatan Pringkuku.',
  },
  {
    id: 'bias-imunisasi',
    category: 'kesehatan',
    title: 'Pelaksanaan Bulan Imunisasi Anak Sekolah (BIAS)',
    date: '21 September 2020',
    dateISO: '2020-09-21',
    image: k2,
    caption:
      'Pelaksanaan BIAS MR di SD Negeri Watukarung 1 dengan tetap menerapkan protokol kesehatan.',
  },
  {
    id: 'bantuan-pendidikan-2017',
    category: 'pendidikan',
    title: 'Bantuan Pendidikan Siswa Miskin Kabupaten Pacitan',
    date: '2017',
    dateISO: '2017-06-01',
    image: bantuanPendidikan,
    caption:
      'Bantuan finansial pemerintah kabupaten bagi siswa dari keluarga kurang mampu untuk perlengkapan sekolah, seragam, dan biaya operasional pendidikan pada Tahun Anggaran 2017.',
  },
];

// Semua berita, terbaru lebih dulu (stabil untuk tanggal yang sama).
export const allNews = [...news].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

// 3 berita terbaru untuk landing page.
export const latestNews = allNews.slice(0, 3);

export const newsCategories = [
  { key: 'pemerintahan', label: 'Pemerintahan' },
  { key: 'pendidikan', label: 'Pendidikan' },
  { key: 'kesehatan', label: 'Kesehatan' },
];

// ---------------------------------------------------------------------------
// Destinasi & fasilitas wisata
// ---------------------------------------------------------------------------
export const TravelPlace = [
  {
    title: 'Pantai Kasap',
    category: 'Pantai',
    image: fotoKasap,
    location:
      'https://www.google.com/maps/place/Kasap+Beach/@-8.2402434,110.9829,13z/data=!4m6!3m5!1s0x2e7bdde98e5438dd:0x61e796fc381a11db!8m2!3d-8.2402434!4d110.9829!16s%2Fg%2F11c20snssd',
  },
  {
    title: 'Kali Cokel',
    category: 'Sungai',
    image: fotoCokel,
    location:
      'https://www.google.com/maps/place/Kali+Cokel+Pacitan/@-8.2372638,110.9835022,18.56z/data=!4m6!3m5!1s0x2e7bdde829c33561:0x5fa4d90341326a49!8m2!3d-8.2380166!4d110.983932!16s%2Fg%2F11gbthnb6k',
  },
  {
    title: 'Lesehan Spot Kasap Indah',
    category: 'Kuliner',
    image: lesehan,
    location:
      'https://www.google.com/maps/place/Lesehan+Spot+Kasap+Indah/@-8.2375783,110.9834963,17.14z/data=!4m6!3m5!1s0x2e7bdde82a59a691:0xc9067f5b9f371e57!8m2!3d-8.238405!4d110.9835569!16s%2Fg%2F11dz0kcvlk',
  },
  {
    title: 'Parkir Mobil & Motor',
    category: 'Fasilitas',
    image: fotoParkir,
    location:
      'https://www.google.com/maps/place/Parkir+Mobil+Motor/@-8.2371996,110.9834429,18.76z/data=!4m6!3m5!1s0x2e7bdd24d4ac1619:0xcbfd3cd4b12ba549!8m2!3d-8.2377973!4d110.9843441!16s%2Fg%2F11rcwj1m7_',
  },
  {
    title: 'Parkir & Kamar Mandi Bersih Pak Kus',
    category: 'Fasilitas',
    image: fotoPakKus,
    location:
      'https://www.google.com/maps/place/Penyedia+Layanan+Parkir+dan+Kamar+Mandi+Bersih+Pak+Kus+Pantai+Kasap%2FSungai+Cokel/@-8.2380101,110.9834565,19.14z/data=!4m6!3m5!1s0x2e7bdd004a3137b5:0xb461765b3ab0f614!8m2!3d-8.2380677!4d110.9842173!16s%2Fg%2F11vjxw9zfn',
  },
  {
    title: 'Camping Area Watu Payung "Batu Cinta"',
    category: 'Camping',
    image: fotoCamping,
    location:
      'https://www.google.com/maps/place/Camping+Area+Watu+Payung+%22Batu+Cinta%22/@-8.2388314,110.9834905,16.93z/data=!4m6!3m5!1s0x2e7bddd2205de849:0x63f179765fe9181f!8m2!3d-8.241214!4d110.9857759!16s%2Fg%2F11v0sn374n',
  },
];

// ---------------------------------------------------------------------------
// Lembaga & program dusun — nama disesuaikan dengan logonya
// (sebelumnya berisi nama program kabupaten sisa template yang tidak cocok).
// ---------------------------------------------------------------------------
export const institutionSupports = [
  { title: 'Karang Taruna', image: logoKarangTaruna },
  { title: 'PKK', image: logoPkk },
  { title: 'Pengajian', image: logoPengajian },
  { title: 'Sanggar Seni', image: logoSeni },
  { title: 'Voli Dokgarut', image: logoVoli },
  { title: 'Kelompok Nelayan', image: logoNelayan },
  { title: 'Kelompok Tani', image: logoTani },
];
