import Hero from "components/Hero";
import { AboutSection, CreditsSection, HowSection } from "components/Sections";
import React from "reactn";

class FrontPage extends React.Component {
  render() {
    return (
      <div className="front-page">
        <Hero />

        <AboutSection />
        <HowSection />
        <CreditsSection />
      </div>
    );
  }
}

export default FrontPage;
