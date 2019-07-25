import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps({ renderPage, ...otherProps }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link href="static/style/antd.min.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="static/style/font.css"
          />
        </Head>
        <body>
          <div
            id="injectStyle"
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'white',
              zIndex: '999',
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
