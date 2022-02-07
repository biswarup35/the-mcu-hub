import { FC } from "react";
import clsx from "clsx";
interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContainer: FC<CardContainerProps> = (props) => {
  const { className, ...rest } = props;
  return <div className={clsx("px-2 py-1", className)} {...rest} />;
};

export default CardContainer;
