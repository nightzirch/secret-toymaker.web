import Alert from "components/Alert";
import GiftStatus from "components/GiftStatus";
import {
  GIFT_DIRECTION,
  GIFT_STATUS
} from "components/GiftStatus/utils/constants";
import { Grid, GridItem } from "components/Grid";
import Hero from "components/Hero";
import Section from "components/Section";
import Timer from "components/Timer";
import { Title } from "components/Typography";
import React from "reactn";

class FrontPage extends React.Component {
  renderAlerts = () => {
    // TODO: Get alerts from Firebase or something
    if (process.env.NODE_ENV === "development") {
      return (
        <Alert>
          This is the development site for Secret Toymaker. Proceed with caution
          <span aria-label="grin" role="img">
            😄
          </span>
        </Alert>
      );
    }
    return null;
  };

  renderGiftStatuses = () => {
    // TODO: Use real data
    return (
      <>
        <Title level="secondary">Outgoing gifts</Title>

        <GiftStatus gifter="nightzirch.3126" status={GIFT_STATUS.PACKING} />
        <GiftStatus gifter="nightzirch.3126" status={GIFT_STATUS.SENT} />
        <GiftStatus gifter="nightzirch.3126" status={GIFT_STATUS.RECEIVED} />

        <Title level="secondary">Incoming gifts</Title>

        <GiftStatus
          direction={GIFT_DIRECTION.INCOMING}
          gifter="damm.1337"
          status={GIFT_STATUS.PACKING}
        />
        <GiftStatus
          direction={GIFT_DIRECTION.INCOMING}
          gifter="damm.1337"
          status={GIFT_STATUS.SENT}
        />
        <GiftStatus
          direction={GIFT_DIRECTION.INCOMING}
          gifter="damm.1337"
          status={GIFT_STATUS.RECEIVED}
        />
      </>
    );
  };

  renderSide = () => {
    return <>{this.renderTimer()}</>;
  };

  renderTimer = () => (
    <>
      <Timer />
    </>
  );

  render() {
    return (
      <div className="front-page">
        <Hero />

        <Section>
          <Grid>
            {/* TODO: Don't render this unless we have alerts */}
            <GridItem>{this.renderAlerts()}</GridItem>

            <GridItem span={8} spanMobile={4}>
              {this.renderGiftStatuses()}
            </GridItem>

            <GridItem hideOnMobile span={4}>
              {this.renderSide()}
            </GridItem>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default FrontPage;
