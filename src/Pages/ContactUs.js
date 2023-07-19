import { useState } from 'react';
import { Box, Heading, Input, Textarea, Button, useColorMode, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
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
      // Show success message with Popover
    } catch (error) {
      console.log('Error sending message:', error);
      // Handle error condition and display an error message to the user
    }
  };

  const handleOkButtonClick = () => {
    // Redirect the user to the Home page
    window.location.href = '/'; 
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
          <Popover trigger="click" placement="top">
            <PopoverTrigger>
              <Button type="submit" mt={2} colorScheme="teal">
                Send
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody textAlign="center">
                <Heading as="h3" size="md" mb={2}>
                  Message sent successfully!
                </Heading>
                <Button colorScheme="teal" onClick={handleOkButtonClick}>
                  OK
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
