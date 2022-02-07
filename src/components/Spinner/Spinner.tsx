import "./Spinner.scss";
import { FC, useMemo } from "react";
import clsx from "clsx";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "main" | "secondary";
}

const Spinner: FC<SpinnerProps> = (props) => {
  const { className, color = "main", ...rest } = props;
  const spinColor = useMemo(
    () =>
      new Map([
        ["main", "spinner-main"],
        ["secondary", "spinner-secondary"],
      ]),
    []
  );
  return (
    <div
      className={clsx("spinner", [spinColor.get(color)], className)}
      {...rest}
    />
  );
};

export default Spinner;
