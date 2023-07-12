import { Box, Heading, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
    return (
        <Box textAlign="center" p={4}>
            <Heading as="h1" size="xl" my={8}>
                Our Projects
            </Heading>

            <Box my={8}>
                <Text as="h2" size="lg">
                    Trippets - Construction Phase - November 2020 - May 2022
                </Text>
                <Carousel>
                    <div>
                        <img src="image1.jpg" alt="Project 1" />
                        <p className="legend">Project 1</p>
                    </div>
                    <div>
                        <img src="image2.jpg" alt="Project 2" />
                        <p className="legend">Project 2</p>
                    </div>
                    {/* Add more images as needed */}
                </Carousel>
            </Box>

            <Box my={8}>
                <Text as="h2" size="lg">
                    Java Sound - Construction Phase - September 2021 - December 2022
                </Text>
                <Carousel>
                    <div>
                        <img src="image3.jpg" alt="Project 3" />
                        <p className="legend">Project 3</p>
                    </div>
                    <div>
                        <img src="image4.jpg" alt="Project 4" />
                        <p className="legend">Project 4</p>
                    </div>
                    {/* Add more images as needed */}
                </Carousel>
            </Box>
        </Box>
    );
};

export default Projects;
