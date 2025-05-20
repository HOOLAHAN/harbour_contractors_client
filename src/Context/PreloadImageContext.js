// src/Context/PreloadImageContext.js

import { createContext, useState, useEffect, useCallback } from 'react';
import { fetchImageUrls } from '../functions/fetchImageUrls';

const PreloadImageContext = createContext();

export const PreloadImageProvider = ({ children }) => {
  const [projectImages, setProjectImages] = useState({});

  const preloadImages = useCallback(async () => {
    const projectNames = ['Trippets', 'Java Sound'];
    
    for (const projectName of projectNames) {
      let imageUrls = await fetchImageUrls(projectName);

      imageUrls = imageUrls.sort((a, b) => {
        const extractNumber = (url) => {
          const match = url.match(/image(\d+)/);
          return match ? parseInt(match[1], 10) : 0;
        };
        return extractNumber(a) - extractNumber(b);
      });

      setProjectImages((prev) => ({
        ...prev,
        [projectName]: imageUrls,
      }));

      // Optional: preload actual image files
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return (
    <PreloadImageContext.Provider value={{ projectImages }}>
      {children}
    </PreloadImageContext.Provider>
  );
};

export default PreloadImageContext;
