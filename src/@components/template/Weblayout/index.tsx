import React, { ReactNode } from "react";
import styled from "styled-components";

interface Iprops {
  children: ReactNode;
}

export const Weblayout = ({ children }: Iprops) => {
  return <WeblayoutContainer>{children}</WeblayoutContainer>;
};

const WeblayoutContainer = styled.div`
  margin: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  *::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;
