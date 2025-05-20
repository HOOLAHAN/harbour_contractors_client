// src/Pages/Projects.jsx

import { useContext } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorMode,
  VStack,
  Center,
} from '@chakra-ui/react';
import PreloadImageContext from '../Context/PreloadImageContext';
import ProjectCarousel from '../Components/ProjectCarousel';

const projectData = [
  {
    name: 'Trippets',
    label: 'Trippets - Construction Phase - Nov 2020 to May 2022',
  },
  {
    name: 'Java Sound',
    label: 'Java Sound - Construction Phase - Sept 2021 to Dec 2022',
  },
];

const Projects = () => {
  const { colorMode } = useColorMode();
  const { projectImages } = useContext(PreloadImageContext);
  const textColor = colorMode === 'dark' ? 'white' : '#184776';

  return (
    <Center>
      <Box textAlign="center" p={4} mt="70px" width="90%">
        <Heading as="h1" size="xl" my={8} color={textColor}>
          Our Projects
        </Heading>

        <VStack spacing={12} align="stretch">
          {projectData.map(({ name, label }) => (
            <Box key={name}>
              <Text fontSize="xl" fontWeight="semibold" color={textColor} mb={4}>
                {label}
              </Text>
              <ProjectCarousel
                title={label}
                images={projectImages[name] || []}
              />
            </Box>
          ))}
        </VStack>
      </Box>
    </Center>
  );
};

export default Projects;
