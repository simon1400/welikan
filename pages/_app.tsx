import type { AppProps } from 'next/app'
import 'uikit'
import "react-input-range/lib/css/index.css"
import "../styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
