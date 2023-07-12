import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box p={4} bg="gray.200" textAlign="center">
            <Text fontSize="sm" fontWeight="bold" mb={2}>
                Harbour Contractors Ltd
            </Text>
            <Text fontSize="sm" mb={2}>
                Willow Tree, Smugglers Lane, CHICHESTER, West Sussex, PO18 8QW, United Kingdom
            </Text>
            <Text fontSize="sm" mb={2}>01243 573122</Text>
            <Text fontSize="sm">&copy; {currentYear} Harbour Contractors LTD - All Rights Reserved.</Text>
        </Box>
    );
};

export default Footer;
