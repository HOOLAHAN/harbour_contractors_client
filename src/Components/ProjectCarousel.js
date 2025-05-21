// src/Components/ProjectCarousel.jsx

import { Box, Image, IconButton, useMediaQuery, Center, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState, useEffect, useCallback } from 'react';

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!images || images.length === 0) return null;

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <Box my={6} maxW="90vw" mx="auto">
      <Flex
        justify="center"
        align="center"
        gap={isMobile ? 0 : 6}
        position="relative"
        overflow="hidden"
      >
        {!isMobile && (
          <Box flexShrink={0} opacity={0.6} transform="scale(0.6)">
            <Image
              src={images[prevIndex]}
              alt="Previous image"
              maxH="50vh"
              borderRadius="md"
              objectFit="contain"
            />
          </Box>
        )}

        <Box flexShrink={0}>
          <Image
            src={images[currentIndex]}
            alt="Current image"
            maxH="60vh"
            borderRadius="md"
            objectFit="contain"
          />
        </Box>

        {!isMobile && (
          <Box flexShrink={0} opacity={0.6} transform="scale(0.6)">
            <Image
              src={images[nextIndex]}
              alt="Next image"
              maxH="50vh"
              borderRadius="md"
              objectFit="contain"
            />
          </Box>
        )}
      </Flex>

      {images.length > 1 && (
        <Center mt={4}>
          <Flex gap={4}>
            <IconButton
              icon={<ChevronLeftIcon boxSize={6} />}
              onClick={prevSlide}
              bg="#204775"
              color="white"
              borderRadius="full"
              aria-label="Previous Slide"
              _hover={{ bg: '#16395b' }}
              _active={{ bg: '#122f4b', transform: 'scale(0.95)' }}
            />
            <IconButton
              icon={<ChevronRightIcon boxSize={6} />}
              onClick={nextSlide}
              bg="#204775"
              color="white"
              borderRadius="full"
              aria-label="Next Slide"
              _hover={{ bg: '#16395b' }}
              _active={{ bg: '#122f4b', transform: 'scale(0.95)' }}
            />
          </Flex>
        </Center>
      )}
    </Box>
  );
};

export default ProjectCarousel;
