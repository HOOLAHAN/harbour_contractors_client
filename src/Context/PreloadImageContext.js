// PreloadImageContext.js
import React, { createContext, useState, useEffect } from 'react';

const PreloadImageContext = createContext();

export const PreloadImageProvider = ({ children }) => {
  const [preloadedImages, setPreloadedImages] = useState({});

  // Function to preload images
  const preloadImages = () => {
    const projectNames = ['Trippets', 'Java Sound'];
    projectNames.forEach((projectName) => {
      let index = 1;
      const loadImage = () => {
        const imageName = `${projectName} ${index}.png`;
        const img = new Image();
        img.onload = () => {
          setPreloadedImages((prev) => ({
            ...prev,
            [`${projectName} ${index}`]: true,
          }));
          index++;
          loadImage();
        };
        img.onerror = () => {
          // Stop loading more images if an error occurs
        };
        img.src = `https://harbourcontractorsimages.s3.eu-west-2.amazonaws.com/${encodeURIComponent(imageName)}`;
      };
      loadImage();
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <PreloadImageContext.Provider value={{ preloadedImages }}>
      {children}
    </PreloadImageContext.Provider>
  );
};

export default PreloadImageContext;
