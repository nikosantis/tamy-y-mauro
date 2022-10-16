import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderProvider } from 'components/header/context'
import { NavbarProvider } from 'components/navbar/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <NavbarProvider>
        <Component {...pageProps} />
      </NavbarProvider>
    </HeaderProvider>
  )
}

export default MyApp
