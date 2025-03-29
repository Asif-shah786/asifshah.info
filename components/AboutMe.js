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
    Link,
    HStack,
    Icon,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'
import { FaMedium } from 'react-icons/fa'

export default function AboutMe() {
    const isLargerThan800 = useMediaQuery(800)
    const handleHover = (event) => {
        ReactGA.event({
            category: 'hover',
            action: event,
        })
    }

    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
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
                    <Stack spacing={5}>
                        <Heading fontFamily="Ubuntu" fontSize="2xl">
                            ⚡ About Me
                        </Heading>
                        <Text
                            color="textSecondary"
                            fontSize={{ base: '14px', md: '16px' }}
                            whiteSpace="pre-line"
                            lineHeight="taller"
                        >
                            A passionate <chakra.span fontWeight="bold" color="button1">Full Stack Mobile App Developer</chakra.span> with a strong background in both software engineering and data science. Currently pursuing my MSc in Data Science at the University of Salford, I have a deep understanding of machine learning, big data tools, and applied statistics, which I apply in creating impactful software solutions.
                            <br /><br />
                            Over the past few years, I have gained hands-on experience in mobile and web app development, successfully completing <chakra.span fontWeight="bold" color="white">25+ projects</chakra.span> on Upwork/Fiverr with consistent <chakra.span fontWeight="bold" color="yellow.400">5-star ratings</chakra.span>. My expertise in
                            <MoreInfo
                                content="Building cross-platform mobile applications with Flutter and Dart."
                                text="Flutter"
                            />,
                            <MoreInfo
                                content="Backend-as-a-Service platform for building web and mobile applications."
                                text="Firebase"
                            />, and
                            <MoreInfo
                                content="Designing and implementing efficient database solutions."
                                text="SQL databases"
                            />
                            has enabled me to deliver seamless, user-friendly applications that meet both business and user needs.
                            <br /><br />
                            I've collaborated with companies like <chakra.span fontWeight="medium" color="white">Nutone Fitness Inc.</chakra.span> and <chakra.span fontWeight="medium" color="white">Balanse Inc.</chakra.span>, where I revamped fitness applications, developed mobile apps for elderly users, and implemented innovative features to drive user retention and satisfaction.
                            <br /><br />
                            My approach focuses on
                            <MoreInfo
                                content="Building software with a strong separation of concerns and maintainable code organization."
                                text="clean architecture"
                            />,
                            <MoreInfo
                                content="Developing reusable, independent components that can be easily maintained and tested."
                                text="modular design"
                            />, and
                            <MoreInfo
                                content="Leveraging analytics and metrics to guide product development and feature prioritization."
                                text="data-driven solutions"
                            />.
                            I'm always looking for new challenges that push the boundaries of what's possible in mobile and web development.
                            <br /><br />
                            When I'm not coding, I enjoy writing about technology and general philosophy on Medium.
                        </Text>

                        <Link
                            href="https://medium.com/@syedasif0221"
                            isExternal
                            alignSelf="flex-start"
                            onClick={() => handleClick('medium_profile')}
                            _hover={{ textDecoration: "none" }}
                        >
                            <HStack
                                spacing={2}
                                mt={1}
                                bg="rgba(60, 207, 145, 0.05)"
                                borderWidth="1px"
                                borderColor="button1"
                                p={2}
                                borderRadius="md"
                                _hover={{
                                    bg: "rgba(60, 207, 145, 0.1)",
                                }}
                                transition="all 0.3s ease"
                            >
                                <Icon as={FaMedium} color="button1" />
                                <Text fontSize="sm" color="gray.300">Read my articles on Medium</Text>
                            </HStack>
                        </Link>
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