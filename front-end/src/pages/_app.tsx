import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { StarknetProvider } from '@starknet-react/core'

import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StarknetProvider>
      <NextHead>
        <title>CZ | Find your Rate</title>
      </NextHead>
      <Component {...pageProps} />
    </StarknetProvider>
  )
}

export default MyApp
