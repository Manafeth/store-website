import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import cartplaceHolder from '../../assets/images/cart-placeHolder.png';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import { productData } from '../../types/cart';
import Avatar from '@mui/material/Avatar';
interface Props {
  data: productData;
}

const CartItem: FC<Props> = ({data}) => {
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
          {data.nameEn}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
              Home decore
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
            SAR {data.salePrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
