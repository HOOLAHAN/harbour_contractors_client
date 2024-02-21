import { Text, Image, Box, Button, useBreakpointValue, Stack, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HomeBackground from '../Images/HomeBackground.jpg';

const Home = () => {
    const fontSizeA = useBreakpointValue({ base: '3xl', md: '5xl' });
    const fontSizeB = useBreakpointValue({ base: '1xl', md: '3xl' });
    const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const navigate = useNavigate();

    // Function to handle navigation to /projects
    const handleNavigateToProjects = () => {
        navigate('/projects');
    };

    return (
        <Box w="100%" h="100vh" position="relative" overflowX="visible" mt={{ base: '10px', md: '70px' }}>
            <Image src={HomeBackground} alt="Home Background" objectFit="cover" objectPosition="center" position="absolute" top={0} left={0} width="100%" height="100%" zIndex={-1} />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                bg="rgba(255, 255, 255, 0.7)"
                p={4}
            >
                <Text
                    fontSize={fontSizeA}
                    fontWeight="bold"
                    mb={4}
                    color="#184776"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
                >
                    HARBOUR CONTRACTORS LTD
                </Text>
                <Box borderBottom="2px" borderColor="#184776" mx="auto" mb={4} width="100%" />
                <Text
                    fontSize={fontSizeB}
                    fontWeight="bold"
                    mb={6}
                    color="#184776"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
                >
                    Offering design, build, and construction management services
                </Text>
                <Center>
                    <Stack direction={stackDirection} spacing={4}>
                        <Button onClick={handleNavigateToProjects} colorScheme="teal" size="md">
                            View Projects
                        </Button>
                        <Button as="a" href="mailto:info@harbourcontractors.co.uk" colorScheme="teal" size="md">
                            Book a Consultation
                        </Button>
                    </Stack>
                </Center>
            </Box>
        </Box>
    );
};

export default Home;
