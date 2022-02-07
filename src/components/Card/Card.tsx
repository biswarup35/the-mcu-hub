import "./Card.scss";
import { FC, useMemo } from "react";
import clsx from "clsx";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant: "outlined" | "elevated";
}
const Card: FC<Partial<CardProps>> = (props) => {
  const { className, variant = "elevated", ...rest } = props;
  const cardVariant = useMemo(
    () =>
      new Map([
        ["outlined", "card-outlined"],
        ["elevated", "card-elevated"],
      ]),
    []
  );
  return (
    <div
      className={clsx("card", [cardVariant.get(variant)], className)}
      {...rest}
    />
  );
};

export default Card;
