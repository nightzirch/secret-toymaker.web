import { AboutSection, CreditsSection, HowSection } from "components/Sections";

const FrontPage = (props) => {
  return (
    <div className="front-page">
      {/* <Hero /> */}
      {/* <Alerts location={AlertLocationTypes.FRONTPAGE} isVerticalPadding /> */}
      <AboutSection />
      <HowSection />
      <CreditsSection />
    </div>
  );
};

export default FrontPage;
