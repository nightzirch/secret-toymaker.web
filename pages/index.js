import Alerts from "components/Alerts";
import Hero from "components/Hero";
import { AboutSection, CreditsSection, HowSection } from "components/Sections";
import { validateAuthWithRedirect } from "utils/redirect";
import AlertLocationTypes from "utils/types/AlertLocationTypes";

const FrontPage = (props) => {
  return (
    <div className="front-page">
      <Hero />
      <Alerts location={AlertLocationTypes.FRONTPAGE} isVerticalPadding />
      <AboutSection />
      <HowSection />
      <CreditsSection />
    </div>
  );
};

export const getServerSideProps = async (ctx) =>
  await validateAuthWithRedirect(ctx);

export default FrontPage;
