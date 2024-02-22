import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const renderCarouselItems = (prefix, count) => {
  const carouselItems = [];
  for (let i = 1; i <= count; i++) {
    const imageName = `${prefix} ${i}.png`;
    const imageUrl = `https://harbourcontractorsimages.s3.eu-west-2.amazonaws.com/${encodeURIComponent(imageName)}`;
    carouselItems.push(
      <div key={i}>
        <LazyLoadImage
          src={imageUrl}
          alt={`Project ${i}`}
          effect="blur"
        />
      </div>
    );
  }
  return carouselItems;
};