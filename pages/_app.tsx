import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderProvider } from 'components/header/context'
import { NavbarProvider } from 'components/navbar/context'
import { ContactFormProvider } from 'components/footer/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <NavbarProvider>
        <ContactFormProvider>
          <Component {...pageProps} />
        </ContactFormProvider>
      </NavbarProvider>
    </HeaderProvider>
  )
}

export default MyApp
