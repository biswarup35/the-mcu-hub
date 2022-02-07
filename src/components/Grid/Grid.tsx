import "./Grid.scss";
import { FC, useMemo } from "react";
import clsx from "clsx";
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container: boolean;
  gap: 1 | 2 | 3 | 4 | 5;
  item: boolean;
  xs: number | undefined;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const Grid: FC<Partial<GridProps>> = (props) => {
  const {
    gap = 1,
    container = false,
    item = false,
    className,
    xs = 12,
    sm,
    md,
    lg,
    xl,
    ...rest
  } = props;

  const gridGap = useMemo(
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
  const gridContainer = useMemo(
    () =>
      new Map([
        [true, "grid"],
        [false, null],
      ]),
    []
  );
  const gridItem = useMemo(
    () =>
      new Map([
        [true, "grid-item"],
        [false, null],
      ]),
    []
  );
  const gridXS = useMemo(
    () =>
      new Map([
        [12, "xs-12"],
        [11, "xs-11"],
        [10, "xs-10"],
        [9, "xs-9"],
        [8, "xs-8"],
        [7, "xs-7"],
        [6, "xs-6"],
        [5, "xs-5"],
        [4, "xs-4"],
        [3, "xs-3"],
        [2, "xs-2"],
        [1, "xs-1"],
        [undefined, null],
      ]),
    []
  );
  const gridSM = useMemo(
    () =>
      new Map([
        [12, "sm-12"],
        [11, "sm-11"],
        [10, "sm-10"],
        [9, "sm-9"],
        [8, "sm-8"],
        [7, "sm-7"],
        [6, "sm-6"],
        [5, "sm-5"],
        [4, "sm-4"],
        [3, "sm-3"],
        [2, "sm-2"],
        [1, "sm-1"],
        [undefined, null],
      ]),
    []
  );
  const gridMD = useMemo(
    () =>
      new Map([
        [12, "md-12"],
        [11, "md-11"],
        [10, "md-10"],
        [9, "md-9"],
        [8, "md-8"],
        [7, "md-7"],
        [6, "md-6"],
        [5, "md-5"],
        [4, "md-4"],
        [3, "md-3"],
        [2, "md-2"],
        [1, "md-1"],
        [undefined, null],
      ]),
    []
  );
  const gridLG = useMemo(
    () =>
      new Map([
        [12, "lg-12"],
        [11, "lg-11"],
        [10, "lg-10"],
        [9, "lg-9"],
        [8, "lg-8"],
        [7, "lg-7"],
        [6, "lg-6"],
        [5, "lg-5"],
        [4, "lg-4"],
        [3, "lg-3"],
        [2, "lg-2"],
        [1, "lg-1"],
        [undefined, null],
      ]),
    []
  );
  const gridXL = useMemo(
    () =>
      new Map([
        [12, "xl-12"],
        [11, "xl-11"],
        [10, "xl-10"],
        [9, "xl-9"],
        [8, "xl-8"],
        [7, "xl-7"],
        [6, "xl-6"],
        [5, "xl-5"],
        [4, "xl-4"],
        [3, "xl-3"],
        [2, "xl-2"],
        [1, "xl-1"],
        [undefined, null],
      ]),
    []
  );
  return (
    <div
      className={clsx(
        [gridContainer.get(container)],
        [gridItem.get(item)],
        [gridXS.get(xs)],
        [gridSM.get(sm)],
        [gridMD.get(md)],
        [gridLG.get(lg)],
        [gridXL.get(xl)],
        [gridGap.get(gap)]
      )}
      {...rest}
    />
  );
};

export default Grid;
