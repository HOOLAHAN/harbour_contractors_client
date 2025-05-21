// src/Pages/Home.jsx
import {
  Text,
  Image,
  Box,
  Button,
  useBreakpointValue,
  Stack,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HomeBackground from '../Images/HomeBackground.jpg';

const Home = () => {
  const navigate = useNavigate();

  const fontSizeA = useBreakpointValue({ base: '2xl', md: '4xl', lg: '5xl' });
  const fontSizeB = useBreakpointValue({ base: 'md', md: 'xl', lg: '2xl' });
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
      overflow="hidden"
    >
      <Image
        src={HomeBackground}
        alt="Home Background"
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
        position="relative"
        textAlign="center"
        bg="rgba(255, 255, 255, 0.85)"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        maxW="800px"
        mx="auto"
        mt={paddingX}
      >
        <Text
          fontSize={fontSizeA}
          fontWeight="bold"
          mb={4}
          color="#184776"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.1)"
        >
          HARBOUR CONTRACTORS LTD
        </Text>
        <Box borderBottom="2px" borderColor="#184776" mx="auto" mb={4} />
        <Text
          fontSize={fontSizeB}
          fontWeight="medium"
          mb={6}
          color="#184776"
          textShadow="1px 1px 3px rgba(0, 0, 0, 0.1)"
        >
          Offering design, build, and construction management services
        </Text>

        <Center>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 4, md: 6 }}
            justify="center"
          >
            <Button
              onClick={() => navigate('/projects')}
              colorScheme="teal"
              size="md"
            >
              View Projects
            </Button>
            <Button
              as="a"
              href="mailto:info@ijrhservices.co.uk"
              colorScheme="teal"
              size="md"
            >
              Contact Us
            </Button>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
