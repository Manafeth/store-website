/* eslint-disable quote-props */
import React, { FC, ReactNode } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import useTranslation from 'next-translate/useTranslation';
import StoreEmptyState from '../components/StoreEmptyState';
import { useCommon } from '../contexts/CommonContext';

interface Props {
  children: ReactNode;
}



const CustomThemeProvider: FC<Props> = ({ children }) => {
  const { lang } = useTranslation();
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
  const { storeNotFound, storeInfo } = useCommon();

  let theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: [
        (lang === 'ar' ? 'Cairo' : 'Poppins'),
        'Poppins',
        'sans-serif',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'Urbanist'
      ].join(','),
      h1: {
        fontSize: '32px',
        fontWeight: 700,
      },
      h2: {
        fontSize: '24px',
        fontWeight: 700,
      },
      h3: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
        letterSpacing: '0.2px'
      },
      h4: {
        fontSize: '18px',
        fontWeight: 400,
      },
      h5: {
        fontSize: '16px',
        fontWeight: 400,
      },
      h6: {
        fontSize: '14px',
        fontWeight: 400,
      },
    },
  } as ThemeOptions);

  theme = createTheme(theme, {
    palette: {
      primary: {
        light: storeInfo.buttonHoverColor ? `${storeInfo.buttonHoverColor}` : '#888888',
        main: storeInfo.buttonColor ? storeInfo.buttonColor : '#666666',
        hover: storeInfo.buttonHoverColor ? `${storeInfo.buttonHoverColor}` : '#555555',
        dark: storeInfo.buttonHoverColor ? `${storeInfo.buttonHoverColor}` : '#555555',
        contrastText: storeInfo.buttonTitelColor ? `${storeInfo.buttonTitelColor}` :'#fff',
      },
      secondary: {
        main: '#D9D9D9',
        dark: '#D9D9D9E1',
        contrastText: '#1E1E1E',
        light:'#FAFAFA',
      },
      warning: {
        main: '#F4BE5E',
        dark: '#F4BE5EE6',
        contrastText: '#fff',
        light: '#ffcb7733',
      },
      success: {
        main: '#2DC071',
        dark: '#2DC071',
        contrastText: '#fff',
      },
      error: {
        main: '#FF808B',
        dark: '#FF808BE6',
        contrastText: '#fff',
      },
      info: {
        main: '#4D9AE4',
        dark: '#4D9AE4E6',
        contrastText: '#fff',
        light: '#29D2FC',
      },
      background: {
        paper: '#FFFFFF',
        default: '#FFFFFF',
        light: '#FFFFFF',
        grayDisabled: '#F6F6F6',
        main:'#e8f4f7',
        secondary:'#FFCB77',
        grey:'#F8F8F8'
      },
      text: {
        primary: '#252B42',
        secondary: '#737373',
        grey: '#858585',
        disabled: '#BDBDBD',
        light:'#f3f3f3',
        dark:'#394032'
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
        1600:'#F3F3F3',
        1800:'#262D33',
        2000:'#B9B9B9',
        2200:' #737373',
        2400:'#F8F8F8',
        2600:'#A5A5A5',
        2800:'#a9abb5'
      },
      buttons: {
        blueDarker: '#29D2FC',
        blueLighter: '#e9faff',
        readyLighter: '#e9f2f5',
        readyDarker: '#287C9B',
        shippedLighter: '#e8f9f7',
        shippedDarker: '#2DC071',
        cancelledLighter: '#fff0f1',
        cancelledDarker: '#FE6D73',
        cancelLighter: '#fff5ec',
        cancelDarker: '#FF9B45',
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '15px',
            borderRadius: '5px',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '22px',
            letterSpacing: '0.2px',
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': {
              boxShadow: 'none',
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          standard: {
            fontWeight: '600',
            fontSize: '19px',
            lineHeight: '20px',
            letterSpacing: '0.4px',
            color: '#242424',
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          input: {     
            '&::placeholder': {
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.4px',
              color: '#838383',
              opacity: 1
            },
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.4px',
          },
          root: {
            '&:before': {
              borderBottom: '1px solid #C6C6C6',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: '1px solid #C6C6C6',
            },
            '&:after': {
              borderBottom: '1px solid #C6C6C6',
            },
            '&:hover:not(.Mui-disabled):after': {
              borderWidth: '1px'
            },
          },
        }
      },
      MuiInputAdornment: {
        styleOverrides: {
          standard: {
            p: {
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.4px',
              color: '#242424',
            }
          }
        }
      },
      MuiModal: {
        styleOverrides: {
          root: {
            direction: theme.direction,
          },
        },
      }
    },
  });

  const cacheRtl = createCache({
    key: `mui${direction}`,
    stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : [],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={{ ...theme, direction: direction }}>
        <Box
          sx={{
            color: 'text.primary',
            '& *': {
              fontFamily: theme.typography.fontFamily,
            }
          }}
          dir={direction}
        >
          {storeNotFound ? (
            <StoreEmptyState />
          ) : (
            children
          )}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default CustomThemeProvider;
