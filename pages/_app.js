import Footer from "components/Footer";
import Header from "components/Header";
import "styles/style.scss";

function App({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />

      <div className="app__main">
        {/* <MainMenu /> */}
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
