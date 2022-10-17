/* eslint-disable quote-props */
import React, { FC, ReactNode } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { useTranslation } from 'next-i18next';

interface Props {
  children: ReactNode;
}



const CustomThemeProvider: FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  let theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: [
        (i18n.language === 'ar' ? 'Cairo' : 'Poppins'),
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
    palette: {
      primary: {
        light: '#39403233',
        main: '#1995AD',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D9D9D9',
        contrastText: '#1E1E1E',
        light:' #FAFAFA',
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
        paper: '#FFFFFF',
        default: '#FFFFFF',
        light: '#FFFFFF',
        grayDisabled: '#F6F6F6',
        main:'#e8f4f7',
        secondary:'#FFCB77'
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
      },
      buttons: {
        blueDarker: '#29D2FC',
        blueLighter: '#e9faff',
        readyLighter: '#e9f2f5',
        readyDarker: '#287C9B',
        shippedLighter: '#e8f9f7',
        shippedDarker: '#1FC3B2',
        cancelledLighter: '#fff0f1',
        cancelledDarker: '#FE6D73',
        cancelLighter: '#fff5ec',
        cancelDarker: '#FF9B45',
      },
    },
  } as ThemeOptions);

  theme = createTheme(theme, {
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
            testTransform: 'none',
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
    <ThemeProvider theme={{ ...theme, direction: direction }}>
      <CacheProvider value={cacheRtl}>
        <Box
          sx={{
            color: 'text.primary',
            '& *': {
              fontFamily: theme.typography.fontFamily
            }
          }}
          dir={direction}
        >
          {children}
        </Box>
      </CacheProvider>
    </ThemeProvider>
  );
};
export default CustomThemeProvider;
