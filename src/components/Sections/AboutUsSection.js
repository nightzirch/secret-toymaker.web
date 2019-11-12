import ContactItem from "components/ContactItem";
import { Paragraphs, Signature, Title } from "components/Typography";
import lang from "lang/lang";
import React from "reactn";
import "./AboutUsSection.scss";

const AboutUsSection = props => (
  <div className="about-us-section">
    <Title>Who are behind Secret Toymaker?</Title>

    <div className="about-us-section__block">
      <Paragraphs paragraphs={lang.aboutUs.RandommUser} />
      <ContactItem
        icon={
          <img src="/images/icons/reddit.svg" alt="Reddit" title="Reddit" />
        }
        label="Contact on Reddit"
        url="https://www.reddit.com/message/compose?to=RandommUser"
      />

      <Signature>RandommUser</Signature>
    </div>

    <div className="about-us-section__block">
      <Paragraphs paragraphs={lang.aboutUs.nightzirch} />
      <ContactItem
        icon={
          <img src="/images/icons/reddit.svg" alt="Reddit" title="Reddit" />
        }
        label="Contact on Reddit"
        url="https://www.reddit.com/message/compose?to=nightzirch"
      />

      <Signature>Chris</Signature>
    </div>
  </div>
);

export default AboutUsSection;
