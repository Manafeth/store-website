import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import cartplaceHolder from '../../assets/images/cart-placeHolder.png';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';

import Avatar from '@mui/material/Avatar';
import { ProductData } from '../../types/products';
import { useTranslation } from 'next-i18next';
import Divider from '@mui/material/Divider';
interface Props {
  data: ProductData;
}

const CartItem: FC<Props> = ({data}) => {
  const [t] = useTranslation();
  return (
    <Box sx={{mb:2}}>
      <Box sx={{display: 'flex', gap: '50px' }}>
        {/* <Image src={cartplaceHolder} alt='cart image' /> */}
        <Avatar
          src={data.mainImageFilePath?.orignialUrl || ''}
          alt='product'
          sx={{ width: '120px', height: '134px', borderRadius: 0 }}
        >
          P
        </Avatar>
        <Box>
          <Typography
            variant='h5'
            component='h1'
            sx={{ mb: 2, fontWeight: '700', mt: 2 }}
          >
          {data.name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
              {data.category}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ mb: 2, fontWeight: '800' }}
              >
                {data.quantity}
              </Typography>
            </Box>
          </Box>
          <Typography variant='h2' component='h1'>
          {t('common:sar')} {data.salePrice}
          </Typography>
        </Box>
      </Box>
      {/* <Grid container spacing='40px' sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            label='Size : L'
            fullWidth
            margin='normal'
            name='cityId'
            sx={{ mb: 4 }}
          >
            <MenuItem value={0}>test</MenuItem>

            <MenuItem value={1}></MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            label='Qty : 1'
            fullWidth
            margin='normal'
            name='cityId'
            sx={{ mb: 4 }}
            inputProps={{ style: { fontSize: '16px', fontWeight: '700' } }}
          >
            <MenuItem value={0}>test</MenuItem>

            <MenuItem value={1}></MenuItem>
          </TextField>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default CartItem;
