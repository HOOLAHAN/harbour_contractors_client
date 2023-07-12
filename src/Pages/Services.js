import { Box, Button, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DesignServices from '../Images/DesignServices.jpg'
import BuildServices from '../Images/BuildServices.jpg'


const Services = () => {
    return (
        <Box textAlign="center" p={4}>
            <Heading as="h1" size="xl" my={8}>
                What We Do
            </Heading>

            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start">
                <Stack flex={1} p={4} spacing={4}>
                    <Image src={DesignServices} alt="Design Services" objectFit="cover"/>
                    <Heading as="h2" size="lg">
                        Design Services
                    </Heading>
                    <Text>
                        Working in partnership with Brian Hoolahan Architect, we offer a full design service from concept to completion. Drawing on 30 years of industry experience in the local area, we work closely with our clients to tailor the design to suit their individual requirements.
                    </Text>
                    <Text>
                        Having our design office in-house enables us to value engineer the design throughout all stages of the project without complication. For more information, please visit our design office website via the link below:
                    </Text>
                    <Button as="a" href="http://www.hoolahanarchitect.co.uk/" target="_blank" rel="noopener noreferrer" colorScheme="teal">
                        Brian Hoolahan Architect
                    </Button>
                </Stack>

                <Stack flex={1} p={4} spacing={4}>
                    <Image src={BuildServices} alt="Build Services" objectFit="cover" />
                    <Heading as="h2" size="lg">
                        Building Services
                    </Heading>
                    <Text>
                        We offer a construction management service capable of delivering complex designs to the highest standards. Over the years, we have developed a high-quality supply chain of trusted sub-contractors/suppliers.
                    </Text>
                    <Text>
                        <b>Site Management</b> - We provide site management/supervision throughout the build, ensuring optimised coordination of labour, plant, and materials.
                    </Text>
                    <Text>
                        <b>Package Management</b> - We break the project down into key packages which are tendered for by our suppliers. Once a package has been agreed, we administer the contract and ensure quality, safety, budget, and program targets are met.
                    </Text>
                    <Text>
                        <b>Quality Management</b> - We ensure the highest quality standards are met through clear communication and close Cost Management - Working to an agreed budget/schedule of costs, we provide continuous cost reporting for our clients, working on an 'open-book' basis.
                    </Text>
                    <Text>
                        <b>Program Management</b> - Actively managing the construction program through our software, we are able to streamline the build process and deliver to tight deadlines.
                    </Text>
                    <Text>
                        <b>Health Safety & Welfare</b> - People are at the core of what we do and we make it an absolute priority to keep them safe. We run a fully CDM compliant service, operating as the principal contractor.
                    </Text>
                </Stack>
            </Flex>

            <Box my={8}>
                <Text>
                    <b>Book a consultation</b>
                </Text>
                <Text>If you would like to book a consultation or have any questions about what we can do for you, please get in touch with us.</Text>
                <Button as={Link} to="/contact" colorScheme="teal" mt={4}>
                    Contact Us
                </Button>
            </Box>
        </Box>
    );
};

export default Services;
