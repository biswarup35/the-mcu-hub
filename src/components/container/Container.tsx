import { ReactNode, FC, useMemo } from "react";
import "./Container.scss";
import clsx from "clsx";
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  children: ReactNode;
  maxWidth: "sm" | "md" | "lg" | "xl";
}
const Container: FC<Partial<ContainerProps>> = (props) => {
  const { className, maxWidth = "lg", ...rest } = props;
  const max = useMemo(
    () =>
      new Map([
        ["sm", "container-sm"],
        ["md", "container-md"],
        ["lg", "container-lg"],
        ["xl", "container-xl"],
      ]),
    []
  );
  return (
    <div
      className={clsx(["container", max.get(maxWidth)], "px-2", className)}
      {...rest}
    />
  );
};

export default Container;
