import "./Drawer.scss";
import { FC, useState, useEffect, useMemo } from "react";
import clsx from "clsx";

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  onOpen: boolean;
}

const Drawer: FC<DrawerProps> = (props) => {
  const { className, onOpen, ...rest } = props;
  const [open, setOpen] = useState(onOpen);

  const openMenu = useMemo(
    () =>
      new Map([
        [true, "open"],
        [false, null],
      ]),
    []
  );

  useEffect(() => {
    setOpen(onOpen);
  }, [onOpen]);

  return (
    <div
      id="sidenav"
      className={clsx("sidenav", openMenu.get(open), className)}
      {...rest}
    />
  );
};

export default Drawer;
