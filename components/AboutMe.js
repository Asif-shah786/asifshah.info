import {
    SimpleGrid,
    Text,
    Stack,
    Heading,
    Image,
    Flex,
    Box,
    chakra,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
    const isLargerThan800 = useMediaQuery(800)
    const handleHover = (event) => {
        ReactGA.event({
            category: 'hover',
            action: event,
        })
    }
    const MoreInfo = ({ text, content }) => {
        return (
            <>
                {' '}
                {isLargerThan800 ? (
                    <Popover isLazy placement="right" trigger="hover">
                        <PopoverTrigger>
                            <chakra.span
                                color="button1"
                                cursor="help"
                                onMouseOver={() => handleHover(`about_${text}`)}
                            >
                                {text}
                            </chakra.span>
                        </PopoverTrigger>
                        <PopoverContent color="white" bg="secondary" borderColor="button1">
                            <PopoverArrow bg="button1" />
                            <PopoverBody color="textPrimary" fontSize="sm">
                                {content}
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <Text as="span" color="button1">
                        {text}
                    </Text>
                )}{' '}
            </>
        )
    }

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <SlideUpWhenVisible>
                    <Stack spacing={4}>
                        <Heading fontFamily="Ubuntu" fontSize="2xl">
                            ⚡ About Me
                        </Heading>
                        <Text
                            color="textSecondary"
                            fontSize={{ base: '14px', md: '16px' }}
                            whiteSpace="pre-line"
                        >
                            Hey! I'm Asif Shah, a Flutter developer and Data Science master's student at the University of Salford.
                            My coding journey started with mobile app development, and I've expanded into data engineering to enhance my skill set. <br />
                            <br /> I began exploring programming by building mobile apps with Flutter and gradually expanded my expertise to include backend development with FastAPI.
                            Fast-forward to today, I work with various technologies, specializing in Flutter for mobile and web development, deploying machine learning models, and integrating them with web apps. <br />
                            <br />
                            As a freelancer on Upwork, I've successfully delivered mobile app projects while continuously improving my skills.
                            Now, I'm focused on building intelligent applications, enhancing my data engineering knowledge, and exploring opportunities in{' '}
                            <MoreInfo
                                content="Building high-quality apps with Flutter for both mobile and web platforms."
                                text="Web & Mobile Development,"
                            />
                            <MoreInfo
                                content="Leveraging backend technologies like FastAPI to integrate machine learning models and build efficient systems."
                                text="Backend Development,"
                            />
                            and
                            <MoreInfo
                                content="Applying data engineering techniques to build robust data pipelines and make predictions using machine learning models."
                                text="Data Engineering."
                            />
                            <br />
                            <br />
                            When I'm not coding, I'm at the gym, learning something new, or working on my side projects to sharpen my skills. ⚡
                        </Text>
                    </Stack>
                </SlideUpWhenVisible>
                <SlideUpWhenVisible>
                    <Flex align="center" justify="center">
                        <Box
                            pos="relative"
                            maxW={{ base: '300px', lg: '350px' }}
                            maxH={{ base: '300px', lg: '350px' }}
                        >
                            <Image
                                pos="absolute"
                                zIndex={3}
                                top="0px"
                                right={{ base: '-32px', lg: '-64px' }}
                                w={{ base: '100px', lg: '150px' }}
                                alt=""
                                filter="invert(0.1)"
                                src="https://svgsilh.com/svg/26432.svg"
                            />
                            <Image
                                w={{ base: '300px', lg: '350px' }}
                                h={{ base: '300px', lg: '350px' }}
                                objectFit="cover"
                                borderRadius="50%"
                                alt="Asif Shah"
                                src="https://i.imgur.com/Rx7N5X6.jpg"
                            />
                        </Box>
                    </Flex>
                </SlideUpWhenVisible>
            </SimpleGrid>
        </>
    )
}