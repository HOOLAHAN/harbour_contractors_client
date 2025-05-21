// src/Components/ProjectCarousel.js

import { Box, Center, IconButton, useToken, Image } from '@chakra-ui/react';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCarousel = ({ images }) => {
  const brandBg = useToken('colors', '#204775');
  const carouselRef = useRef(null);

  return (
    <Box my={6} maxW="90vw" mx="auto">
      {/* Image Carousel */}
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        emulateTouch
        swipeable
        autoPlay
        interval={6000}
        showArrows={false}
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
      >
        {images.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              objectFit="contain"
              maxH="60vh"
              w="100%"
              borderRadius="md"
            />
          </Box>
        ))}
      </Carousel>

      {/* Custom Arrow Controls Below */}
      {images.length > 1 && (
        <Center mt={4}>
          <Box display="flex" gap={4}>
            <IconButton
              icon={<ChevronLeftIcon boxSize={6} />}
              onClick={() =>
                carouselRef.current?.moveTo(
                  (carouselRef.current.state.selectedItem - 1 + images.length) % images.length
                )
              }
              bg={brandBg}
              color="white"
              borderRadius="full"
              aria-label="Previous Slide"
              _hover={{ bg: 'brand.200' }}
              _active={{ bg: 'brand.100', transform: 'scale(0.95)' }}
            />
            <IconButton
              icon={<ChevronRightIcon boxSize={6} />}
              onClick={() =>
                carouselRef.current?.moveTo(
                  (carouselRef.current.state.selectedItem + 1) % images.length
                )
              }
              bg={brandBg}
              color="white"
              borderRadius="full"
              aria-label="Next Slide"
              _hover={{ bg: 'brand.200' }}
              _active={{ bg: 'brand.100', transform: 'scale(0.95)' }}
            />
          </Box>
        </Center>
      )}
    </Box>
  );
};

export default ProjectCarousel;
