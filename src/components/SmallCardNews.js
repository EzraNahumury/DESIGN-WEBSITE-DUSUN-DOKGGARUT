import { Badge, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

// Kartu berita ringkas untuk sidebar "Terbaru" — kontrak props lihat DESIGN-SPEC.md §3.
const SmallCardNews = ({ title, image, date, category }) => {
  return (
    <Flex
      gap={4}
      p={3}
      rounded="xl"
      transition="background 0.2s ease"
      _hover={{ bg: 'bg.subtle' }}
    >
      <Image
        src={image}
        alt=""
        boxSize="96px"
        rounded="lg"
        objectFit="cover"
        flexShrink={0}
        loading="lazy"
      />

      <Box minW={0}>
        <Badge variant={category} fontSize="10px">
          {category}
        </Badge>

        <Heading
          as="h3"
          fontSize="15px"
          fontWeight={600}
          lineHeight={1.4}
          noOfLines={2}
          mt={2}
        >
          {title}
        </Heading>

        <Text fontSize="13px" color="text.muted" mt={1}>
          {date}
        </Text>
      </Box>
    </Flex>
  );
};

export default SmallCardNews;
