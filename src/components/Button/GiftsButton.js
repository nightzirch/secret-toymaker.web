import { useRouter } from "next/router";
import React from "reactn";
import Button from "./Button";

const GiftsButton = (props) => {
  const router = useRouter();

  const gotoGifts = () => {
    router.push("/signup");
  };

  return <Button onClick={gotoGifts} title="To Gifts" {...props} />;
};

export default GiftsButton;
