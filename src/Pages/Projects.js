import React, { useContext } from 'react';
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PreloadImageContext from '../Context/PreloadImageContext';

const Projects = () => {
    const { colorMode } = useColorMode();
    const { preloadedImages } = useContext(PreloadImageContext);
    const textColor = colorMode === 'dark' ? 'white' : '#184776';

    const generateCarouselItems = (projectName) => {

        // Filter keys to those that match the project name and are preloaded
        const imageKeys = Object.keys(preloadedImages)
            .filter(key => key.startsWith(`https://harbourcontractorsimages.s3.eu-west-2.amazonaws.com/${encodeURIComponent(projectName)}`) && preloadedImages[key] === true);

        // Map over the filtered keys to create carousel items
        return imageKeys.map((imageKey, index) => {
            return (
                <div key={index}>
                    <img src={imageKey} alt={`${projectName} ${index + 1}`} className="carousel-image" />
                </div>
            );
        });
    };
    
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
                    <Carousel>{generateCarouselItems('Trippets')}</Carousel>
                </Box>

                <Box my={8} width="100%" maxWidth="90vw" overflowX="auto">
                    <Text as="h2" size="md" color={textColor} pb="20px">
                        Java Sound - Construction Phase - September 2021 - December 2022
                    </Text>
                    <Carousel>{generateCarouselItems('Java Sound')}</Carousel>
                </Box>

                <style>{`
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
