import "./CardImage.scss";
import { FC } from "react";
import clsx from "clsx";
interface CardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
}

const CardImage: FC<CardImageProps> = (props) => {
  const { className, height, width, src, alt, ...rest } = props;
  return (
    <img
      className={clsx("card-image", className)}
      width={width}
      height={height}
      src={src}
      alt={alt}
      {...rest}
    />
  );
};

export default CardImage;
