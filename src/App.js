import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import ContactUs from './Pages/ContactUs';

import { Box, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Navbar />
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Grid>
        </Box>
    );
}

export default App;
