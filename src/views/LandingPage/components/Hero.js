import { Flex, Text, Box, Badge, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import bgImage from '../../../assets/WATUKARUNG06.jpg';
  // Ganti nama variabel gambar

const Hero = () => {
  const badgeColorScheme = 'blue';
  const badgeFontSize = '0.8em';

  return (
    <Flex
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '200px', md: '300px', lg: '800px' }}
      justifyContent="center"
      alignItems="center"
      mb="30px"
    >
      <Box
        flexDirection="column"
        boxSize={{ base: 'fit-content', md: 'fit-content', lg: 'max-content' }}
        textAlign="center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 2,
          }}
        >
          <Text
            fontSize={{ base: '30px', md: '70px', lg: '110px' }}
            fontFamily="heading"
            fontWeight="900"
            color="gray.50"
            mb={{ base: '10px', md: '20px' }}
          >
            DUSUN DOKGARUT WATUKARUNG
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 5,
          }}
        >
          <Text
            fontFamily="heading"
            color="gray.50"
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          >
            Terwujudnya Dusun Dokgarut Yang{' '}
            <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m="0px 2px">
              Sejahtera,
            </Badge>
            <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m="0px 2px">
              Berkeadilan,
            </Badge>
            <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m="0px 2px">
              Mandiri,
            </Badge>
            <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m="0px 2px">
              Berwawasan Lingkungan,
            </Badge>
            dan{' '}
            <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m="0px 2px">
              Berakhlak Mulia.
            </Badge>
          </Text>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default Hero;
