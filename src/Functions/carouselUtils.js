export const renderCarouselItems = (prefix, count) => {
  const carouselItems = [];
  for (let i = 1; i <= count; i++) {
    const imageName = `${prefix} ${i}.png`;
    const imageUrl = `https://harbourcontractorsimages.s3.eu-west-2.amazonaws.com/${encodeURIComponent(
      imageName
    )}`;
    carouselItems.push(
      <div key={i}>
        <img src={imageUrl} alt={`Project ${i}`} className="carousel-image" />
      </div>
    );
  }
  return carouselItems;
};

export default renderCarouselItems;