import { Link, Button, chakra, Heading, Stack, Text, Box, Flex } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function ContactMe({ contactMe }) {
    const isLargerThan800 = useMediaQuery(800)

    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            w="100%"
            spacing={{ base: 6, md: 10 }}
            px={{ base: 4, md: 0 }}
        >
            <SlideUpWhenVisible threshold={0.1}>
                <Flex direction="column" align="center" width="100%">
                    <Text
                        textTransform="uppercase"
                        fontSize={{ base: "xs", md: "sm" }}
                        letterSpacing="wider"
                        color="button1"
                        fontWeight="medium"
                        mb={2}
                    >
                        Contact Information
                    </Text>
                    <Heading
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                        textAlign="center"
                        letterSpacing="tight"
                        lineHeight="1.2"
                    >
                        Let's Work <chakra.span color="button1">Together</chakra.span>
                    </Heading>
                </Flex>
            </SlideUpWhenVisible>

            <SlideUpWhenVisible threshold={0.1}>
                <Box maxW="650px" textAlign="center" width="100%">
                    <Text
                        color="textSecondary"
                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                        lineHeight="tall"
                        px={{ base: 2, md: 0 }}
                    >
                        {contactMe[0].fields.title}{' '}
                        <chakra.span
                            color="button1"
                            fontWeight="medium"
                            display={{ base: 'block', md: 'inline' }}
                        >
                            {contactMe[0].fields.highlightText}
                        </chakra.span>
                        .
                    </Text>
                    <Text
                        color="gray.400"
                        fontSize={{ base: "xs", sm: "sm", md: "md" }}
                        mt={2}
                        px={{ base: 2, md: 0 }}
                    >
                        {contactMe[0].fields.description}
                    </Text>
                </Box>
            </SlideUpWhenVisible>

            <SlideUpWhenVisible threshold={0.1}>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={{ base: 3, md: 4 }}
                    mt={{ base: 1, md: 2 }}
                    width={{ base: "100%", sm: "auto" }}
                    align="center"
                >
                    <Link
                        href="https://linkedin.com/in/syedasif007"
                        isExternal
                        onClick={() => handleClick('contact_linkedin')}
                        _hover={{ textDecoration: "none" }}
                        width={{ base: "100%", sm: "auto" }}
                    >
                        <Button
                            pos="static"
                            color="white"
                            bg="rgba(60, 207, 145, 0.05)"
                            borderWidth="1px"
                            borderColor="button1"
                            leftIcon={<FaLinkedin fill="#3CCF91" />}
                            size={isLargerThan800 ? 'md' : 'sm'}
                            _hover={{
                                bg: "button1",
                                color: "black"
                            }}
                            transition="all 0.3s ease"
                            width={{ base: "100%", sm: "auto" }}
                        >
                            LinkedIn
                        </Button>
                    </Link>
                    <Link
                        href="mailto:asif.shah9091@gmail.com"
                        isExternal
                        onClick={() => handleClick('contact_email')}
                        _hover={{ textDecoration: "none" }}
                        width={{ base: "100%", sm: "auto" }}
                    >
                        <Button
                            pos="static"
                            color="white"
                            bg="rgba(60, 207, 145, 0.05)"
                            borderWidth="1px"
                            borderColor="button1"
                            leftIcon={<FaEnvelope fill="#3CCF91" />}
                            size={isLargerThan800 ? 'md' : 'sm'}
                            _hover={{
                                bg: "button1",
                                color: "black"
                            }}
                            transition="all 0.3s ease"
                            width={{ base: "100%", sm: "auto" }}
                        >
                            Email
                        </Button>
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/16qXtsur0OhXQogKgr-knT3ALCmXC5OQ3/view?usp=sharing"
                        isExternal
                        onClick={() => handleClick('contact_resume')}
                        _hover={{ textDecoration: "none" }}
                        width={{ base: "100%", sm: "auto" }}
                    >
                        <Button
                            pos="static"
                            color="white"
                            bg="rgba(60, 207, 145, 0.05)"
                            borderWidth="1px"
                            borderColor="button1"
                            leftIcon={<FaFileAlt fill="#3CCF91" />}
                            size={isLargerThan800 ? 'md' : 'sm'}
                            _hover={{
                                bg: "button1",
                                color: "black"
                            }}
                            transition="all 0.3s ease"
                            width={{ base: "100%", sm: "auto" }}
                        >
                            Resume
                        </Button>
                    </Link>
                </Stack>
            </SlideUpWhenVisible>
        </Stack>
    )
}