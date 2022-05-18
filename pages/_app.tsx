import type { AppProps } from 'next/app'
import 'uikit'
import "react-input-range/lib/css/index.css"
import "../styles/main.scss"
import { WithGraphQL } from "../lib/api";

function MyApp({ Component, pageProps }: AppProps) {
  return <WithGraphQL><Component {...pageProps} /></WithGraphQL>
}
export default MyApp
