import Routes from "@/config/routes";
import Link from "next/link";
import t from "prop-types";
import Button from "./Button";

const LoginButton = (props) => {
  const { redirectUrl } = props;

  const loginUrl = [Routes.LOGIN, redirectUrl && `redirect=${redirectUrl}`]
    .filter((l) => l)
    .join("?");

  return (
    <Link href={loginUrl} passHref>
      <Button
        icon={<ion-icon name="arrow-forward"></ion-icon>}
        iconPlacement="right"
        primary
        title="Go to login"
        {...props}
      />
    </Link>
  );
};

LoginButton.propTypes = {
  redirectUrl: t.string,
};

export default LoginButton;
