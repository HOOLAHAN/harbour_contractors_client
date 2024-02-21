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
    useColorMode,
} from '@chakra-ui/react';

import HC_Logo_SVG from '../Images/HC_Logo_SVG.svg';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { colorMode } = useColorMode();

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const getNavbarColor = () => {
        return colorMode === 'dark' ? 'gray.900' : 'white';
    };

    const getTextColor = () => {
        return colorMode === 'dark' ? 'white' : '#184776';
    };

    return (
        <>
            <Box
                bg={getNavbarColor()}
                py={4}
                px={6}
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

                    <Flex alignItems="center">
                        <Text
                            as="button"
                            fontSize="xl"
                            fontWeight="bold"
                            color={getTextColor()}
                            display="block"
                            mr={4}
                            onClick={handleDrawerToggle}
                        >
                            Menu
                        </Text>
                        <ColorModeSwitcher />
                    </Flex>
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
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default Navbar;
