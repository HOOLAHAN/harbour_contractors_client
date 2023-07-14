import { Box, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { colorMode } = useColorMode();

    const getFooterColor = () => {
        return colorMode === 'dark' ? 'gray.900' : 'white';
    };

    const getTextColor = () => {
        return colorMode === 'dark' ? 'white' : '#184776';
    };

    return (
        <Box p={4} textAlign="center" bg={ getFooterColor() }>
            <Text fontSize="sm" fontWeight="bold" mb={2} color={getTextColor()}>
                Harbour Contractors Ltd
            </Text>
            <Text fontSize="sm" mb={2} color={getTextColor()}>
                Willow Tree, Smugglers Lane, CHICHESTER, West Sussex, PO18 8QW, United Kingdom
            </Text>
            <Text fontSize="sm" mb={2} color={getTextColor()}>01243 573122</Text>
            <Text fontSize="sm" color={getTextColor()}>&copy; {currentYear} Harbour Contractors LTD - All Rights Reserved.</Text>
        </Box>
    );
};

export default Footer;
