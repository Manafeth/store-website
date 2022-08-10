import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../styles/theme'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import arLang from '../translations/ar.json';
import enLang from '../translations/en.json';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        translation: enLang,
      },
      ar: {
        translation: arLang,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <Head>
          <title>Store website</title>
          <meta name="description" content="Store website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default MyApp
