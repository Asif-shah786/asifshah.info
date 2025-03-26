import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com" rel="preconnect" />
                    <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
                    <link
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
                        onLoad="this.onload=null;this.rel='stylesheet'"
                        rel="stylesheet preload prefetch"
                    />
                    <link
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
                        onLoad="this.onload=null;this.rel='stylesheet'"
                        rel="stylesheet preload prefetch"
                    />
                    <meta content="black" name="theme-color" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
