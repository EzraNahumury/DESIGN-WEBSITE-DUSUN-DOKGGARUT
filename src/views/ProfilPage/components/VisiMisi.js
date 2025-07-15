import {
  Flex,
  ListItem,
  Text,
  OrderedList,
  Box,
} from '@chakra-ui/react';

const VisiMisi = () => {
  return (
    <Flex flexDirection="column">
      <Box my={5}>
        <Text fontFamily="heading" fontWeight="600" fontSize="35px">
          Visi Misi
        </Text>
        <Text fontFamily="heading" fontSize="25px">
          Visi
        </Text>
        <Text fontFamily="heading">
          Menjadi desa wisata unggulan yang memanfaatkan potensi alam, 
          budaya, dan sumber daya manusia
           untuk meningkatkan kesejahteraan masyarakat serta menarik wisatawan domestik dan mancanegara.
        </Text>
      </Box>
      <Box>
        <Text fontFamily="heading" fontSize="25px">
          Misi
        </Text>
        <OrderedList fontFamily="heading">
          <ListItem>
            Mengembangkan potensi wisata alam dan budaya secara berkelanjutan, khususnya wisata pantai, surfing, dan keindahan alam pesisir.
          </ListItem>
          <ListItem>
           Meningkatkan kualitas sumber daya manusia melalui pelatihan, pemberdayaan masyarakat, dan peningkatan keterampilan, termasuk kemampuan berbahasa asing untuk mendukung pariwisata internasional
          </ListItem>
          <ListItem>Meningkatkan sarana dan prasarana pendukung wisata seperti penginapan, toilet, tempat parkir, warung makan, serta fasilitas umum lainnya agar wisatawan merasa nyaman dan aman</ListItem>
          <ListItem>
           Menjaga kelestarian lingkungan dengan menjaga kebersihan pantai, pengelolaan sampah, dan pelestarian terumbu karang serta ekosistem laut.
          </ListItem>
          <ListItem>
           Meningkatkan promosi dan branding Desa Wisata Watukarung melalui berbagai media, termasuk internet dan media sosial, untuk menjangkau pasar wisatawan yang lebih luas
          </ListItem>
          <ListItem>Meningkatkan partisipasi masyarakat dalam pengelolaan dan pengembangan wisata, sehingga manfaat ekonomi dapat dirasakan langsung oleh warga desa</ListItem>
        </OrderedList>
      </Box>
    </Flex>
  );
};

export default VisiMisi;
