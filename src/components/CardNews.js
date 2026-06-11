import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

// Kartu berita utama — kontrak props lihat DESIGN-SPEC.md §3.
// category: 'pemerintahan' | 'pendidikan' | 'kesehatan'
const CardNews = ({ title, image, date, caption, category }) => {
  return (
    <Box
      role="group"
      w="100%"
      bg="bg.surface"
      border="1px solid"
      borderColor="border.default"
      rounded="2xl"
      overflow="hidden"
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        shadow: 'lift',
        borderColor: 'border.hover',
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src={image} alt="" objectFit="cover" loading="lazy" />
      </AspectRatio>

      <Box p={5}>
        <Flex align="center" gap={3} wrap="wrap">
          <Badge variant={category}>{category}</Badge>
          <Text fontSize="13px" color="text.muted">
            {date}
          </Text>
        </Flex>

        <Heading
          as="h3"
          fontSize={{ base: '18px', md: '20px' }}
          lineHeight={1.4}
          noOfLines={2}
          mt={3}
          transition="color 0.2s ease"
          _groupHover={{ color: 'text.link' }}
        >
          {title}
        </Heading>

        <Text fontSize="15px" color="text.secondary" noOfLines={2} mt={2}>
          {caption}
        </Text>
      </Box>
    </Box>
  );
};

export default CardNews;
