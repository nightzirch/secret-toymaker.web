import Hero from "components/Hero";
import { AboutSection, HowSection } from "components/Sections";
import React from "reactn";

class FrontPage extends React.Component {
  render() {
    return (
      <div className="front-page">
        <Hero />

        <AboutSection />
        <HowSection />
      </div>
    );
  }
}

export default FrontPage;
