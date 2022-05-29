import type { AppProps } from 'next/app'
import 'uikit'
import "react-input-range/lib/css/index.css"
import "../styles/main.scss"
import { WithGraphQL } from '../utility/graphql'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SingUpModal from '../layout/Modals/Auth/SingUp'
import Login from '../layout/Modals/Auth/Login'
import Language from '../layout/Modals/Localization/Language'

function MyApp({ Component, pageProps }: AppProps) {
  return <WithGraphQL>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <SingUpModal />
    <Login />
    <Language />
  </WithGraphQL>
}
export default MyApp
