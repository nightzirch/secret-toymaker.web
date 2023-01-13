import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#62aa4a" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="stylesheet" href="https://use.typekit.net/atr4hba.css" />
        </Head>

        <body>
          <div id="modals" />
          <Main />
          <NextScript />
          <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
