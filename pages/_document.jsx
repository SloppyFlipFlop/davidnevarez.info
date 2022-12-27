import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Fernando David Nevarez" />
        <meta
          name="description"
          content="A personal portfolio website of me, David Nevarez 👋🏼"
        />
        <meta
          name="keywords"
          content="David Nevarez, Fernando Nevarez, Fernando David Nevarez, personal portfolio, Full-Stack Developer"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
