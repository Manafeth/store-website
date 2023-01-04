import { useEffect, useState } from 'react';
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
import { getStoreInfo } from '../services/common.services';
import { StoreInfoData } from '../types/common';
import { storeInfoInitialState } from '../constants/initialState';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [storeInfo, setStoreInfo] = useState<StoreInfoData>(storeInfoInitialState);

  useEffect(() => {
    const { locale } = router;
    if (locale)
      localStorage.setItem('userLanguage', locale)  
      getStoreInfo().then((res) => {
        setStoreInfo(res.data.data)
      })
  }, [router])

  return (
    <CommonContextProvider>
      <ThemeProvider>
        <Head>
          <title>{storeInfo.name}</title>
          <link rel="icon" href={storeInfo.mainImageFilePath?.thumbUrl || '/favicon.png'} />
          <meta name="description" content={storeInfo.description} />
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
