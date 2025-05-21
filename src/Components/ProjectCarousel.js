import {
  Box,
  Image,
  IconButton,
  useMediaQuery,
  Center,
  Flex,
} from '@chakra-ui/react';
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
        position="relative"
        gap={isMobile ? 0 : 4}
        minH="60vh"
      >
        {/* Previous Image */}
        {!isMobile && (
          <Flex
            justify="center"
            align="center"
            height="60vh"
            width="20%"
            opacity={0.5}
          >
            <Image
              src={images[prevIndex]}
              alt="Previous"
              maxH="60vh"
              maxW="100%"
              objectFit="contain"
              borderRadius="md"
            />
          </Flex>
        )}

        {/* Main Image */}
        <Flex
          justify="center"
          align="center"
          height="60vh"
          width={isMobile ? '100%' : '60%'}
        >
          <Image
            src={images[currentIndex]}
            alt="Main"
            maxH="60vh"
            maxW="100%"
            objectFit="contain"
            borderRadius="md"
          />
        </Flex>

        {/* Next Image */}
        {!isMobile && (
          <Flex
            justify="center"
            align="center"
            height="60vh"
            width="20%"
            opacity={0.5}
          >
            <Image
              src={images[nextIndex]}
              alt="Next"
              maxH="60vh"
              maxW="100%"
              objectFit="contain"
              borderRadius="md"
            />
          </Flex>
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
