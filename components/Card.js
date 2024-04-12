import {
  Center,
  Divider,
  Image,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react'
import ReactGA from 'react-ga4'
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaJs,
  FaLaravel,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import { SiChakraui, SiNextdotjs } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Flask') {
      values[0] = 'green'
      values[1] = FaPepperHot
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else if (tag == 'Next.js') {
      values[0] = 'gray'
      values[1] = SiNextdotjs
    } else if (tag == 'Chakra UI') {
      values[0] = 'teal'
      values[1] = SiChakraui
    } else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      minH="320px"
      maxH="500px"
      bg="secondary"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
      borderRadius="10px"
    >
      <Link href={deployLink} isExternal>
        <ScaleFade transition={{ duration: 1 }} in={true}>
          <Center w="auto">
            <Image
              w="100%"
              h="auto"
              borderRadius="10px 10px 0px 0px"
              transition="0.3s"
              alt={title}
              src={imageURL}
            />
          </Center>
          <Stack px={4} py={2}>
            <Stack alignItems="center" justifyContent="space-between" isInline>
              <Text color="displayColor" fontFamily="Ubuntu" fontSize="2xl">
                {title}
              </Text>
              <Stack
                alignItems="center"
                justifyContent="flex-end"
                isInline
                spacing={4}
              >
                {githubLink && (
                  <Link
                    color="white"
                    href={githubLink}
                    isExternal
                    onClick={() =>
                      handleClick(`githublink_${title.replace('@', '-at-')}`)
                    }
                  >
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    color="white"
                    href={deployLink}
                    isExternal
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )}
              </Stack>
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
