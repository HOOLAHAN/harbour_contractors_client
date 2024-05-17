import React, { createContext, useState, useEffect, useCallback } from 'react';
import { fetchImageUrls } from '../functions/fetchImageUrls';

const PreloadImageContext = createContext();

export const PreloadImageProvider = ({ children }) => {
  const [preloadedImages, setPreloadedImages] = useState({});

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
      
      imageUrls.forEach((imageUrl, index) => {
        const img = new Image();
        
        img.onload = () => {
          setPreloadedImages((prev) => ({
            ...prev,
            [imageUrl]: true,
          }));
        };
        
        img.onerror = (error) => {
          console.error(`Error loading image: ${imageUrl}`, error);
        };
        
        img.src = imageUrl;
      });
    }
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return (
    <PreloadImageContext.Provider value={{ preloadedImages }}>
      {children}
    </PreloadImageContext.Provider>
  );
};

export default PreloadImageContext;
