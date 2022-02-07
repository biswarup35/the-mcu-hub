import "./Stack.scss";
import { FC, useMemo } from "react";
import clsx from "clsx";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  children: React.ReactNode;
  gap: 1 | 2 | 3 | 4 | 5;
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  wrap: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent: "start" | "end" | "center" | "space-between" | "space-around";
  alignItems: "start" | "end" | "center" | "stretch" | "baseline";
  alignContent:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around";
}

const Stack: FC<Partial<StackProps>> = (props) => {
  const {
    gap = 1,
    direction = "column",
    wrap = "nowrap",
    justifyContent = "start",
    alignItems = "start",
    alignContent = "start",
    className,
    ...rest
  } = props;
  const flexGap = useMemo(
    () =>
      new Map([
        [1, "gap-1"],
        [2, "gap-2"],
        [3, "gap-3"],
        [4, "gap-4"],
        [5, "gap-5"],
      ]),
    []
  );
  const flexDirection = useMemo(
    () =>
      new Map([
        ["row", "row"],
        ["column", "column"],
        ["row-reverse", "row-reverse"],
        ["column-reverse", "column-reverse"],
      ]),
    []
  );
  const flexWrap = useMemo(
    () =>
      new Map([
        ["nowrap", "nowrap"],
        ["wrap", "wrap"],
        ["wrap-reverse", "wrap-reverse"],
      ]),
    []
  );
  const flexJustifyContent = useMemo(
    () =>
      new Map([
        ["start", "justify-flex-start"],
        ["end", "justify-flex-end"],
        ["center", "justify-center"],
        ["space-between", "justify-space-between"],
        ["space-around", "justify-space-around"],
      ]),
    []
  );
  const flexAlignItems = useMemo(
    () =>
      new Map([
        ["start", "align-items-start"],
        ["end", "align-items-end"],
        ["center", "align-items-center"],
        ["stretch", "align-items-stretch"],
      ]),
    []
  );
  const flexAlignContent = useMemo(
    () =>
      new Map([
        ["start", "align-content-start"],
        ["end", "align-content-end"],
        ["center", "align-content-center"],
        ["stretch", "align-content-stretch"],
        ["space-between", "align-content-space-between"],
      ]),
    []
  );
  return (
    <div
      className={clsx(
        "flex",
        [
          flexDirection.get(direction),
          flexGap.get(gap),
          flexWrap.get(wrap),
          flexJustifyContent.get(justifyContent),
          flexAlignItems.get(alignItems),
          flexAlignContent.get(alignContent),
        ],
        className
      )}
      {...rest}
    />
  );
};

export default Stack;
