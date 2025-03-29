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
        <Stack alignItems="center" justifyContent="center" w="100%" spacing={10}>
            <SlideUpWhenVisible>
                <Flex direction="column" align="center">
                    <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wider"
                        color="button1"
                        fontWeight="medium"
                        mb={2}
                    >
                        Contact Information
                    </Text>
                    <Heading
                        fontSize={{ base: '4xl', md: '5xl' }}
                        textAlign="center"
                        letterSpacing="tight"
                        lineHeight="1.2"
                    >
                        Let's Work <chakra.span color="button1">Together</chakra.span>
                    </Heading>
                </Flex>
            </SlideUpWhenVisible>

            <SlideUpWhenVisible>
                <Box maxW="650px" textAlign="center">
                    <Text
                        color="textSecondary"
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight="tall"
                    >
                        {contactMe[0].fields.title}{' '}
                        <chakra.span
                            color="button1"
                            fontWeight="medium"
                            display={{ base: 'block', md: 'inline' }}
                        >
                            {' '}
                            {contactMe[0].fields.highlightText}
                        </chakra.span>
                        .
                    </Text>
                    <Text
                        color="gray.400"
                        fontSize={{ base: "sm", md: "md" }}
                        mt={2}
                    >
                        {contactMe[0].fields.description}
                    </Text>
                </Box>
            </SlideUpWhenVisible>

            <SlideUpWhenVisible>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={4}
                    mt={2}
                >
                    <Link
                        href="https://linkedin.com/in/syedasif007"
                        isExternal
                        onClick={() => handleClick('contact_linkedin')}
                        _hover={{ textDecoration: "none" }}
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
                        >
                            LinkedIn
                        </Button>
                    </Link>
                    <Link
                        href="mailto:asif.shah9091@gmail.com"
                        isExternal
                        onClick={() => handleClick('contact_email')}
                        _hover={{ textDecoration: "none" }}
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
                        >
                            Email
                        </Button>
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/16qXtsur0OhXQogKgr-knT3ALCmXC5OQ3/view?usp=sharing"
                        isExternal
                        onClick={() => handleClick('contact_resume')}
                        _hover={{ textDecoration: "none" }}
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
                        >
                            Resume
                        </Button>
                    </Link>
                </Stack>
            </SlideUpWhenVisible>
        </Stack>
    )
}
