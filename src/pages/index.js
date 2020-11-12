import Alerts from "@/components/Alerts";
import Hero from "@/components/Hero";
import { AboutSection, HowSection } from "@/components/Sections";
import AlertLocationTypes from "@/utils/types/AlertLocationTypes";

const FrontPage = (props) => {
  return (
    <div className="front-page">
      <Hero />
      <Alerts location={AlertLocationTypes.FRONTPAGE} isVerticalPadding />
      <AboutSection />
      <HowSection />
    </div>
  );
};

export default FrontPage;
