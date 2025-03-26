import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from '../styles/prism'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga4'

const GlobalStyle = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
          }
          body {
            background: #000;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }

          ::-webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
        `}
            />
            {children}
        </>
    )
}

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        // Initialize GA4
        ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)

        // Track page views
        const handleRouteChange = (url) => {
            ReactGA.send({ hitType: "pageview", page: url })
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <ChakraProvider resetCSS theme={customTheme}>
            <GlobalStyle>
                <Component {...pageProps} />
            </GlobalStyle>
        </ChakraProvider>
    )
}
export default MyApp
