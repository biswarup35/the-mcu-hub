import "./Divider.scss";
import { FC } from "react";
import clsx from "clsx";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}

const Divider: FC<DividerProps> = (props) => {
  const { className, ...rest } = props;
  return <hr className={clsx("divider", className)} {...rest} />;
};

export default Divider;
