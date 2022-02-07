import { FC, ReactNode, useMemo } from "react";
import clsx from "clsx";
import "./AppBar.scss";
interface AppBarProps {
  children: ReactNode;
  color:
    | "primary"
    | "secondary"
    | "inherit"
    | "primary-light"
    | "secondary-light";
}
const AppBar: FC<Partial<AppBarProps>> = (props) => {
  const { color = "primary", ...rest } = props;

  const appBarColor = useMemo(
    () =>
      new Map([
        ["primary", "color-primary"],
        ["primary-light", "color-primary-light"],
        ["secondary", "color-secondary"],
        ["secondary-light", "color-secondary-light"],
        ["inherit", "inherit"],
      ]),
    []
  );
  return <header className={clsx([appBarColor.get(color)])} {...rest} />;
};

export default AppBar;
