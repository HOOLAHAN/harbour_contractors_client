import { Box, Center, IconButton, Image } from '@chakra-ui/react';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCarousel = ({ images }) => {
  const carouselRef = useRef(null);

  return (
    <Box my={6} maxW="90vw" mx="auto">
      {/* Image Carousel with Previews */}
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
        centerMode
        centerSlidePercentage={60} // Main image takes 60%, previews take 20% on either side
        dynamicHeight={false}
      >
        {images.map((src, index) => (
          <Box key={index} display="flex" justifyContent="center">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              objectFit="contain"
              maxH="60vh"
              height="60vh"
              width="auto"
              borderRadius="md"
              mx="auto"
            />
          </Box>
        ))}
      </Carousel>

      {/* Custom Arrow Controls Below */}
      {images.length > 1 && (
        <Center mt={4}>
          <Box display="flex" gap={8}>
            <IconButton
              icon={<ChevronLeftIcon boxSize={6} />}
              onClick={() =>
                carouselRef.current?.moveTo(
                  (carouselRef.current.state.selectedItem - 1 + images.length) % images.length
                )
              }
              bg="#204775"
              color="white"
              borderRadius="full"
              aria-label="Previous Slide"
              _hover={{ bg: '#16395b' }}
              _active={{ bg: '#122f4b', transform: 'scale(0.95)' }}
            />
            <IconButton
              icon={<ChevronRightIcon boxSize={6} />}
              onClick={() =>
                carouselRef.current?.moveTo(
                  (carouselRef.current.state.selectedItem + 1) % images.length
                )
              }
              bg="#204775"
              color="white"
              borderRadius="full"
              aria-label="Next Slide"
              _hover={{ bg: '#16395b' }}
              _active={{ bg: '#122f4b', transform: 'scale(0.95)' }}
            />
          </Box>
        </Center>
      )}
    </Box>
  );
};

export default ProjectCarousel;
