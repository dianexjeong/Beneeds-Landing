import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="원하는 복지를 고르는 새로운 복지 관리의 시작, 베니즈" />
          <meta name="description" content="직원이 원하는 복지를 받아볼 수 있도록, 새로운 복지 관리의 첫 걸음" />
          <meta
            name="keywords"
            content="복지, 사내 복지, 임직원 복지, 선물 복지, 직원 복지, 생일, 선물, 스타트업, 중소기업, 직원"
          />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/77887276/221410661-1fc0da73-b974-4b97-815f-7871b7c24df9.png"
          />
          <meta property="og:title" content="원하는 복지를 고르는 새로운 복지 관리의 시작, 베니즈" />
          <meta property="og:description" content="직원이 원하는 복지를 받아볼 수 있도록, 새로운 복지 관리의 첫 걸음" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;800&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
