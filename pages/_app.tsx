import { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../styles/theme'
import Head from 'next/head';
import { AuthModalProvider } from '../contexts/AuthModalContext';
import { ProfileModalProvider } from '../contexts/ProfileContext';
import { CommonContextProvider } from '../contexts/CommonContext';
import { AlertProvider } from '../contexts/AlertContext';
import { CartModalProvider } from '../contexts/CartContext';
import { useRouter } from 'next/router';
import { ContactUsProvider } from '../contexts/ContactUs';
import { ContantProvider } from '../contexts/ContentContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  

  useEffect(() => {
    const { locale } = router;
    if (locale)
      localStorage.setItem('userLanguage', locale)  
  }, [router])

  return (
    <CommonContextProvider>
      <ThemeProvider>
        <Head>
          <title>Store website</title>
          <meta name="description" content="Store website" />
        </Head>
        <AlertProvider>
            <AuthModalProvider>
              <ProfileModalProvider>
                <CartModalProvider>
                  <ContactUsProvider>
                    <ContantProvider>
                    <Component {...pageProps} />
                    </ContantProvider>
                  </ContactUsProvider>
                </CartModalProvider>
              </ProfileModalProvider>
            </AuthModalProvider>
        </AlertProvider>
      </ThemeProvider>
    </CommonContextProvider>
  )
}

export default MyApp;
