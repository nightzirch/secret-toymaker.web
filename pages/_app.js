import Footer from "components/Footer";
import Header from "components/Header";
import MainMenu from "components/MainMenu";
import Head from "next/head";
import { withInit } from "reactn";
import { initialReducers, initialState } from "store";
import "styles/style.scss";

function App({ Component, pageProps }) {
  return (
    <>
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
          <MainMenu />
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default withInit(initialState, initialReducers)(App);
