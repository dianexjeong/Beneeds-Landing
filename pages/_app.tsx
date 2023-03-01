import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "~/@styles/GlobalStyle";
import { Weblayout } from "~/@components/template";
import styled from "styled-components";
import { Navigation } from "~/@components/molecules";

declare global {
  interface Window {
    daum: any;
  }
  const daum: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Beneeds 베니즈</title>
      </Head>
      <Weblayout>
        <Navigation />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
