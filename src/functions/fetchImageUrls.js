// fetchImageUrls.js

// Function to fetch image URLs from the Lambda function
export const fetchImageUrls = async (projectName) => {
  try {
    // Construct the URL for the API endpoint
    const url = `${process.env.REACT_APP_API_GATEWAY_URL}/listProjectImages/${encodeURIComponent(projectName)}`;
    // Fetch the image URLs from the API
    const response = await fetch(url);
    // Check if the fetch request was successful
    if (!response.ok) {
      // If the response was not OK, throw an error
      throw new Error(`Failed to fetch image URLs: ${response.statusText}`);
    }
    // Parse the response body as JSON to get the image URLs
    const imageUrls = await response.json();
    return imageUrls;
  } catch (error) {
    // Log the error to the console
    console.error('Error fetching image URLs:', error);
    return [];
  }
};