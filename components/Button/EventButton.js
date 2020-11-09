import Routes from "config/routes";
import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useGlobal } from "reactn";
import { replaceString } from "utils/string";
import Button from "./Button";

const EventButton = (props) => {
  const router = useRouter();
  const [stage] = useGlobal("stage");

  if (isEmpty(stage)) return null;

  const url = replaceString(Routes.EVENT, { ":year": stage.year });

  return (
    <Link href={url} passHref>
      <Button
        icon={<ion-icon name="arrow-forward" />}
        iconPlacement="right"
        primary
        title="Right this way"
        {...props}
      />
    </Link>
  );
};

export default EventButton;
