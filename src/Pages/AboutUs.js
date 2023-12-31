import { Box, Heading, Text, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const { colorMode } = useColorMode();
    const textColor = colorMode === 'dark' ? 'white' : '#184776';

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Box maxWidth="800px" p={4} textAlign="center" mt="70px">
                <Heading as="h2" size="lg" mb={4} color={textColor}>
                    About Us
                </Heading>
                <Text color={textColor}>
                    Welcome to Harbour Contractors LTD.
                </Text>
                <br />
                <Text color={textColor}>
                    We are a construction company based in Bosham - West Sussex providing
                    an architect design and construction management service. We are able
                    to offer a complete one-stop package from concept through to handover
                    of the finished building. We pride ourselves on being able to deliver
                    value, certainty, and quality, tailored to our clients' specific
                    requirements.
                </Text>
                <Button as={Link} to="/services" colorScheme="teal" mt={4}>
                    Explore Our Services
                </Button>
            </Box>
        </Box>
    );
};

export default AboutUs;
