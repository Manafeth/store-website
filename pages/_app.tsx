import { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../styles/theme'
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { AuthModalProvider } from '../contexts/AuthModalContext';
import { ProfileModalProvider } from '../contexts/ProfileContext';
import { CommonContextProvider } from '../contexts/CommonContext';
import { AlertProvider } from '../contexts/AlertContext';
import { CartModalProvider } from '../contexts/CartContext';
import { useRouter } from 'next/router';
import { ContactUsProvider } from '../contexts/ContactUs';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  

  useEffect(() => {
    const { locale } = router;
    if (locale)
      localStorage.setItem('userLanguage', locale)  
  }, [router])
  

  return (
    <ThemeProvider>
      <Head>
        <title>Store website</title>
        <meta name="description" content="Store website" />
      </Head>
      <AlertProvider>
        <CommonContextProvider>
          <AuthModalProvider>
            <ProfileModalProvider>
              <CartModalProvider>
                <ContactUsProvider>
                  <Component {...pageProps} />
                </ContactUsProvider>
              </CartModalProvider>
            </ProfileModalProvider>
          </AuthModalProvider>
        </CommonContextProvider>
      </AlertProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
