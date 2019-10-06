import App from "next/app";
import Head from "next/head";
import React from "reactn";
import addReactNDevTools from "reactn-devtools";
import { setGlobalStore } from "../store";
import "../styles/styles.scss";

addReactNDevTools();
setGlobalStore();

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Secret Toymaker</title>

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
