import { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Link,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    Image,
} from '@chakra-ui/react';

import HC_Logo_SVG from "../Images/HC_Logo_SVG.svg";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <Box
                bg="white"
                py={4}
                px={6}
                color="white"
                borderBottom="1px solid"
                borderColor="gray.200"
                boxShadow="md"
                position="fixed"
                top={0}
                right={0}
                left={0}
                zIndex="999"
            >
                <Flex alignItems="center" justifyContent="space-between">
                    <Link href="/" fontWeight="bold" fontSize="xl">
                        <Image src={HC_Logo_SVG} alt="Logo" maxWidth="150px" />
                    </Link>

                    <Text
                        as="button"
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.800"
                        display={{ base: 'none', md: 'block' }}
                        onClick={handleDrawerToggle}
                    >
                        Menu
                    </Text>
                </Flex>
            </Box>

            <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerToggle}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={4}>
                                <Link href="/">Home</Link>
                                <Link href="/about">About us</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/projects">Projects</Link>
                                <Link href="/contact">Contact us</Link>
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default Navbar;
