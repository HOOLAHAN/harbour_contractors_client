// src/Pages/Projects.jsx

import { useContext } from 'react';
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PreloadImageContext from '../Context/PreloadImageContext';
import ImageWithSkeleton from '../Components/ImageWithSkeleton';

const Projects = () => {
  const { colorMode } = useColorMode();
  const { projectImages } = useContext(PreloadImageContext);
  const textColor = colorMode === 'dark' ? 'white' : '#184776';

  const renderProjectCarousel = (projectName, label) => {
    const images = projectImages[projectName] || [];

    return (
      <Box my={8} width="100%" maxWidth="90vw" overflowX="auto">
        <Text as="h2" size="md" color={textColor} pb="20px">
          {label}
        </Text>
        <Carousel>
          {images.map((url, index) => (
            <div key={index}>
              <ImageWithSkeleton
                src={url}
                alt={`${projectName} ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    );
  };

  return (
    <center>
      <Box textAlign="center" p={4} mt="70px" width="90%">
        <Heading as="h1" size="xl" my={8} color={textColor}>
          Our Projects
        </Heading>
        {renderProjectCarousel('Trippets', 'Trippets - Construction Phase - Nov 2020 to May 2022')}
        {renderProjectCarousel('Java Sound', 'Java Sound - Construction Phase - Sept 2021 to Dec 2022')}
      </Box>
    </center>
  );
};

export default Projects;
