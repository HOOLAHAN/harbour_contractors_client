import { useState } from 'react';
import { Box, Heading, Input, Textarea, Button, useColorMode } from '@chakra-ui/react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
            await axios.post('/send-message', formData);
            console.log('Message sent successfully');
            // Add success message or redirect to a thank you page
        } catch (error) {
            console.log('Error sending message:', error);
            // Handle error condition
        }
    };

    const sendTwilioMessage = async () => {
        try {
            await axios.post('/send-twilio-message');
            console.log('Twilio message sent successfully');
            // Add success message or handle the response as needed
        } catch (error) {
            console.log('Error sending Twilio message:', error);
            // Handle error condition
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
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
                    name="message"
                    placeholder="Your Message"
                    mb={4}
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button mt={2} type="submit" colorScheme="teal" onClick={sendTwilioMessage}>
                    Send
                </Button>
            </form>
            </Box>
        </Box>
    );
};

export default ContactUs;
