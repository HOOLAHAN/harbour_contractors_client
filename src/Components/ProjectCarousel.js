import { Box, Center, IconButton, Image } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCarousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [carouselKey, setCarouselKey] = useState(0); // for forced rerender

  // CSS injection for scaling previews
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .carousel .slide {
        padding: 0 6px;
        transition: transform 0.3s ease, opacity 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
      }

      .carousel .slide img {
        transition: transform 0.3s ease, opacity 0.3s ease;
        max-height: 60vh;
        width: auto;
        height: auto;
      }

      .carousel .slide.selected img {
        transform: scale(1);
        opacity: 1;
      }

      .carousel .slide:not(.selected) img {
        transform: scale(0.65);
        opacity: 0.6;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Trigger layout fix after mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCarouselKey((prev) => prev + 1);
      setLoaded(true);
    }, 50); // delay can be adjusted
    return () => clearTimeout(timeout);
  }, [images]);

  if (!loaded || !images.length) return null;

  return (
    <Box my={6} maxW="90vw" mx="auto">
      <Carousel
        key={carouselKey}
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
        centerMode
        centerSlidePercentage={70}
        onClickItem={() => {}}
      >
        {images.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              objectFit="contain"
              pointerEvents="none"
              borderRadius="md"
            />
          </Box>
        ))}
      </Carousel>

      {images.length > 1 && (
        <Center mt={4}>
          <Box display="flex" gap={6}>
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
