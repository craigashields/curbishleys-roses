import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.png" />
          <meta
            name="description"
            content={siteMetadata.description}
          />
          <meta property="og:site_name" content="" />
          <meta
            property="og:description"
            content={siteMetadata.description}
          />
          <meta property="og:title" content="Curbishleys Roses" />
          <meta name="twitter:card" content="Curbishleys Roses" />
          <meta name="twitter:title" content="Curbishleys Roses" />
          <meta
            name="twitter:description"
            content={siteMetadata.description}
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
