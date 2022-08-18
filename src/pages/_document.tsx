import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap"
        />
      </Head>
      <body className="h-full min-h-screen grid grid-cols-1 grid-rows-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
