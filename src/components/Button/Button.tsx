import "./Button.scss";
import { FC } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  const { className, ...rest } = props;
  return <button className={clsx("btn", className)} {...rest} />;
};

export default Button;
