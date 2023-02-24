import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import palette from "~/@styles/colors";
import { Text } from "../Text";
import { FontWeight } from "../Text";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  textColor?: string;
  textSize?: number;
  textWeight?: FontWeight;
  border?: string;
  backgroundColor?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  cursor?: string;
  width?: string;
  height?: string;
  align?: string;
}

export const Button = ({
  children,
  textSize = 16,
  textColor = "White",
  text,
  border,
  backgroundColor = `${palette.Navy200}`,
  borderRadius = "16px",
  shadow,
  padding = "1em",
  cursor = "auto",
  width,
  height,
  textWeight,
  align = "center",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      cursor={cursor}
      border={border}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      shadow={shadow}
      padding={padding}
      width={width}
      height={height}
      align={align}
      {...rest}
    >
      {text ? <Text text={text} size={textSize} color={textColor} cursor={cursor} weight={textWeight} /> : <></>}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  textColor?: string;
  textSize?: number;
  border?: string;
  backgroundColor?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  width?: string;
  height?: string;
  cursor?: string;
  align?: string;
}>`
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => shadow};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
`;
