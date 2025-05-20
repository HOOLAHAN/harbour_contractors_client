// src/Components/ProjectCarousel.jsx

import { Box, Image, IconButton, useToken } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ProjectCarousel = ({ images }) => {
  const brandBg = useToken('colors', 'brand.300');
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <Box my={6} maxW="90vw" mx="auto" {...handlers}>
      <Box
        position="relative"
        borderRadius="md"
        overflow="hidden"
        maxH="60vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          objectFit="contain"
          maxH="60vh"
          w="100%"
          transition="opacity 0.4s ease-in-out"
        />

        {/* Left Arrow */}
        <IconButton
          icon={<ChevronLeftIcon />}
          position="absolute"
          top="50%"
          left={2}
          transform="translateY(-50%)"
          borderRadius="full"
          size="sm"
          onClick={prevSlide}
          bg={brandBg}
          color="white"
          _hover={{ bg: 'brand.200' }}
          _active={{ bg: 'brand.100' }}
          aria-label="Previous Slide"
        />

        {/* Right Arrow */}
        <IconButton
          icon={<ChevronRightIcon />}
          position="absolute"
          top="50%"
          right={2}
          transform="translateY(-50%)"
          borderRadius="full"
          size="sm"
          onClick={nextSlide}
          bg={brandBg}
          color="white"
          _hover={{ bg: 'brand.200' }}
          _active={{ bg: 'brand.100' }}
          aria-label="Next Slide"
        />
      </Box>
    </Box>
  );
};

export default ProjectCarousel;
