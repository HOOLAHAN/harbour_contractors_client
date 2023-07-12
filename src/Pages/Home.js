import { Text, Image, Box, Button, Link as RouterLink } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import HomeBackground from '../Images/HomeBackground.jpg';

const Home = () => {
    return (
        <Box w="100%" position="relative">
            <Image src={HomeBackground} alt="Home Background" />

            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="#184776"
            >
                <Text fontSize="5xl" fontWeight="bold" mb={4}>
                    HARBOUR CONTRACTORS LTD
                </Text>
                <Box borderBottom="2px" borderColor="white" mx="auto" mb={4} width="60px" />
                <Text fontSize="2xl" fontWeight="bold" mb={6}>
                    Offering design, build, and construction management services
                </Text>
                <RouterLink as={ReachLink} to="/contact" colorScheme="teal" _hover={{ textDecoration: 'none' }}>
                    <Button colorScheme="teal" size="lg">
                        Book a Consultation
                    </Button>
                </RouterLink>
            </Box>
        </Box>
    );
};

export default Home;
