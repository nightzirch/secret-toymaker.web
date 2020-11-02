import Footer from "components/Footer";
import Header from "components/Header";
import { AuthProvider } from "contexts/AuthContext";
import Head from "next/head";
import "styles/style.scss";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Secret Toymaker</title>
      </Head>

      <div className="app">
        <Header />

        <div className="app__main">
          {/* <MainMenu /> */}
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
