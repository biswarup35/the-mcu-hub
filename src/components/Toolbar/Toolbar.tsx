import "./Toolbar.scss";
import { FC, useMemo } from "react";
import clsx from "clsx";

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "regular" | "dense";
}

const Toolbar: FC<Partial<ToolbarProps>> = (props) => {
  const { variant = "regular", ...rest } = props;
  const appBarVariant = useMemo(
    () =>
      new Map([
        ["regular", "variant-regular"],
        ["dense", "variant-dense"],
      ]),
    []
  );
  return (
    <div
      className={clsx([appBarVariant.get(variant), "display-flex"])}
      {...rest}
    />
  );
};

export default Toolbar;
