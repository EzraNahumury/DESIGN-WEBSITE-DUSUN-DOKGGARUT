import {
  Flex,
  Text,
  // Link,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Badge,
  CardFooter,
  Button,
  // Box,
} from '@chakra-ui/react';

const LatestNews = () => {
  return (
    <Flex flexDirection={'column'} p={{ lg: '40px' }} m={{ lg: '5px' }}>
      <Text
        fontFamily={'heading'}
        fontSize={{ base: '25px', md: '35px', lg: '40px' }}
        fontWeight={700}
        mb={{base: "5px", lg: '10px' }}
        ml={{base: "5px", lg: '10px' }}
        color="#4F7BA6"
      >
        Berita Terbaru
      </Text>
      <Grid
        templateRows={{ base : "", lg : "repeat(2, 1fr)" }}
        templateColumns={{ base : "1fr", lg : "repeat(2, 1fr)" }}
        gap={3}
        m="10px"
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Card
            // size="md"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <Image
              src="https://3.bp.blogspot.com/-4Ud1NoxnkOQ/VqYSRiDmKbI/AAAAAAAAABw/2X4PefZBFLs/s1600/watukarung.JPG"
              borderRadius="lg"
              m={3}
            />
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                23 / 01 / 2023
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
                KAMPUNG KB "WATUKARUNG SEHAT" DESA WATUKARUNG KECAMATAN PRINGKUKU
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
                Desa Watukarung merupakan salah satu dari 12 desa di wilayah KecamatanPringkuku, yang terletak 7 Km ke arah utara dari kota Kecamatan,  Desa Watukarung mempunyai luas wilayah seluas 582,60 hektar. Adapun batas-batas wilayah desa Watukarung:
, Sabtu (23/01/2023).
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Kemasyarakatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={1} >
          <Card
            size="lg"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                10 / 11 / 2023
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
                Sosialisasi Pilkasun Dokgarut, Desa Watukarung, Kecamatan Pringkuku
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
                Sosialisasi Pilkasun (Pemilihan Kepala Dusun) Dokgarut di Desa Watukarung, Kecamatan Pringkuku, merupakan kegiatan yang bertujuan untuk memberikan pemahaman kepada masyarakat mengenai tata cara, jadwal, tahapan, dan kriteria calon dalam pemilihan kepala dusun, serta mendorong partisipasi aktif warga demi terciptanya proses demokrasi yang transparan dan lancar di tingkat dusun., Sabtu (10/11/2023).
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Kemasyarakatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={1}>
          <Card
          size="md"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                NOMOR : 188.45 / 1182 / KPTS /408.12/2017 
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
                PENERIMA DAN BESARAN BANTUAN PENDIDIKAN SISWA MISKIN
KABUPATEN PACITAN TAHUN ANGGARAN 2017
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }}  >
                Program "Penerima dan Besaran Bantuan Pendidikan Siswa Miskin Kabupaten Pacitan Tahun Anggaran 2017" merupakan bantuan finansial yang diberikan oleh pemerintah kabupaten kepada siswa dari keluarga kurang mampu untuk mendukung biaya pendidikan, seperti pembelian perlengkapan sekolah, seragam, atau biaya operasional lainnya, dengan besaran yang disesuaikan berdasarkan kebutuhan dan ketentuan anggaran daerah pada tahun tersebut.
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                 Kemasyarakatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default LatestNews;
