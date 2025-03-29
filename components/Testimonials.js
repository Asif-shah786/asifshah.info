import {
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    Link,
    Button,
    Icon,
    HStack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    VStack,
    Divider,
    AspectRatio,
    chakra,
    shouldForwardProp,
    Badge,
    Tag,
    Grid,
    SimpleGrid
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion';
import { useState } from 'react'
import { FaQuoteLeft, FaStar, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

// Create a custom motion component
const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Testimonials() {
    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedTestimonial, setSelectedTestimonial] = useState(null)
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial)
        onOpen()
        handleClick(`testimonial_modal_${testimonial.name}`)
    }

    const testimonials = [
        {
            quote: "I initially hired Asif to work on a small Flutter project for an app that integrates audio files, tracks user progress, and implements an in-app purchase. The project was completed so quickly, with such professional results, that I've hired him now for a 2nd and 3rd project.",
            name: "Bill D.",
            title: "Chief Executive Officer",
            project: "Mobile App for Android / iOS",
            date: "Apr 2024",
            rating: 5,
            verified: true
        },
        {
            quote: "I hired Asif once I realized he was a motivated and hard working businessman. From our first conversation, he was responsive and direct in regards to services and expectation. I will definitely be using his services again.",
            name: "Tyree T.",
            title: "Operations and Maintenance Engineer",
            project: "Mobile App",
            date: "Jun 2024",
            rating: 5,
            verified: true
        },
        {
            quote: "I recently worked with Asif Shah and his team. We were launching an application for body building which users can do their workouts and select different types of workouts as well as meal plans. They made all requirements with good quality.",
            name: "Faraz P.",
            project: "Building Fitness 3T Mobile App",
            date: "Apr 2024",
            rating: 5,
            verified: true
        }
    ];

    return (
        <Box width="100%">
            <SlideUpWhenVisible>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "flex-start", md: "flex-start" }}
                    mb={{ base: 8, md: 16 }}
                    width="100%"
                >
                    <Box maxW={{ base: "100%", md: "40%" }} mb={{ base: 8, md: 0 }}>
                        <Text
                            textTransform="uppercase"
                            fontSize="xs"
                            letterSpacing="wide"
                            color="button1"
                            fontWeight="medium"
                            mb={2}
                        >
                            Client Feedback
                        </Text>
                        <Heading
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            What clients <chakra.span color="button1">say</chakra.span>
                        </Heading>
                    </Box>

                    <Box width={{ base: "100%", md: "auto" }}>
                        <Stack
                            direction={{ base: "row", sm: "row" }}
                            spacing={{ base: 4, md: 6 }}
                            divider={<Text color="gray.500" mx={{ base: 1, md: 2 }}>•</Text>}
                            flexWrap="wrap"
                            justify={{ base: "space-between", md: "flex-start" }}
                            width="100%"
                        >
                            <VStack align="start" spacing={0}>
                                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="button1">100%</Text>
                                <Text fontSize="sm" color="gray.400">Job Success</Text>
                            </VStack>
                            <VStack align="start" spacing={0}>
                                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="button1">19</Text>
                                <Text fontSize="sm" color="gray.400">Reviews</Text>
                            </VStack>
                            <VStack align="start" spacing={0}>
                                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="button1">★★★★★</Text>
                                <Text fontSize="sm" color="gray.400">Rating</Text>
                            </VStack>
                        </Stack>
                    </Box>
                </Flex>
            </SlideUpWhenVisible>

            {/* Desktop version - shown on medium screens and larger */}
            <Box display={{ base: "none", md: "block" }} width="100%">
                <SimpleGrid columns={{ md: 2, lg: 3 }} spacing={6} my={4} py={4}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            openModal={openModal}
                        />
                    ))}
                </SimpleGrid>
            </Box>

            {/* Mobile version - only visible on small screens */}
            <Box
                display={{ base: "block", md: "none" }}
                width="100%"
                overflowX="auto"
                overflowY="hidden"
                sx={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '-webkit-overflow-scrolling': 'touch'
                }}
                pb={4}
            >
                <Flex
                    direction="row"
                    my={4}
                    py={2}
                    width="max-content"
                    minWidth="100%"
                    px={1}
                >
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            width={{ base: "85vw" }}
                            maxWidth="350px"
                            minWidth="280px"
                            mr={4}
                            flexShrink={0}
                        >
                            <TestimonialCard
                                testimonial={testimonial}
                                index={index}
                                hoveredIndex={hoveredIndex}
                                setHoveredIndex={setHoveredIndex}
                                openModal={openModal}
                                isMobile={true}
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>

            <SlideUpWhenVisible>
                <Flex justify="center" mt={12} mb={16}>
                    <Link
                        href="https://www.upwork.com/freelancers/~013486088645238676"
                        isExternal
                        _hover={{ textDecoration: 'none' }}
                        onClick={() => handleClick('upwork_profile')}
                    >
                        <Button
                            rightIcon={<FaExternalLinkAlt />}
                            bg="rgba(60, 207, 145, 0.05)"
                            color="button1"
                            size="md"
                            px={6}
                            fontWeight="medium"
                            borderWidth="1px"
                            borderColor="button1"
                            _hover={{
                                bg: "button1",
                                color: "black"
                            }}
                            _active={{
                                transform: "translateY(1px)"
                            }}
                            transition="all 0.3s ease"
                        >
                            View all reviews on Upwork
                        </Button>
                    </Link>
                </Flex>
            </SlideUpWhenVisible>

            {/* Testimonial Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered motionPreset="slideInBottom">
                <ModalOverlay
                    bg="rgba(0,0,0,0.85)"
                    backdropFilter="blur(8px)"
                />
                <ModalContent
                    bg="rgba(17, 17, 17, 0.95)"
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.7)"
                    maxW={{ base: "90%", md: "600px" }}
                    mx="auto"
                    borderWidth="1px"
                    borderColor="rgba(60, 207, 145, 0.15)"
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        height="3px"
                        bgGradient="linear(to-r, button1, rgba(60, 207, 145, 0.5))"
                    />

                    <ModalHeader
                        fontSize="xl"
                        fontWeight="bold"
                        color="white"
                        pt={6}
                        pb={2}
                        px={6}
                        borderBottomWidth="1px"
                        borderColor="whiteAlpha.100"
                    >
                        Client Testimonial
                    </ModalHeader>
                    <ModalCloseButton color="gray.400" size="md" mt={2} mr={2} />

                    <ModalBody py={6} px={6} pb={6}>
                        {selectedTestimonial && (
                            <VStack align="start" spacing={6}>
                                <Box
                                    p={5}
                                    bg="blackAlpha.400"
                                    w="full"
                                    borderRadius="md"
                                    position="relative"
                                    borderLeft="3px solid"
                                    borderColor="button1"
                                >
                                    <Icon
                                        as={FaQuoteLeft}
                                        color="button1"
                                        boxSize={5}
                                        opacity={0.8}
                                        position="absolute"
                                        top={5}
                                        left={5}
                                    />

                                    <Text
                                        color="gray.200"
                                        fontSize="md"
                                        fontWeight="medium"
                                        lineHeight="tall"
                                        pl={10}
                                        pt={4}
                                    >
                                        "{selectedTestimonial.quote}"
                                    </Text>
                                </Box>

                                <Flex
                                    justify="space-between"
                                    width="full"
                                    align={{ base: "flex-start", md: "center" }}
                                    direction={{ base: "column", md: "row" }}
                                    gap={4}
                                >
                                    <VStack align="start" spacing={1}>
                                        <HStack spacing={2} mb={1}>
                                            {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                                <Icon key={i} as={FaStar} color="yellow.400" boxSize={4} />
                                            ))}
                                        </HStack>

                                        <Text
                                            fontSize="lg"
                                            fontWeight="bold"
                                            color="button1"
                                        >
                                            {selectedTestimonial.name}
                                        </Text>

                                        {selectedTestimonial.title && (
                                            <Text fontSize="sm" color="gray.400">
                                                {selectedTestimonial.title}
                                            </Text>
                                        )}

                                        <Text fontSize="xs" color="gray.500" mt={1}>
                                            {selectedTestimonial.project} • {selectedTestimonial.date}
                                        </Text>
                                    </VStack>
                                </Flex>
                            </VStack>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

// Extracted TestimonialCard component for better maintainability
const TestimonialCard = ({ testimonial, index, hoveredIndex, setHoveredIndex, openModal, isMobile = false }) => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openModal(testimonial)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            role="group"
            cursor="pointer"
            position="relative"
            height="100%"
            width="100%"
        >
            <Box
                h="100%"
                bg="#111"
                py={6}
                px={5}
                borderRadius="md"
                boxShadow={hoveredIndex === index
                    ? "0 20px 40px -15px rgba(60, 207, 145, 0.15)"
                    : "none"
                }
                transition="all 0.3s ease"
                position="relative"
                overflow="hidden"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: hoveredIndex === index
                        ? 'linear-gradient(45deg, rgba(60, 207, 145, 0.03), rgba(17, 17, 17, 0.8))'
                        : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <VStack
                    spacing={4}
                    align="start"
                    justify="space-between"
                    h="100%"
                >
                    <Icon
                        as={FaQuoteLeft}
                        color="button1"
                        boxSize={4}
                        opacity={0.8}
                    />

                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="medium"
                        lineHeight="tall"
                        color="white"
                        noOfLines={isMobile ? 6 : undefined}
                    >
                        {testimonial.quote}
                    </Text>

                    <Box w="full" mt="auto">
                        <Divider borderColor="whiteAlpha.200" mb={4} />

                        <HStack spacing={3} justify="space-between" align="center">
                            <Box>
                                <Text
                                    fontWeight="bold"
                                    color="button1"
                                    mb={1}
                                    fontSize={{ base: "sm", md: "md" }}
                                >
                                    {testimonial.name}
                                </Text>
                                {testimonial.title && (
                                    <Text fontSize="xs" color="gray.400">
                                        {testimonial.title}
                                    </Text>
                                )}
                            </Box>

                            <MotionBox
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon
                                    as={FaArrowRight}
                                    color="button1"
                                    boxSize={4}
                                    opacity={hoveredIndex === index ? 1 : 0.5}
                                    transition="all 0.2s"
                                />
                            </MotionBox>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </MotionBox>
    );
};