import {
    Badge,
  Box,
  Flex,
  Highlight,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import LogoDaerah from '../../../assets/logo_watukarung-removebg-preview.png';

const LogoKabupaten = () => {
  return (
    <Flex fontFamily="heading" flexDirection="column" gap={4}>
      <Text fontWeight="600" fontSize="35px">
        Logo Desa Watukarung
      </Text>
      <Box display="flex" justifyContent="center">
        <Image
          src={LogoDaerah}
          boxSize={{ base: '150px', md: '250px', lg: '300px' }}
          fit={'contain'}
        />
      </Box>
      <Box>
        <Text fontSize="25px">Makna Lambang Desa Watukarung</Text>
        <UnorderedList>
          <ListItem>
            Lingkaran dan Bingkai Emas
Melambangkan persatuan dan kesatuan masyarakat, serta mencerminkan kejayaan, kemuliaan, dan harapan akan kemajuan Desa Watukarung.
          </ListItem>
          <ListItem>
            Tulisan “PEMERINTAH DESA WATUKARUNG – KECAMATAN PRINGKUKU” menunjukkan identitas resmi pemerintahan desa sebagai bagian dari wilayah administratif Kecamatan Pringkuku.
          </ListItem>
          <ListItem>
            Perisai (Tameng) Tengah
Melambangkan perlindungan dan kesiapan desa dalam menghadapi tantangan, serta mencerminkan keberanian (merah) dan ketenangan (biru) dalam kehidupan bermasyarakat.
          </ListItem>
          <ListItem>
             Ombak Laut
Menggambarkan karakter geografis desa yang berada di pesisir, melambangkan potensi wisata bahari seperti pantai, surfing, dan kehidupan nelayan sebagai sumber ekonomi utama.
          </ListItem>
          <ListItem>
            Pohon Kelapa dan Gunung
Simbol sumber daya alam desa, di mana pohon kelapa menunjukkan tanaman produktif pesisir, dan gunung mencerminkan keteguhan serta kondisi topografi berbukit.
          </ListItem>
          <ListItem>
           Tugu/Bangunan Ikonik
Melambangkan identitas atau ikon desa, serta mencerminkan kemajuan pembangunan dan pusat kegiatan budaya masyarakat.
          </ListItem>
          <ListItem>
           Padi dan Kapas
Simbol kemakmuran dan keadilan sosial, di mana padi melambangkan ketahanan pangan, dan kapas menunjukkan kesejahteraan sandang masyarakat desa.
          </ListItem>
        
          
        </UnorderedList>
      </Box>
      <Box>
        <Text fontSize="25px">Makna Warna-warna Yang Digunakan :</Text>
        <UnorderedList>
          <ListItem>
            Merah
Melambangkan semangat, keberanian, dan tekad masyarakat Desa Watukarung dalam membangun dan mempertahankan nilai-nilai lokal.
          </ListItem>
          <ListItem>Biru
Simbol kedamaian, ketenangan, dan kesetiaan, serta menggambarkan kekayaan laut sebagai potensi wisata dan sumber kehidupan utama.</ListItem>
          <ListItem> Kuning Emas
Menandakan kejayaan, kemuliaan, optimisme, dan harapan atas masa depan Desa Watukarung yang lebih maju dan sejahtera.</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default LogoKabupaten;
