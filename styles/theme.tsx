/* eslint-disable quote-props */
import React, { FC, ReactNode } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Shadows } from '@mui/material/styles/shadows';
import Box from '@mui/material/Box';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { useTranslation } from 'react-i18next';

interface Props {
  children: ReactNode;
}



const CustomThemeProvider: FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();

  let theme = createTheme({
    spacing: [0, 4, 8, 16, 32, 42, 48, 64],
    typography: {
      fontSize: 14,
      htmlFontSize: 18.3,
      fontFamily: [
        (i18n.language === 'ar' ? 'Cairo' : 'Poppins'),
        'sans-serif',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: 1.313,
      },
      h2: {
        fontSize: '26px',
        fontWeight: 'bold',
        lineHeight: 1.313,
      },
      h3: {
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: 1.313,
      },
      h4: {
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: 1.313,
      },
      h5: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: 1.313,
      },
      h6: {
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: 1.313,
      },
    },
    palette: {
      primary: {
        light: '#39403233',
        main: '#394032',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D9D9D9',
        contrastText: '#1E1E1E',
      },
      warning: {
        main: '#F4BE5E',
        contrastText: '#fff',
        light: '#ffcb7733',
      },
      success: {
        main: '#2DC071',
        contrastText: '#fff',
      },
      error: {
        main: '#FF808B',
        contrastText: '#fff',
      },
      info: {
        main: '#4D9AE4',
        contrastText: '#fff',
        light: '#29D2FC',
      },
      background: {
        paper: '#fff',
        default: '#fff',
        light: '#F8FDF4',
        grayDisabled: '#F6F6F6',
      },
      text: {
        primary: '#252B42',
        secondary: '#737373',
        disabled: '#BDBDBD',
      },
      grey: {
        0: '#ffffff',
        200: '#FAFAFA',
        300: '#f6f6f6',
        500: '#F0F0F3',
        800: '#646464',
        1000: '#EFEFF4',
        1200: '#ECECF2',
        1400: '#F5F5FA',
      },
    },


    shadows: Array(25).fill('none') as Shadows,
  } as ThemeOptions);

  
  const cacheRtl = createCache({
    key: `mui${i18n.dir()}`,
    stylisPlugins: i18n.dir() === 'rtl' ? [prefixer, rtlPlugin] : [],
  });

  return (
    <ThemeProvider theme={{ ...theme, direction: i18n.dir() }}>
      <CacheProvider value={cacheRtl}>
        <Box sx={{ color: 'text.primary' }} dir={i18n.dir()}>
          {children}
        </Box>
      </CacheProvider>
    </ThemeProvider>
  );
};
export default CustomThemeProvider;
