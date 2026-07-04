// Isi lengkap tiap artikel berita, dipisah dari general.js agar data kartu
// (judul/tanggal/caption) tetap ringan dimuat di landing & daftar berita.
// Dirender oleh src/views/NewsDetail. Bentuk blok:
//   { type: 'p',     text }         paragraf
//   { type: 'h2',    text }         sub-judul bagian
//   { type: 'quote', text, cite? }  kutipan menonjol
//   { type: 'list',  items }        daftar bullet
// Kunci objek = id berita di general.js.

const newsArticles = {
  'phbs-first-aid': [
    {
      type: 'p',
      text: 'Halaman samping rumah warga Dusun Dokgarut riuh sejak pagi, Kamis, 10 Juli 2025. Belasan anak berkerumun di dekat bak air, saling menunggu giliran mempraktikkan enam langkah cuci tangan pakai sabun yang baru saja dicontohkan mahasiswa Tim KKN 34 UKDW. Sebagian masih tertukar urutannya, sebagian lagi sudah hafal di luar kepala sambil menyanyikan lagu pengiring yang diajarkan.',
    },
    {
      type: 'p',
      text: 'Kegiatan pagi itu adalah bagian dari program edukasi Perilaku Hidup Bersih dan Sehat (PHBS) yang menyasar anak-anak dan keluarga di Dokgarut. Materinya sengaja dipilih yang paling dekat dengan keseharian: cuci tangan pakai sabun pada waktu-waktu penting, kebiasaan menggosok gigi, membuang sampah pada tempatnya, sampai menjaga kebersihan sumber air di rumah.',
    },
    { type: 'h2', text: 'Belajar Pertolongan Pertama' },
    {
      type: 'p',
      text: 'Setelah sesi PHBS, acara dilanjutkan dengan pengenalan pertolongan pertama atau first aid. Anak-anak dan beberapa orang tua yang ikut menyimak diajari menangani kejadian yang paling sering dialami di dusun: luka lecet karena jatuh saat bermain, mimisan, hingga luka bakar ringan di dapur. Semua dipraktikkan langsung — membersihkan luka dengan air mengalir, mengeringkannya, lalu memasang plester dengan benar.',
    },
    {
      type: 'p',
      text: 'Ada juga pelurusan kebiasaan lama yang ternyata masih sering dijumpai, seperti menaburi luka dengan bubuk kopi atau mengoles odol pada luka bakar. Kebiasaan semacam itu justru memperbesar risiko infeksi dan memperlambat penyembuhan.',
    },
    {
      type: 'quote',
      text: 'Anak-anak di sini mainnya ya di pantai, di kebun, kadang jatuh dari sepeda. Paling tidak sekarang mereka tahu luka itu dicuci dulu, bukan langsung ditutup.',
      cite: 'Salah satu ibu warga Dokgarut yang menyimak dari teras',
    },
    {
      type: 'p',
      text: 'Menutup kegiatan, tim menyerahkan kotak P3K sederhana berisi antiseptik, kasa, plester, dan obat-obatan dasar untuk disimpan di lingkungan dusun. Harapannya sederhana: kebiasaan kecil yang dilatih hari itu — cuci tangan sebelum makan, menangani luka dengan tenang — ikut terbawa pulang ke rumah masing-masing.',
    },
  ],

  'nugget-ikan': [
    {
      type: 'p',
      text: 'Hasil laut Watukarung tidak selalu harus dijual dalam bentuk ikan segar. Pesan itulah yang dibawa Tim KKN 34 UKDW dalam pelatihan pengolahan nugget ikan bersama ibu-ibu Dusun Dokgarut, Kamis, 10 Juli 2025.',
    },
    {
      type: 'p',
      text: 'Selama ini sebagian besar tangkapan nelayan dusun dijual langsung begitu perahu merapat. Saat tangkapan melimpah, harga gampang jatuh; saat laut sedang tidak bersahabat, penghasilan ikut surut. Mengolah ikan menjadi makanan beku siap goreng dipilih sebagai jalan tengah — bahan bakunya ada di depan mata, alatnya cukup peralatan dapur biasa, dan hasilnya disukai anak-anak.',
    },
    { type: 'h2', text: 'Dari Dapur Sederhana' },
    {
      type: 'p',
      text: 'Prosesnya dipraktikkan dari awal sampai akhir. Daging ikan dipisahkan dari duri lalu dihaluskan, dicampur tepung, telur, dan bumbu dapur, dikukus hingga padat, dipotong-potong, dibalur tepung roti, lalu digoreng sebagian sebagai contoh. Sisanya disimpan beku untuk menunjukkan bahwa nugget bisa dibuat sekali banyak dan digoreng kapan saja. Para peserta mencatat takaran sambil sesekali mencocokkan dengan kebiasaan memasak masing-masing.',
    },
    {
      type: 'quote',
      text: 'Ternyata tidak susah. Alatnya semua sudah ada di dapur, tinggal telaten saja.',
      cite: 'Peserta pelatihan',
    },
    {
      type: 'p',
      text: 'Di ujung sesi, obrolan bergeser ke hitung-hitungan: berapa modal per adonan, berapa potong yang dihasilkan, dan berapa harga jual yang masuk akal bila dititipkan di warung atau ditawarkan ke pengunjung lesehan di kawasan wisata. Kemasan dan label sederhana juga sempat dibahas, karena tampilan ikut menentukan harga.',
    },
    {
      type: 'p',
      text: 'Bila ditekuni, olahan seperti ini bisa menjadi rintisan usaha bersama — melengkapi penghasilan melaut yang naik-turun mengikuti musim.',
    },
  ],

  'literasi-keuangan': [
    {
      type: 'p',
      text: 'Berapa penghasilan bulan lalu, dan ke mana saja perginya? Dua pertanyaan pembuka itu membuat peserta sesi penguatan literasi keuangan di Dusun Dokgarut saling pandang, Kamis, 10 Juli 2025. Hampir semua mengaku tidak pernah mencatatnya.',
    },
    {
      type: 'p',
      text: 'Padahal justru di dusun pesisir seperti Dokgarut catatan itu penting. Penghasilan dari melaut, bertani, maupun berjualan di kawasan wisata sifatnya musiman — ada bulan ramai, ada bulan sepi. Tanpa catatan, uang di bulan ramai gampang habis tak terasa, sementara bulan sepi terpaksa ditutup dengan berutang.',
    },
    { type: 'h2', text: 'Mulai dari Buku Catatan' },
    {
      type: 'p',
      text: 'Materi yang dibawakan Tim KKN 34 UKDW sengaja tidak muluk-muluk. Tidak ada istilah investasi yang rumit; yang dilatih adalah kebiasaan dasar yang bisa langsung dijalankan besok pagi:',
    },
    {
      type: 'list',
      items: [
        'Memisahkan uang usaha dari uang dapur, sekalipun hanya dengan dua amplop berbeda.',
        'Mencatat pemasukan dan pengeluaran setiap hari, sekecil apa pun nilainya.',
        'Membedakan kebutuhan dan keinginan sebelum memutuskan membeli.',
        'Menyisihkan tabungan di awal begitu uang diterima — bukan menunggu sisa di akhir bulan.',
      ],
    },
    {
      type: 'p',
      text: 'Peserta kemudian praktik mengisi buku kas sederhana dari lembar catatan bulanan yang dibagikan tim. Beberapa ibu mencoba menghitung ulang pengeluaran seminggu terakhir dari ingatan — dan kaget sendiri melihat jumlah jajan yang selama ini dianggap remeh.',
    },
    {
      type: 'p',
      text: 'Catatan sederhana itu bukan tujuan akhir. Ia hanya pintu masuk agar keluarga di Dokgarut bisa merencanakan tabungan, menyiapkan biaya sekolah anak, dan lebih tenang menghadapi bulan-bulan paceklik.',
    },
  ],

  'edukasi-anemia': [
    {
      type: 'p',
      text: 'Lemah, letih, lesu, lelah, lunglai — lima gejala yang sering dianggap sekadar kurang tidur itu bisa jadi tanda anemia. Hal ini yang dikupas dalam penyuluhan pencegahan anemia bagi anak dan remaja Dusun Dokgarut, Senin, 7 Juli 2025.',
    },
    {
      type: 'p',
      text: 'Anemia atau kekurangan sel darah merah sehat kerap tidak disadari, padahal akibatnya nyata: anak jadi susah berkonsentrasi di sekolah, gampang mengantuk, dan daya tahan tubuhnya menurun. Remaja putri paling rentan karena kehilangan zat besi rutin setiap bulan lewat menstruasi, ditambah kebiasaan diet yang kadang asal mengurangi makan.',
    },
    { type: 'h2', text: 'Cegah dari Meja Makan' },
    {
      type: 'p',
      text: 'Pencegahannya dimulai dari piring sendiri. Peserta diajak mengenali sumber zat besi yang gampang didapat di dusun — ikan hasil tangkapan nelayan, telur, hati ayam, sampai sayuran hijau seperti bayam dan daun kelor. Ada pula tips kecil yang jarang diketahui: vitamin C dari jeruk atau jambu membantu tubuh menyerap zat besi, sementara minum teh berbarengan dengan makan justru menghambatnya.',
    },
    {
      type: 'p',
      text: 'Khusus remaja putri, penyuluhan menekankan pentingnya tablet tambah darah (TTD) yang diminum seminggu sekali. Anggapan bahwa TTD bikin gemuk atau darah tinggi — yang membuat banyak remaja enggan meminumnya — diluruskan satu per satu.',
    },
    {
      type: 'quote',
      text: 'Selama ini kalau pusing dan ngantuk di kelas, saya kira cuma kurang tidur. Ternyata bisa jadi kurang zat besi.',
      cite: 'Peserta remaja',
    },
    {
      type: 'p',
      text: 'Tindak lanjutnya tidak berhenti di sesi penyuluhan. Pemantauan akan berjalan lewat Posyandu Remaja "Putri Ceria" yang rutin digelar di desa, sehingga remaja yang berisiko bisa dikawal lebih dekat.',
    },
  ],

  'pelatihan-ai': [
    {
      type: 'p',
      text: 'Tawa pecah di ruang pertemuan ketika komputer salah menebak — daun yang disodorkan ke kamera dikira batu. Anak-anak Dusun Dokgarut sore itu, Jumat, 4 Juli 2025, sedang melatih mesin belajar mengenali benda lewat aplikasi Teachable Machine, dalam pelatihan pengenalan kecerdasan buatan (AI) yang digelar Tim KKN 34 UKDW.',
    },
    {
      type: 'p',
      text: 'AI sengaja diperkenalkan bukan lewat ceramah, melainkan lewat pengalaman langsung. Anak-anak memotret benda-benda di sekitar — daun, batu, tangan — lalu menyaksikan sendiri bagaimana komputer "belajar" membedakannya. Semakin banyak contoh yang diberikan, semakin pintar tebakannya. Dari situ konsep dasar AI masuk dengan sendirinya: mesin tidak sakti, ia hanya belajar dari contoh yang diberikan manusia.',
    },
    { type: 'h2', text: 'Dari Menebak Gambar ke Menyusun Perintah' },
    {
      type: 'p',
      text: 'Sesi berikutnya berpindah ke Scratch, aplikasi belajar pemrograman untuk anak. Dengan menyusun balok-balok perintah berwarna-warni, peserta membuat animasi sederhana: kucing yang berjalan, berputar, dan mengeluarkan suara. Beberapa anak yang baru pertama kali memegang laptop butuh pendampingan di awal, tetapi justru mereka yang paling lama bertahan di depan layar saat sesi hampir usai.',
    },
    {
      type: 'p',
      text: 'Di sela praktik, tim menyelipkan pesan literasi digital: AI adalah alat bantu, bukan pengganti berpikir. Jawaban dari mesin tetap perlu diperiksa, dan tidak semua yang muncul di internet benar.',
    },
    {
      type: 'p',
      text: 'Bagi anak-anak yang tinggal jauh dari kota, perkenalan seperti ini bisa jadi bekal yang tidak kecil — bahwa teknologi yang mereka dengar di berita ternyata bisa disentuh, dicoba, dan suatu saat mungkin ditekuni.',
    },
  ],

  'pelatihan-desain': [
    {
      type: 'p',
      text: 'Karya latihan tidak harus berakhir di layar. Dalam pelatihan desain dasar yang digelar Tim KKN 34 UKDW di Dusun Dokgarut, Jumat, 4 Juli 2025, poster buatan anak-anak dipakai sungguhan untuk membantu promosi usaha warga sekitar.',
    },
    {
      type: 'p',
      text: 'Materinya dimulai dari hal paling dasar dan disampaikan sambil bermain: memilih warna yang serasi, menata gambar dan tulisan supaya tidak berdesakan, serta memakai huruf yang gampang dibaca dari jauh. Anak-anak berlatih lewat templat sederhana, mengganti-ganti isi dan warnanya sampai menemukan susunan yang paling mereka sukai.',
    },
    { type: 'h2', text: 'Dari Latihan ke Poster Sungguhan' },
    {
      type: 'p',
      text: 'Setelah cukup lancar, tiap anak memilih satu produk usaha warga untuk dibuatkan poster — dari camilan olahan rumah, hasil laut, sampai lesehan di kawasan wisata Pantai Kasap. Mereka menuliskan nama produk, harga, dan gambar pendukungnya, lalu hasilnya dirapikan bersama pendamping.',
    },
    {
      type: 'p',
      text: 'Poster-poster terpilih kemudian diserahkan ke pemilik usaha untuk dipakai sebagai bahan promosi, baik dicetak maupun disebarkan lewat WhatsApp. Reaksi para pemilik usaha menjadi hadiah tersendiri bagi pembuatnya — ada yang langsung memasang karya itu sebagai foto profil status jualannya.',
    },
    {
      type: 'p',
      text: 'Lewat cara ini dua hal berjalan sekaligus: anak-anak mendapat keterampilan baru yang menyenangkan, dan usaha kecil di dusun mendapat wajah promosi yang lebih menarik.',
    },
  ],

  'pemeriksaan-gratis': [
    {
      type: 'p',
      text: 'Sejak pagi, Jumat, 21 Februari 2025, warga Dusun Dokgarut sudah antre di lokasi pemeriksaan kesehatan gratis. Meja-meja disusun berurutan: pendaftaran, penimbangan, pengukuran tekanan darah, cek gula darah, lalu konsultasi.',
    },
    {
      type: 'p',
      text: 'Layanan seperti ini terasa berarti bagi warga dusun, terutama para lansia. Jarak ke fasilitas kesehatan tidak dekat, dan tidak semua orang punya kendaraan atau waktu untuk memeriksakan diri secara rutin. Banyak yang baru tahu kondisi tubuhnya justru saat pemeriksaan digelar di dekat rumah.',
    },
    {
      type: 'p',
      text: 'Dari hasil pemeriksaan hari itu, keluhan yang paling banyak dijumpai adalah tekanan darah tinggi yang tidak terkontrol — beberapa warga bahkan tidak menyadari dirinya hipertensi. Petugas memberikan edukasi ringan yang membumi: mengurangi garam dan gorengan, memperbanyak sayur, dan tetap bergerak meski sekadar jalan pagi.',
    },
    {
      type: 'quote',
      text: 'Biasanya mau periksa itu mikir dulu, jauh. Kalau ada yang begini di dusun ya alhamdulillah, tinggal jalan kaki.',
      cite: 'Warga lansia peserta pemeriksaan',
    },
    {
      type: 'p',
      text: 'Warga dengan hasil pemeriksaan yang perlu ditindaklanjuti dianjurkan melanjutkan ke puskesmas. Harapan yang mengemuka dari warga pun senada: kegiatan semacam ini bisa digelar rutin, tidak hanya sekali.',
    },
  ],

  'pernikahan-dini': [
    {
      type: 'p',
      text: 'Dua agenda dirangkai dalam satu siang di Dusun Dokgarut, Rabu, 25 Desember 2024: sosialisasi pencegahan pernikahan dini untuk remaja, disambung pelatihan membuat kreasi bunga.',
    },
    {
      type: 'p',
      text: 'Pada sesi pertama, peserta diajak melihat dampak pernikahan di usia anak dari berbagai sisi. Dari sisi kesehatan, kehamilan di usia terlalu muda berisiko tinggi bagi ibu maupun bayinya, termasuk risiko melahirkan anak stunting. Dari sisi pendidikan dan ekonomi, pernikahan dini hampir selalu berarti putus sekolah — dan menyempitnya pilihan hidup setelahnya. Peserta juga diingatkan bahwa undang-undang kini menetapkan usia minimal menikah 19 tahun, bagi laki-laki maupun perempuan.',
    },
    { type: 'h2', text: 'Ditutup dengan Keterampilan' },
    {
      type: 'p',
      text: 'Supaya pesan tidak berhenti sebagai larangan, acara dilanjutkan dengan kegiatan produktif: pelatihan membuat kreasi bunga dari bahan sederhana. Suasana yang semula serius mencair — sambil merangkai, obrolan soal rencana sekolah dan cita-cita mengalir lebih santai.',
    },
    {
      type: 'p',
      text: 'Kreasi bunga sengaja dipilih karena bisa ditekuni menjadi keterampilan yang menghasilkan, misalnya untuk hiasan acara atau dijual sebagai buket. Remaja yang sibuk berkarya dan punya rencana masa depan diharapkan tidak lagi memandang menikah muda sebagai satu-satunya jalan.',
    },
  ],

  'pupuk-organik': [
    {
      type: 'p',
      text: 'Harga pupuk kimia yang terus merangkak membuat kelompok tani di Dusun Dokgarut mulai melirik apa yang selama ini terbuang. Dalam sosialisasi pembuatan pupuk organik, Kamis, 8 Agustus 2024, limbah dapur dan kotoran ternak diperlihatkan bisa diolah menjadi penyubur tanah — nyaris tanpa modal.',
    },
    {
      type: 'p',
      text: 'Bahannya semua ada di sekitar rumah: sisa sayuran, dedaunan, sekam, kotoran kambing atau sapi, ditambah larutan gula dan bioaktivator untuk mempercepat pembusukan. Yang selama ini dibuang atau dibakar ternyata punya nilai bila diperlakukan dengan benar.',
    },
    { type: 'h2', text: 'Praktik Langsung di Lahan' },
    {
      type: 'p',
      text: 'Usai teori singkat, peserta langsung praktik membuat satu adonan kompos bersama. Bahan hijauan dicacah, ditumpuk berlapis dengan kotoran ternak, disiram larutan bioaktivator, lalu ditutup terpal. Tumpukan itu perlu dibalik berkala, dan dalam tiga sampai empat minggu pupuk sudah matang — ditandai warna gelap, gembur, dan tidak berbau busuk.',
    },
    {
      type: 'p',
      text: 'Selain menghemat biaya, pupuk organik memperbaiki struktur tanah dalam jangka panjang — sesuatu yang tidak diberikan pupuk kimia. Bagi dusun yang warganya banyak bertani sambil melaut, penghematan di ladang berarti napas lebih panjang untuk kebutuhan lain.',
    },
    {
      type: 'p',
      text: 'Adonan percontohan hari itu dirawat bersama anggota kelompok tani. Bila hasilnya baik, cara yang sama tinggal diulang di rumah masing-masing.',
    },
  ],

  'fgd-pariwisata': [
    {
      type: 'p',
      text: 'Dinas Pariwisata Kabupaten Pacitan datang ke Watukarung, Selasa, 6 Agustus 2024, menggelar diskusi kelompok terarah (FGD) bersama masyarakat. Perangkat desa, karang taruna, pelaku usaha wisata, dan warga Dusun Dokgarut duduk satu forum membicarakan arah pengembangan wisata di wilayah mereka sendiri.',
    },
    {
      type: 'p',
      text: 'Watukarung memang sedang naik daun. Pantai Kasap kerap dijuluki "Raja Ampat mini", Kali Cokel ramai oleh wisatawan yang menyusuri sungai, dan area camping terus bertambah pengunjungnya. Namun forum sepakat: pemandangan bagus saja tidak cukup. Kebersihan, parkir, keamanan, dan keramahan warga — hal-hal itulah yang menentukan apakah wisatawan mau kembali.',
    },
    { type: 'h2', text: 'Warga Bicara' },
    {
      type: 'p',
      text: 'Sesi diskusi menjadi bagian paling hidup. Warga menyampaikan persoalan yang mereka hadapi di lapangan: sampah yang menumpuk saat musim ramai, akses jalan menuju titik wisata, sampai kebutuhan pelatihan bagi pemandu dan pelaku usaha lokal. Dinas mencatat masukan-masukan itu sebagai bahan penyusunan program.',
    },
    {
      type: 'p',
      text: 'Materi sadar wisata dan Sapta Pesona — aman, tertib, bersih, sejuk, indah, ramah, dan berkesan — turut disampaikan sebagai pegangan bersama. Intinya satu: wisata yang berkelanjutan hanya mungkin bila warganya sendiri yang menjaga.',
    },
    {
      type: 'p',
      text: 'Bagi Dokgarut yang sebagian warganya menggantungkan penghasilan dari kunjungan wisatawan, forum seperti ini bukan seremoni — melainkan kesempatan memastikan suara dusun ikut terbawa dalam rencana kabupaten.',
    },
  ],

  'posyandu-putri-ceria': [
    {
      type: 'p',
      text: 'Setiap bulan, remaja di Desa Watukarung punya jadwal yang ditunggu: Posyandu Remaja "Putri Ceria". Pada kegiatan Sabtu, 3 Agustus 2024, giliran para remaja menimbang berat badan, mengukur tinggi dan lingkar lengan, lalu duduk berbincang dengan kader tentang keluhan masing-masing.',
    },
    {
      type: 'p',
      text: 'Posyandu remaja ini bukan barang baru — sudah aktif sejak 2018 dan bertahan sampai sekarang. Alurnya mengikuti sistem lima meja: pendaftaran, pengukuran, pencatatan, pelayanan kesehatan, lalu penyuluhan. Yang membedakannya dari posyandu balita: di sini pesertanya sekaligus jadi pelaksana, karena sebagian kader adalah remaja sendiri.',
    },
    {
      type: 'p',
      text: 'Materi penyuluhan berganti-ganti tiap pertemuan — dari gizi dan anemia, kesehatan reproduksi, sampai bahaya rokok dan pergaulan bebas. Pemantauan rutin membuat masalah gizi bisa terdeteksi dini, sebelum berkembang lebih jauh.',
    },
    {
      type: 'quote',
      text: 'Kalau cuma ditimbang, remaja malas datang. Yang bikin betah itu ngobrolnya — di sini mereka bisa cerita yang tidak berani diceritakan di rumah.',
      cite: 'Kader Posyandu Remaja Putri Ceria',
    },
    {
      type: 'p',
      text: 'Enam tahun berjalan, Putri Ceria membuktikan bahwa kegiatan kesehatan remaja bisa hidup di desa — asal remajanya dilibatkan, bukan sekadar diundang.',
    },
  ],

  'pilkasun-pemungutan': [
    {
      type: 'p',
      text: 'Sejak pagi, Kamis, 4 Januari 2024, warga Dusun Dokgarut berdatangan ke tempat pemungutan suara pemilihan kepala dusun (pilkasun). Prosesinya tak kalah dari pemilu sungguhan: ada bilik suara, kotak suara tersegel, daftar pemilih, dan jari bertinta sebagai tanda telah memilih.',
    },
    {
      type: 'p',
      text: 'Pemungutan dibuka panitia dengan pengecekan kotak dan kelengkapan di hadapan warga serta saksi dari masing-masing calon. Satu per satu pemilih dipanggil sesuai daftar hadir, masuk bilik, mencoblos, lalu memasukkan surat suaranya. Warga lanjut usia mendapat prioritas antrean.',
    },
    {
      type: 'p',
      text: 'Usai waktu pemungutan ditutup, penghitungan suara digelar terbuka. Warga bertahan sampai sore mengikuti pembacaan surat suara satu demi satu — sesekali riuh, tapi tetap tertib. Hasil akhirnya dituangkan dalam berita acara dan diterima semua pihak, termasuk para calon.',
    },
    {
      type: 'p',
      text: 'Bagi dusun berpenduduk 164 jiwa, pilkasun bukan sekadar memilih pemimpin. Ia jadi semacam ujian kerukunan — dan hari itu Dokgarut lulus: beda pilihan di bilik suara, tetap satu tegur sapa di jalan pulang.',
    },
  ],

  'pilkasun-sosialisasi': [
    {
      type: 'p',
      text: 'Menjelang pemilihan kepala dusun (pilkasun), panitia menggelar sosialisasi bagi warga Dusun Dokgarut, Jumat, 10 November 2023. Tujuannya memastikan semua warga paham aturan main sebelum hari pencoblosan tiba.',
    },
    {
      type: 'p',
      text: 'Materi yang disampaikan mencakup seluruh tahapan: jadwal pendaftaran calon, syarat-syarat yang harus dipenuhi bakal calon, masa pengenalan calon ke warga, hingga tata cara pemungutan dan penghitungan suara. Daftar pemilih juga dibacakan agar warga bisa mengecek namanya — yang belum terdaftar masih punya waktu melapor ke panitia.',
    },
    {
      type: 'p',
      text: 'Sesi tanya jawab berlangsung hidup. Pertanyaan warga beragam, dari hal teknis seperti jam buka TPS sampai soal keabsahan surat suara bila coblosan tembus. Panitia menjawab satu per satu agar tidak ada simpang siur yang berkembang jadi isu.',
    },
    {
      type: 'p',
      text: 'Di penghujung acara, warga diajak menjaga suasana tetap adem selama masa pilkasun. Beda dukungan itu wajar dan sebentar; yang harus awet adalah rukunnya tetangga.',
    },
  ],

  soth: [
    {
      type: 'p',
      text: 'Menjadi orang tua tidak ada sekolahnya — begitu kata orang. Desa Watukarung menjawabnya dengan membuka Sekolah Orang Tua Hebat (SOTH), yang kegiatannya berlangsung di antaranya pada Rabu, 1 November 2023.',
    },
    {
      type: 'p',
      text: 'SOTH adalah program pembinaan keluarga yang digagas BKKBN dan dijalankan berjenjang sampai tingkat desa. Pesertanya para orang tua, terutama yang memiliki anak balita. Mereka mengikuti kelas berseri dengan materi terstruktur — bukan penyuluhan sekali datang lalu selesai.',
    },
    { type: 'h2', text: 'Yang Dipelajari' },
    {
      type: 'list',
      items: [
        'Pentingnya 1.000 hari pertama kehidupan bagi tumbuh kembang anak.',
        'Gizi keluarga dan pencegahan stunting.',
        'Cara berkomunikasi dengan anak tanpa membentak dan tanpa kekerasan.',
        'Memantau tahapan tumbuh kembang serta menstimulasi anak lewat bermain.',
        'Peran ayah dalam pengasuhan — bukan hanya urusan ibu.',
      ],
    },
    {
      type: 'p',
      text: 'Metodenya jauh dari ceramah satu arah. Peserta berdiskusi, bermain peran, dan pulang membawa "pekerjaan rumah" berupa praktik pengasuhan yang dicoba langsung di rumah, lalu diceritakan kembali di pertemuan berikutnya.',
    },
    {
      type: 'p',
      text: 'Bagi keluarga muda di Watukarung dan Dusun Dokgarut, kelas seperti ini mengisi ruang yang selama ini kosong: tempat bertanya soal mengasuh anak tanpa takut dihakimi.',
    },
  ],

  'kampung-kb': [
    {
      type: 'p',
      text: 'Desa Watukarung resmi mencanangkan Kampung Keluarga Berkualitas (Kampung KB) bertajuk "Watukarung Sehat" pada Senin, 23 Januari 2023. Pencanangan dihadiri unsur pemerintah kecamatan Pringkuku, dinas terkait, pemerintah desa, serta warga — termasuk dari Dusun Dokgarut.',
    },
    {
      type: 'p',
      text: 'Nama programnya kerap membuat salah paham. Kampung KB bukan semata urusan keluarga berencana, melainkan program pembangunan keluarga lintas sektor: kesehatan, pendidikan, ekonomi, sampai lingkungan. Prinsipnya, keluarga yang berkualitas menjadi pondasi desa yang kuat.',
    },
    {
      type: 'p',
      text: 'Lewat wadah ini, berbagai kegiatan berjalan lebih terarah — posyandu, bina keluarga balita, bina keluarga remaja, bina keluarga lansia, hingga kelompok usaha peningkatan pendapatan keluarga. Pendataan keluarga juga dirapikan agar program yang turun benar-benar sesuai kebutuhan warga.',
    },
    {
      type: 'p',
      text: 'Bagi Dusun Dokgarut, pencanangan ini menjadi payung bagi banyak kegiatan yang kelak tumbuh di dusun: dari posyandu remaja yang aktif hingga berbagai penyuluhan kesehatan keluarga. "Watukarung Sehat" bukan slogan sehari — ia rencana kerja panjang.',
    },
  ],

  'bias-imunisasi': [
    {
      type: 'p',
      text: 'Pandemi tidak menghentikan imunisasi anak sekolah. Senin, 21 September 2020, SD Negeri Watukarung 1 melaksanakan Bulan Imunisasi Anak Sekolah (BIAS) dengan sasaran imunisasi campak-rubela (MR) — lengkap dengan protokol kesehatan yang ketat.',
    },
    {
      type: 'p',
      text: 'Pelaksanaannya diatur agar tidak menimbulkan kerumunan. Siswa datang bergiliran sesuai jadwal, memakai masker, mencuci tangan sebelum masuk, dan duduk berjarak sambil menunggu giliran disuntik petugas kesehatan.',
    },
    {
      type: 'p',
      text: 'Imunisasi MR penting untuk mencegah campak dan rubela — dua penyakit menular yang bisa berakibat serius, dari radang paru hingga kecacatan pada bayi bila rubela menulari ibu hamil. Justru karena pandemi membuat banyak layanan kesehatan tertunda, cakupan imunisasi rutin harus dijaga agar tidak muncul wabah susulan.',
    },
    {
      type: 'p',
      text: 'Ada tangis sebentar, ada yang pura-pura berani — seperti imunisasi di mana pun. Yang penting, anak-anak Watukarung tetap terlindungi meski keadaan sedang tidak biasa.',
    },
  ],

  'bantuan-pendidikan-2017': [
    {
      type: 'p',
      text: 'Pada Tahun Anggaran 2017, Pemerintah Kabupaten Pacitan menyalurkan bantuan pendidikan bagi siswa dari keluarga kurang mampu. Siswa dari wilayah Desa Watukarung, termasuk Dusun Dokgarut, ikut menjadi penerima manfaat program ini.',
    },
    {
      type: 'p',
      text: 'Bantuan diberikan untuk meringankan biaya-biaya yang kerap menjadi alasan anak berhenti sekolah: perlengkapan belajar, seragam, dan biaya operasional pendidikan lainnya. Nilainya mungkin tidak besar di atas kertas, tetapi bagi keluarga nelayan dan petani yang penghasilannya mengikuti musim, bantuan itu bisa menentukan seorang anak lanjut sekolah atau tidak.',
    },
    {
      type: 'p',
      text: 'Program semacam ini menyasar persoalan yang nyata di desa pesisir: pendidikan sering kalah prioritas ketika ekonomi keluarga sedang sulit. Dengan sebagian beban ditanggung pemerintah, orang tua tidak harus memilih antara dapur dan sekolah anaknya.',
    },
    {
      type: 'p',
      text: 'Kini, bertahun-tahun kemudian, semangat yang sama tetap relevan: tidak boleh ada anak Dokgarut yang putus sekolah hanya karena biaya.',
    },
  ],
};

export default newsArticles;
