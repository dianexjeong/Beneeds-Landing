import type { AppProps } from "next/app";
import GlobalStyle from "~/@styles/GlobalStyle";
import { Weblayout } from "~/@components/template";
import styled from "styled-components";

declare global {
  interface Window {
    daum: any;
  }
  const daum: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Weblayout>
        <GlobalStyle />

        <InnerContainer>
          <Component {...pageProps} />
        </InnerContainer>
      </Weblayout>
    </>
  );
};

export default App;

const InnerContainer = styled.div`
  margin: auto;
`;
