import { ChangeEvent, FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';

import Avatar from '@mui/material/Avatar';
import { CartProductData } from '../../types/products';
import useTranslation from 'next-translate/useTranslation';
import { LOADING } from '../../constants';
import { useCart } from '../../contexts/CartContext';
import { editCartProductsQuantity } from '../../services/cart.services';
import deleteIcon from '../../assets/images/icons/delete-icon.svg';
interface Props {
  data: CartProductData;
  isDrawerItem?: boolean;
}

let timer: ReturnType<typeof setTimeout>;

const CartItem: FC<Props> = ({data, isDrawerItem}) => {
  const {t, lang} = useTranslation('common');
  const {deleteCartProduct, removeStatus, fetchCartProducts} = useCart()
  const [quantity, setQuantity] = useState(data.quantity);
  const [viewAllCheckoutAttributes, setViewAllCheckoutAttributes] = useState(false);

  function handleRemoveCart() {
    deleteCartProduct(data.id)
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const value = +ev.target.value
    if (!!value && value <= data.maxQuantity) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        editCartProductsQuantity({ cartProductId: data.id, quantity: value }).then(() => {
          setQuantity(value)
          fetchCartProducts()
        }).catch(() => {
          setQuantity(data.quantity)
        })
      }, 1000);
      setQuantity(value)
    } else if (value >= data.maxQuantity) {
      setQuantity(data.maxQuantity)
    } else if (!value || value <= 0) {
      setQuantity(1)
    }
  }

  function handleIncriment() {
    if (quantity < data.maxQuantity) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        editCartProductsQuantity({ cartProductId: data.id, quantity: quantity + 1 }).then(() => {
          fetchCartProducts()
        }).catch(() => {
          setQuantity(data.quantity)
        })
      }, 1000);
      setQuantity((prevState) => prevState + 1)
    }
  }

  function handleDecriment() {
    if (quantity > 1) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        editCartProductsQuantity({ cartProductId: data.id, quantity: quantity - 1 }).then(() => {
          fetchCartProducts()
        }).catch(() => {
          setQuantity(data.quantity)
        })
      }, 1000);
      setQuantity((prevState) => prevState - 1)
    }
  }

  function toggleCheckoutAttributes() {
    setViewAllCheckoutAttributes((prevState) => !prevState)
  }

  return (
    <Box sx={{mb:2}}>
      <Box sx={{display: 'flex', gap: '50px', mb: 3 }}>
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
              {!isDrawerItem ? (
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ mb: 2, fontWeight: '800' }}
                >
                  {data.quantity}
                </Typography>
              ) : (
                <TextField
                  variant='outlined'
                  label={t('quantity')}
                  fullWidth
                  margin='normal'
                  name='cityId'
                  sx={{ mb: 4 }}
                  inputProps={{ sx: { fontSize: '16px', fontWeight: '700', textAlign: 'center', minWidth: { xs: 120, sm: 200 }},
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                    min: 1,
                    max: data.maxQuantity
                  }}
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                  value={quantity}
                  InputProps={{
                    endAdornment: (
                    <IconButton
                      sx={{
                        borderRadius: 0,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        zIndex: 99
                      }}
                      onClick={handleDecriment}
                    >
                      -
                    </IconButton>),
                    startAdornment: (
                    <IconButton
                      sx={{
                        borderRadius: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '100%',
                        zIndex: 99
                      }}
                      onClick={handleIncriment}
                    >
                      +
                    </IconButton>)
                  }}
                />
              )}
            </Box>
          </Box>
          <Typography variant='h2' component='h1'>
          {t('sar')} {data.salePrice}
          </Typography>
        </Box>
      </Box>
      {data.checkOutAttributes.length > 2 ? (
        <>
          {viewAllCheckoutAttributes ? (
            <Grid container spacing={3.75}>
              {data.checkOutAttributes.map((item) => {
                return (
                  <Grid item xs={12} sm={6} key={item?.checkOutAttribute?.id} mb={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h5' component='label' sx={{ color: 'text.secondary', mr: 1 }}>{item?.checkOutAttribute?.name}:</Typography>
                        <Typography variant='h5' component='span' sx={{ fontWeight: 600 }}>{item?.value}</Typography>
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          ) : (
          <Grid container spacing={3.75}>
            {data.checkOutAttributes.filter((_, index) => index < 2).map((item) => {
              return (
                <Grid item xs={12} sm={6} key={item?.checkOutAttribute?.id} mb={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h5' component='label' sx={{ color: 'text.secondary', mr: 1 }}>{item?.checkOutAttribute?.name}:</Typography>
                      <Typography variant='h5' component='span' sx={{ fontWeight: 600 }}>{item?.value}</Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
          )}
            
          <Box sx={{ textAlign: 'center' }}>
            <MuiLink sx={{ fontWeight: 600, color: 'text.primary', fontSize: 16, fontFamily: lang === 'ar' ? 'cairo' : 'poppins' }} onClick={toggleCheckoutAttributes}>
              {viewAllCheckoutAttributes ? t('viewLess') : t('viewMore')}
            </MuiLink>
          </Box>
        </>
      ) : (
        <Grid container spacing={3.75}>
          {data.checkOutAttributes.map((item) => {
            return (
              <Grid item xs={12} sm={6} key={item?.checkOutAttribute?.id} mb={1}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h5' component='label' sx={{ color: 'text.secondary', mr: 1 }}>{item?.checkOutAttribute?.name}:</Typography>
                    <Typography variant='h5' component='span' sx={{ fontWeight: 600 }}>{item?.value}</Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      )}
    </Box>
  );
};

export default CartItem;
