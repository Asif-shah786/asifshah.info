import {
    Link,
    Text,
    Stack,
    Heading,
    Box,
    Button,
    SlideFade,
    Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga4'

export default function Introduction({ introduction }) {
    const isLargerThan800 = useMediaQuery(800)
    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    return (
        <Stack
            alignItems="flex-start"
            justifyContent="flex-start"
            w="100%"
            spacing={{ base: 8, md: 10 }}
        >
            <SlideFade
                direction="top"
                transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                in={true}
            >
                <Box pos="relative">
                    <Image
                        pos="absolute"
                        zIndex={0}
                        top={{ base: '0', md: '-15' }}
                        left={{ base: '-4', md: '-10' }}
                        w={{ base: '70px', md: '150px' }}
                        alt=""
                        filter="invert(0.1)"
                        src="https://svgsilh.com/svg/26432.svg"
                    ></Image>
                    <Text
                        pos="relative"
                        zIndex={1}
                        color="button1"
                        fontSize="display2"
                        fontWeight="medium"
                    >
                        Hey there!, I'm-
                    </Text>
                </Box>
                <Heading
                    pos="relative"
                    zIndex={1}
                    color="displayColor"
                    fontSize="display"
                    lineHeight={'95%'}
                    letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
                >
                    Asif Shah.
                </Heading>
            </SlideFade>

            <SlideFade
                direction="top"
                transition={{ enter: { duration: 0.4, delay: 0.8 } }}
                in={true}
            >
                <Heading
                    color="textSecondary"
                    fontSize="display2"
                    fontWeight="medium"
                    letterSpacing="-1.6px"
                    whiteSpace="pre-wrap"
                >
                    Mobile App Developer & {isLargerThan800
                        ? 'Data Science\nEnthusiast.'
                        : 'Data Science Enthusiast.'}
                </Heading>
            </SlideFade>

            <SlideFade
                direction="top"
                transition={{ enter: { duration: 0.4, delay: 0.9 } }}
                in={true}
            >
                <Text color="textSecondary" fontSize="display3">
                    {introduction[0].fields.emoji} {introduction[0].fields.description}
                    <br />
                    <Stack isInline spacing={1}>
                        <Box>{introduction[1].fields.emoji}</Box>
                        <Box>
                            {introduction[1].fields.description}{' '}
                            {introduction[1].fields.companyUrl ? (
                                <Link
                                    href={introduction[1].fields.companyUrl}
                                    isExternal
                                    onClick={() => handleClick('Introduction_companyUrl')}
                                    rel="noreferrer"
                                >
                                    {introduction[1].fields.company}
                                </Link>
                            ) : (
                                <Box as="span" color="button1">
                                    {introduction[1].fields.company}
                                </Box>
                            )}
                        </Box>
                    </Stack>
                </Text>
            </SlideFade>
            <SlideFade
                direction="top"
                transition={{ enter: { duration: 0.4, delay: 1.0 } }}
                in={true}
            >
                <Stack isInline spacing={4}>
                    <Link
                        href="https://github.com/Asif-Shah786"
                        isExternal
                        _hover={{ textDecoration: "none" }}
                    >
                        <Button
                            pos="static"
                            color="white"
                            bg="rgba(60, 207, 145, 0.05)"
                            borderWidth="1px"
                            borderColor="button1"
                            leftIcon={<FaGithub fill="#3CCF91" />}
                            onClick={() => handleClick('introduction_github')}
                            size={isLargerThan800 ? 'md' : 'sm'}
                            _hover={{
                                bg: "button1",
                                color: "black"
                            }}
                            transition="all 0.3s ease"
                        >
                            Github
                        </Button>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/syedasif007"
                        isExternal
                        _hover={{ textDecoration: "none" }}
                    >
                        <Button
                            pos="static"
                            color="white"
                            bg="rgba(60, 207, 145, 0.05)"
                            borderWidth="1px"
                            borderColor="button1"
                            leftIcon={<FaLinkedin fill="#3CCF91" />}
                            onClick={() => handleClick('introduction_linkedin')}
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
                        _hover={{ textDecoration: "none" }}
                    >
                        <Button
                            pos="static"
                            color="white"
                            bg="rgba(60, 207, 145, 0.05)"
                            borderWidth="1px"
                            borderColor="button1"
                            leftIcon={<FaEnvelope fill="#3CCF91" />}
                            onClick={() => handleClick('introduction_email')}
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
                </Stack>
            </SlideFade>
        </Stack>
    )
}