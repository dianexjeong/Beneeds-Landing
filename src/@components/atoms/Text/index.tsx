import styled from "styled-components";
import { HTMLAttributes } from "react";

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "normal" | "bold" | "bolder" | "lighter";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "strong" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: number;
  weight?: FontWeight;
  text?: string;
  spacing?: number;
  font?: string;
  height?: number;
  cursor?: string;
  background?: string;
  gradient?: boolean;
}

export const Text = ({
  size = 1,
  weight = "normal",
  color = "Black",
  spacing = 0,
  font = "Pretendard Variable",
  height = 120,
  cursor = "auto",
  background,
  gradient = false,
  text,
  ...rest
}: TextProps) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      spacing={spacing}
      font={font}
      height={height}
      cursor={cursor}
      background={background}
      gradient={gradient}
      {...rest}
    >
      {text}
    </StyledText>
  );
};

type StyleProps = Pick<
  TextProps,
  "size" | "weight" | "color" | "spacing" | "font" | "height" | "cursor" | "background" | "gradient"
>;

const StyledText = styled.span<StyleProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: ${({ spacing }) => spacing}px;
  line-height: ${({ height }) => height}%;
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};
  background: ${({ background }) => background};
  ${({ gradient }) =>
    gradient
      ? `-webkit-background-clip: text;
  -webkit-text-fill-color:transparent;
  background-clip: text;
  text-fill-color:transparent;`
      : null};
`;
