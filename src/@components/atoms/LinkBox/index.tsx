import { ReactNode } from "react";
import Link from "next/link";
import { Text } from "../Text";
import { FontWeight } from "../Text";
import palette from "~/@styles/colors";
import Image from "next/image";

interface IProps {
  href: string;
  decoration?: string;
  text?: string;
  size?: number;
  weight?: FontWeight;
  cursor?: string;
  color?: string;
  isClicked?: boolean;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const LinkBox = ({
  text,
  size,
  weight,
  cursor,
  color,
  href,
  decoration = "none",
  isClicked,
  src,
  alt,
  width,
  height,
}: IProps) => {
  const textColor = isClicked ? palette.Blue500 : color;
  const fontWeight = isClicked ? 700 : weight;

  return (
    <Link href={href} style={{ textDecoration: `${decoration}` }}>
      {src ? (
        <Image src={src} alt={alt ? alt : ""} width={width} height={height} priority />
      ) : (
        <Text text={text} size={size} weight={fontWeight} cursor={cursor} color={textColor} />
      )}
    </Link>
  );
};
