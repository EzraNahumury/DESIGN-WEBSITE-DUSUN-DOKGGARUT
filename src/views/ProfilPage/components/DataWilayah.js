import {
  AspectRatio,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const DataWilayah = () => {
  return (
    <Flex direction={'column'}>
      <Text fontFamily="heading" fontWeight="600" fontSize="35px">
        Data Wilayah
      </Text>
      <UnorderedList fontFamily="heading" spacing={3}>
        <ListItem>Nama Resmi : Dusun Dokgarut </ListItem>
        <ListItem>Desa : Watukarung </ListItem>
        <ListItem>Kecamatan : Pringkuku </ListItem>
        <ListItem>Kabupaten Pacitan</ListItem>
        <ListItem>Provinsi Jawa Timur </ListItem>
        <br></br>
        <Text fontFamily="heading" fontWeight="600" fontSize="35px">
        Batas Wilayah
      </Text>
        
        <ListItem>Utara : Desa Dersono </ListItem>
        <ListItem>Selatan : Dusun Karangnongko </ListItem>
        <ListItem>Barat : Desa Dersono  </ListItem>
        <ListItem>Timur : Desa Jlubang </ListItem>
        <ListItem>Timur Tenggara : Dusun Tekil </ListItem>
      
        <ListItem>
          Jumlah Penduduk : 164 jiwa (Sensus Penduduk 2025){' '}
        </ListItem>
      </UnorderedList>
      <AspectRatio
        ratio={16 / 9}
        my={5}
        maxWidth={{ base: '500px', lg: '700px' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7897.794535719307!2d110.98009984038828!3d-8.213085767276663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bdc32141c6edd%3A0xfdc0a262c350c385!2sDokgarut%2C%20Watukarung%2C%20Pringkuku%2C%20Pacitan%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1752300355382!5m2!1sen!2sid"
          title="embed_location"
        />
      </AspectRatio>
    </Flex>
  );
};

export default DataWilayah;
