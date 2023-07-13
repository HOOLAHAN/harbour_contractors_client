import { Box, Heading, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
    const renderCarouselItems = (prefix, count) => {
        const carouselItems = [];
        for (let i = 1; i <= count; i++) {
            const imageUrl = `https://harbourcontractorsimages.s3.eu-west-2.amazonaws.com/${prefix}${i}.png`;
            carouselItems.push(
                <div key={i}>
                    <img src={imageUrl} alt={`Project ${i}`} className="carousel-image" />
                    <p className="legend">{prefix} {i}</p>
                </div>
            );
        }
        return carouselItems;
    };

    return (
        <Box textAlign="center" p={4} mt={{ base: '70px', md: 0 }}>
            <Heading as="h1" size="xl" my={8}>
                Our Projects
            </Heading>

            <Box my={8}>
                <Text as="h2" size="lg">
                    Trippets - Construction Phase - November 2020 - May 2022
                </Text>
                <Carousel>{renderCarouselItems('trippets', 2)}</Carousel>
            </Box>

            <Box my={8}>
                <Text as="h2" size="lg">
                    Java Sound - Construction Phase - September 2021 - December 2022
                </Text>
                <Carousel>{renderCarouselItems('javasound', 2)}</Carousel>
            </Box>

            <style jsx>{`
        .carousel-image {
          max-width: 100%;
          height: auto;
        }

        @media screen and (min-width: 768px) {
          .carousel-image {
            max-width: 60%;
          }
        }
      `}</style>
        </Box>
    );
};

export default Projects;
