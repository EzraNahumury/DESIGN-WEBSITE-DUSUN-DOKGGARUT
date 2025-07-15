import { Flex, ListItem, OrderedList, Text, Box } from '@chakra-ui/react';

const KondisiGeo = () => {
  return (
    <Flex flexDirection="column" fontFamily="heading" gap={4}>
      <Text fontWeight="600" fontSize="35px">
        Kondisi Geografis
      </Text>
      <Text>
        Desa Watu Karung Kecamatan Pringkuku mempunyai luas wilayah
505.514 Ha dengan batas-batas wilayah:
      </Text>
      <Box>
        <Text fontWeight={700}>Dengan rincian sebagai berikut :</Text>
        <OrderedList>
          <ListItem>Sebelah Utara : Desa Dersono</ListItem>
          <ListItem>Sebelah Selatan : Laut Indonesia</ListItem>
          <ListItem>Sebelah Barat : Desa Sendang</ListItem>
          <ListItem>Sebelah Timur : Desa Jlubang</ListItem>
        </OrderedList>
      </Box>
      <Box>
        <Text fontWeight={700}>Keadaan geografis Desa Watu Karung berada di atas ketinggian 160 m di
atas permukaan air laut. Desa ini berjarak sekitar 25 km dari pusat Kabupaten
Pacitan. Berdasarkan data monografi desa tahun 2016, jumlah penduduk Desa
Watu Karung terdiri dari 553 KK dengan total 1596 jiwa.  </Text>
        
      </Box>
      <Box>
        <Text>
         jumlah penduduk Desa Watu Karung yang berjenis 
kelamin laki-laki berjumlah 785 jiwa sedangkan jumlah penduduk berjenis 
kelamin perempuan berjumlah 811 jiwa. Dapat ditarik kesimpulan bahwa jumlah 
penduduk perempuan lebih banyak dibandingkan jumlah penduduk laki-laki 
dengan selisih tidak terlalu besar yaitu 26 jiwa.    
        </Text>
      </Box>
      <Box>
        <Text>
        mayoritas agama yang dianut oleh penduduk 
Desa Watu Karung adalah Islam dengan prosentase sebesar 99,94%. Penduduk 
yang menganut agama Kristen sangat jarang dijumpai
        </Text>
      </Box>
      
      
    </Flex>
  );
};

export default KondisiGeo;
