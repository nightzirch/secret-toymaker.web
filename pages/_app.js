import App from "next/app";
import Head from "next/head";
import React from "reactn";
import addReactNDevTools from "reactn-devtools";
import Header from "../components/Header";
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

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <div className="flex flex-col min-h-screen relative">
          <Header />
          <div className="flex flex-col flex-grow relative overflow-x-hidden pt-14">
            <Component {...pageProps} />
          </div>
        </div>
      </>
    );
  }
}

export default MyApp;
