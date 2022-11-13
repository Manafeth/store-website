import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import Image from 'next/image';
import deleteIcon from '../../assets/images/icons/delete-icon.svg';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { ChangeEvent, FC } from 'react';

import Avatar from '@mui/material/Avatar';
import { ProductData } from '../../types/products';
import useTranslation from 'next-translate/useTranslation';
import { LOADING } from '../../constants';
import { useCart } from '../../contexts/CartContext';
interface Props {
  data: ProductData;
  handleCartItemQuantity?: (_: { cartProductId: number, quantity: number }) => void,
  quantity?: number
}

const CartItem: FC<Props> = ({data, handleCartItemQuantity, quantity}) => {
  const {t} = useTranslation('common');

  const {deleteCartProduct, removeStatus} = useCart()

  function handleRemoveCart() {
    deleteCartProduct(data.id)
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const value = +ev.target.value
    if (handleCartItemQuantity && (value > 0))
      handleCartItemQuantity({ cartProductId: data.productId, quantity: value })
  }

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
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, fontWeight: '700', mt: 2 }}
            >
            {data.name}
            </Typography>
            <IconButton onClick={handleRemoveCart}>
              {removeStatus === LOADING ? <CircularProgress size={14} /> : <Image src={deleteIcon} alt='heart icon' width={14} height={14} />}
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {data.category && (
              <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
                {data.category}
              </Typography>
            )}
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
          {t('sar')} {data.salePrice}
          </Typography>
        </Box>
      </Box>
      {handleCartItemQuantity && (
        <Grid container spacing='40px' sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label={t('quantity')}
              fullWidth
              margin='normal'
              name='cityId'
              sx={{ mb: 4 }}
              inputProps={{ style: { fontSize: '16px', fontWeight: '700' } }}
              InputLabelProps={{ shrink: true }}
              type='number'
              onChange={handleChange}
              value={quantity}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CartItem;
