import Footer from "components/Footer";
import Header from "components/Header";
import MainMenu from "components/MainMenu";
import { AuthProvider } from "contexts/Auth";
import Head from "next/head";
import { withInit } from "reactn";
import addReactNDevTools from "reactn-devtools";
import { initialReducers, initialState } from "store";
import "styles/style.scss";

addReactNDevTools();

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
          <MainMenu />
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default withInit(initialState, initialReducers)(App);
