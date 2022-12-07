import '../styles/globals.scss'
import Layout from '../components/layout'
import { Manrope } from '@next/font/google'

const manrope = Manrope({ subsets: ['latin'], weight: [ '800'] })

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
