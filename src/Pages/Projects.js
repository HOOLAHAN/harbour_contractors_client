import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { renderCarouselItems } from '../Functions/carouselUtils';

const Projects = () => {
    const { colorMode } = useColorMode();
    const textColor = colorMode === 'dark' ? 'white' : '#184776';

    return (
        <center>
            <Box textAlign="center" p={4} mt="70px" width="90%">
                <Heading as="h1" size="xl" my={8} color={textColor}>
                    Our Projects
                </Heading>

                <Box my={8} width="100%" maxWidth="90vw" overflowX="auto">
                    <Text as="h2" size="md" color={textColor} pb="20px">
                        Trippets - Construction Phase - November 2020 - May 2022
                    </Text>
                    <Carousel>{renderCarouselItems('Trippets', 15)}</Carousel>
                </Box>

            <Box my={8}>
                <Text as="h2" size="md" color={textColor} pb="20px">
                    Java Sound - Construction Phase - September 2021 - December 2022
                </Text>
                <Carousel>{renderCarouselItems('Java Sound', 18)}</Carousel>
            </Box>

                <style jsx>{`
                    .carousel-image {
                        max-height: 60vh;
                        max-width: 95%;
                        height: auto;
                        object-fit: contain;
                    }
                `}</style>
            </Box>
        </center>
    );
};

export default Projects;
