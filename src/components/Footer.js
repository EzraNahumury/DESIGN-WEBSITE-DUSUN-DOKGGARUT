import React from 'react';
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import LogoDesa from '../assets/logo_watukarung-removebg-preview.png';

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Profil', to: '/profil' },
  { label: 'Wisata', to: '/#wisata' },
  { label: 'Berita', to: '/news' },
  { label: 'Pemetaan', to: '/pemetaan' },
  { label: 'Tim KKN', to: '/tim' },
];

const ColumnTitle = ({ children }) => (
  <Text
    fontSize="13px"
    fontWeight={600}
    textTransform="uppercase"
    letterSpacing="0.06em"
    color="whiteAlpha.700"
    mb={4}
  >
    {children}
  </Text>
);

const footerLinkStyle = {
  fontSize: '15px',
  color: 'whiteAlpha.800',
  _hover: { color: 'white' },
};

export default function Footer() {
  return (
    <Box as="footer" bg="brand.900" borderTop="4px solid" borderTopColor="accent.500">
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 10, lg: 8 }}>
          {/* Identitas dusun */}
          <Stack spacing={4} align="flex-start">
            <Flex
              boxSize="48px"
              rounded="full"
              bg="white"
              align="center"
              justify="center"
              p={1}
            >
              <Image
                src={LogoDesa}
                alt="Logo Desa Watukarung"
                boxSize="40px"
                objectFit="contain"
                loading="lazy"
              />
            </Flex>
            <Text fontSize="16px" fontWeight={700} color="white">
              Dusun Dokgarut
            </Text>
            <Text fontSize="14px" color="whiteAlpha.700">
              Dusun Dokgarut, Desa Watukarung, Kecamatan Pringkuku, Kabupaten
              Pacitan, Jawa Timur
            </Text>
          </Stack>

          {/* Navigasi */}
          <Stack spacing={3} align="flex-start">
            <ColumnTitle>Navigasi</ColumnTitle>
            {navLinks.map(item => (
              <Link key={item.to} as={RouterLink} to={item.to} {...footerLinkStyle}>
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Kontak */}
          <Stack spacing={3} align="flex-start">
            <ColumnTitle>Kontak</ColumnTitle>
            <Link href="https://wa.me/6282338142821" isExternal {...footerLinkStyle}>
              Telepon / WhatsApp
            </Link>
            <Link
              href="https://www.google.com/maps/place/Dokgarut,+Watukarung,+Pringkuku,+Pacitan+Regency,+East+Java"
              isExternal
              {...footerLinkStyle}
            >
              Lihat lokasi di Google Maps
            </Link>
          </Stack>

          {/* Tentang situs */}
          <Stack spacing={3} align="flex-start">
            <ColumnTitle>Tentang Situs</ColumnTitle>
            <Text fontSize="15px" color="whiteAlpha.800">
              Dibangun oleh Tim KKN 34 UKDW 2025
            </Text>
            <Text fontSize="15px" color="whiteAlpha.800">
              Dilanjutkan oleh Tim KKN 43 UKDW 2026
            </Text>
          </Stack>
        </SimpleGrid>

        {/* Bottom bar */}
        <Box borderTop="1px solid" borderTopColor="whiteAlpha.200" pt={6} mt={10}>
          <Text fontSize="13px" color="whiteAlpha.700">
            © 2025 Dusun Dokgarut · Desa Watukarung, Pacitan
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
