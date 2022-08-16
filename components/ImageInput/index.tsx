import React, { FC, ChangeEvent } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon  from '../../assets/images/icons/close-icon.png';
import Image from 'next/image';

interface Props {
  image?: File | null;
  removeImage?: () => void;
  isSubmitted?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleImage?: (ev: ChangeEvent<HTMLInputElement>) => void;
  imageWidth?: string;
  text?:string;
  subText?:string;
}

const ImageInput: FC<Props> = ({ image, removeImage, isSubmitted, handleImage, imageWidth, text, subText }) => {

  return (
    image ? (
      <Box sx={{ mb: 3, position: 'relative', display: 'inline-block' }}>
        <Button
          variant="contained"
          color="error"
          sx={{ borderRadius: '50%', minWidth: '0', position: 'absolute', top: '-20px', right: '-20px' }}
          onClick={removeImage}
        >
          <Image src={CloseIcon} width={24} height={24} alt='' />
        </Button>
        <Image src={(URL.createObjectURL(image))} width={imageWidth || '200'} height={imageWidth || '200'} alt='' />
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
            borderColor: isSubmitted && !image ? 'error.main' : '#C6C6C6',
            borderWidth: isSubmitted && !image ? '2px' : '1px',
            pb: 1,
            cursor: 'pointer',
          }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box
                  sx={{
                    color: isSubmitted && !image ? 'error.main' : '#242424',
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
              Browse
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default ImageInput;
