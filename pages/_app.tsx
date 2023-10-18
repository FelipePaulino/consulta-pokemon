import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { LogoProvider } from '../src/context/LogoContext/logoProvider'
import GlobalStyle from '../src/configs/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/configs/styles/config'

const inter = Inter({ subsets: ['latin'], preload: true })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <LogoProvider>
        <GlobalStyle fontFamily={inter.style.fontFamily} />
        <Component {...pageProps} />
      </LogoProvider>
    </ThemeProvider >
  )
}
