import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <meta property="og:title" content="Felipe Austríaco" />
          <meta property="og:image" content="/images/me.jpeg" />
          <meta
            property="og:description"
            content="Meu portfolio com alguma informações pessoais, projetos/estudos e artigos!"
          />
          <meta
            property="og:url"
            content="Programação frontend, carreira, dicas"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
