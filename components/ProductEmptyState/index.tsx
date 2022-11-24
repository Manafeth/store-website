import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import useTranslation from 'next-translate/useTranslation';
import emptyState from '../../assets/images/product-empty-state.png';
import { useCommon } from '../../contexts/CommonContext';

const ProductEmptyState: FC = () => {
  const {t} = useTranslation('common');
  const { storeInfo } = useCommon()
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Box
           sx={{ height: 300, borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey.2400' }}
        >
            <Image src={emptyState} alt='product empty state' width={147} height={119} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '7px',
            right: '7px'
          }}
        >
          <IconButton component='span'>
            <Image src={HeartIcon} alt='heart icon' width={40} height={40} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ pb: 4.25, pt: 3 }}>
        <Typography
            variant='h5'
            component='h3'
            sx={{
                mb: 1.25,
                cursor: 'pointer',
                fontWeight: '700',
                textAlign: 'left',
                ml:1,
                color: storeInfo.producTitelColor
            }}
        >
        {t('productName')}
        </Typography>
        <Typography
            variant='h5'
            component='div'
            sx={{ color: storeInfo.priceColor, fontWeight: '700', ml:1, textAlign: 'left' }}
        >
            {t('sar')} 0.00
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductEmptyState;