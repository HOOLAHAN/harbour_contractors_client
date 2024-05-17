// fetchImageUrls.js

export const fetchImageUrls = async (projectName) => {
  try {
    const url = `${process.env.REACT_APP_API_GATEWAY_URL}/listProjectImages/${encodeURIComponent(projectName)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image URLs: ${response.statusText}`);
    }
    const imageUrls = await response.json();
    return imageUrls;
  } catch (error) {
    console.error('Error fetching image URLs:', error);
    return [];
  }
};
