import { useState } from 'react';
import { Box, Heading, Input, Textarea, Button, useColorMode } from '@chakra-ui/react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text_message: '',
  });

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const textColor = isDarkMode ? 'white' : '#184776';

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://u1rgvdq1yi.execute-api.eu-west-2.amazonaws.com/sendMessage', {
        name: formData.name,
        email: formData.email,
        text_message: formData.text_message,
      });

      console.log('Message sent successfully');
      // Show success message or redirect to a thank you page
    } catch (error) {
      console.log('Error sending message:', error);
      // Handle error condition and display an error message to the user
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Box maxWidth="500px" mx="auto" p={4} mt="70px">
        <Heading as="h2" size="lg" mb={4} color={textColor}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Your Name"
            mb={4}
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Your Email"
            mb={4}
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            name="text_message"
            placeholder="Your Message"
            mb={4}
            value={formData.text_message}
            onChange={handleChange}
          />
          <Button mt={2} type="submit" colorScheme="teal">
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
