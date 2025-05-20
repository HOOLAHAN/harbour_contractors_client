// src/Components/ImageWithSkeleton.jsx

import { useState } from 'react';
import { Skeleton } from '@chakra-ui/react';

const ImageWithSkeleton = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Skeleton isLoaded={imageLoaded}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width="100%"
        style={{ maxHeight: '60vh', objectFit: 'contain' }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)} // fallback to avoid infinite loading
      />
    </Skeleton>
  );
};

export default ImageWithSkeleton;
