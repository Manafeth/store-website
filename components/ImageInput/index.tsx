import React, { FC, ChangeEvent } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';import { useTranslation } from "next-i18next";

interface Props {
  image?: string | null;
  removeImage?: () => void;
  isInvalid?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleImage?: (ev: ChangeEvent<HTMLInputElement>) => void;
  imageWidth?: string;
  text?:string;
  subText?:string;
}

const ImageInput: FC<Props> = ({ image, removeImage, isInvalid, handleImage, imageWidth, text, subText }) => {
  const [t] = useTranslation();

  return (
    image ? (
      <Box sx={{ mb: 3, position: 'relative', display: 'inline-block' }}>
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: '50%',
            minWidth: 0,
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            fontWeight: 'normal',
            fontSize: '18px'
          }}
          onClick={removeImage}
        >
          X
        </Button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} width={imageWidth || '200'} height={imageWidth || '200'} alt='' />
      </Box>
    ) : (
      <Box component='label' htmlFor="contained-button-file" sx={{ 
        fontFamily: 'Poppins',
      }}>
        {/* @ts-ignore */}
        <Input id="contained-button-file" type="file" sx={{ display: 'none' }} accept="image/*" onChange={handleImage} />
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderColor: isInvalid && !image ? 'error.main' : '#C6C6C6',
            borderWidth: isInvalid && !image ? '2px' : '1px',
            pb: 1,
            cursor: 'pointer',
          }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box
                  sx={{
                    color: isInvalid && !image ? 'error.main' : '#242424',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0.4px',
                  }}
                >
                  {text}
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.4px',
                  color: '#838383',
                }}
              >

                {subText}
              </Typography>
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.4px',
                color: '#242424',
              }}
            >
               {t('common:browse')}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default ImageInput;
