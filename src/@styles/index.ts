import { css } from "styled-components";

export const commonStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    background-color: #ffffff;
  }
  margin: 0;
	padding: 0;
	box-sizing: border-box;
  min-width: 1280px;
	&::-webkit-scrollbar {
    display: none;
`;
