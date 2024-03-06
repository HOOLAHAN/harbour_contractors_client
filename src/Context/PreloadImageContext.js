// PreloadImageContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { fetchImageUrls } from '../functions/fetchImageUrls';

const PreloadImageContext = createContext();

export const PreloadImageProvider = ({ children }) => {
  const [preloadedImages, setPreloadedImages] = useState({});

  // Memoizing preloadImages function
  const preloadImages = useCallback(async () => {
    const projectNames = ['Trippets', 'Java Sound'];
    
    for (const projectName of projectNames) {    
      let imageUrls = await fetchImageUrls(projectName);

      // Sort the image URLs by extracting the numeric part of the filename and comparing
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
  }, []); // Dependencies array is empty because preloadImages does not depend on any state or props

  useEffect(() => {
    preloadImages();
  }, [preloadImages]); // Adding preloadImages to the dependency array

  return (
    <PreloadImageContext.Provider value={{ preloadedImages }}>
      {children}
    </PreloadImageContext.Provider>
  );
};

export default PreloadImageContext;
