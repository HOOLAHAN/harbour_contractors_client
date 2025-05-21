// src/Pages/AboutUs.jsx
import {
  Box,
  Heading,
  Text,
  Button,
  useColorMode,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HomeBackground from '../Images/HomeBackground.jpg';

const AboutUs = () => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? 'white' : '#184776';
  const paddingX = useBreakpointValue({ base: 4, md: 8 });

  return (
    <Box
      w="100%"
      minH="100vh"
      px={paddingX}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={HomeBackground}
        alt="About Background"
        objectFit="cover"
        objectPosition="center"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={-1}
      />

      <Box
        maxW="800px"
        p={6}
        textAlign="center"
        bg="rgba(255, 255, 255, 0.9)"
        borderRadius="md"
        boxShadow="lg"
        zIndex={1}
      >
        <Heading as="h2" size="lg" mb={4} color={textColor}>
          About Us
        </Heading>
        <Text color={textColor} mb={2}>
          Welcome to Harbour Contractors LTD.
        </Text>
        <Text color={textColor} mb={4}>
          We are a construction company based in Bosham - West Sussex, offering
          architectural design and construction management services. We provide
          a complete package from concept to finished build — delivering value,
          certainty, and quality tailored to each client’s needs.
        </Text>
        <Button as={Link} to="/services" colorScheme="teal">
          Explore Our Services
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUs;
