import Routes from "@/config/routes";
import { replaceString } from "@/utils/string";
import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import React, { useGlobal } from "reactn";
import Button from "./Button";

const EventButton = (props) => {
  const [stage] = useGlobal("stage");

  if (isEmpty(stage)) return null;
  console.log(stage.year);
  const url = replaceString(Routes.EVENT, { "[year]": stage.year });

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
