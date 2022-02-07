import "./Image.scss";
import { FC } from "react";
import clsx from "clsx";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: FC<ImageProps> = (props) => {
  const { className, src, alt, ...rest } = props;
  return (
    <img className={clsx("image", className)} src={src} alt={alt} {...rest} />
  );
};

export default Image;
