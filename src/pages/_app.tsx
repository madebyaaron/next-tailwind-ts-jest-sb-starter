import "../styles/style.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
      <nav role="main">{/* Nav goes here */}</nav>
      <div className="flex flex-col grow">
        <Component {...pageProps} />
      </div>
      {` `}
      <footer>{/* Foooter goes here */}</footer>
    </div>
  )
}

export default MyApp
