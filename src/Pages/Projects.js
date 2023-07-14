import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { renderCarouselItems } from '../Functions/carouselUtils';

const Projects = () => {
    const { colorMode } = useColorMode();
    const textColor = colorMode === 'dark' ? 'white' : '#184776';

    return (
        <center>
            <Box textAlign="center" p={4} mt="70px" width="80%">
                <Heading as="h1" size="xl" my={8} color={textColor}>
                    Our Projects
                </Heading>

                <Box my={8} width="100%">
                    <Text as="h2" size="md" color={textColor} pb="20px">
                        Trippets - Construction Phase - November 2020 - May 2022
                    </Text>
                    <Carousel>{renderCarouselItems('Trippets', 15)}</Carousel>
                </Box>

                <Box my={8} width="100%">
                    <Text as="h2" size="md" color={textColor} pb="20px">
                        Java Sound - Construction Phase - September 2021 - December 2022
                    </Text>
                    <Carousel>{renderCarouselItems('Java Sound', 2)}</Carousel>
                </Box>

                <style jsx>{`
                    .carousel-image {
                        max-height: 60vh;
                        max-width: 100%;
                        height: auto;
                        object-fit: contain;
                    }

                    @media screen and (min-width: 768px) {
                        .carousel-image {
                            max-width: 60%;
                        }
                    }

                    @media screen and (max-width: 480px) {
                        .carousel-image {
                            max-width: 90vw;
                        }
                    }
                `}</style>
            </Box>
        </center>
    );
};

export default Projects;
