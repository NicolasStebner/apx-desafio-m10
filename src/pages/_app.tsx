import type { AppProps } from 'next/app'
import "../lib/base.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}