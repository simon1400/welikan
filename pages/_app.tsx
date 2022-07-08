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
import BlockContent from '../components/BlockContent'
import CallModal from '../layout/Modals/Call'
import {GlobalStateProvider} from '../context/dataStateContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <WithGraphQL>
        <BlockContent />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <SingUpModal />
        <Login />
        <Language />
        <CallModal />
      </WithGraphQL>
    </GlobalStateProvider>
  )
}
export default MyApp
