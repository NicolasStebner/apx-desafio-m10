import type { AppProps } from 'next/app'
import "../lib/base.css"
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/e6dba388ef.js"></Script>
    </div>
  )
}