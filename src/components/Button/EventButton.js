import Routes from "@/config/routes";
import { replaceString } from "@/utils/string";
import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import React, { useGlobal } from "reactn";
import Button from "./Button";

const EventButton = (props) => {
  const [stage] = useGlobal("stage");
  const { name, year } = stage;

  if (isEmpty(stage)) return null;
  const url = replaceString(Routes.EVENT, { "[year]": year });

  return (
    <Link href={url} passHref>
      <Button
        icon={<ion-icon name="arrow-forward" />}
        iconPlacement="right"
        primary
        title={name}
        {...props}
      />
    </Link>
  );
};

export default EventButton;
