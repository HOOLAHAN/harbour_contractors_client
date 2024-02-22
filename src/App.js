import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Projects from './Pages/Projects';

import { Box, Grid } from '@chakra-ui/react';
import { PreloadImageProvider } from './Context/PreloadImageContext';

function App() {
    return (
        <PreloadImageProvider>
            <Box textAlign="center" fontSize="xl">
                <Navbar />
                <Grid minH="100vh">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </Grid>
                <Footer />
            </Box>
        </PreloadImageProvider>
    );
}

export default App;
