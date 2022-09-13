import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// import StarIcon from '../../assets/images/icons/gold-star.png';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import FilledHeartIcon from '../../assets/images/icons/filled-heart-icon.svg';
import CartIcon from '../../assets/images/icons/cart-icon.svg';
// import EyeIcon from '../../assets/images/icons/eye-icon.svg';
import { ProductData } from '../../types/products';
import { useTranslation } from "next-i18next";
import CheckoutAttributes from './components/CheckoutAttributes';
import Attributes from './components/Attributes';
import { ProductCartData } from '../../types/cart';
import { addProductToCart } from '../../services/cart.services';
import { useAlert } from '../../contexts/AlertContext';
import { useCart } from '../../contexts/CartContext';
interface Props {
  productDetials: ProductData,
  handleTogglingProductInWishList: () => void,
}


const ProductDetailsInformation: FC<Props> = ({ productDetials, handleTogglingProductInWishList }) => {
  const [state, setState] = useState<ProductCartData>({
    productId: 0,
    quantity: 1,
    options: [],
    checkOutAttributes: []
  });

  const [t] = useTranslation();
  
  const { sendAlert } = useAlert()
  const { fetchCartProducts } = useCart()


  function handleAddProductToCart() {
    addProductToCart(state).then((response) => {
      sendAlert(response?.data?.message, 'success')
      fetchCartProducts()
    }).catch((error: any) => {
      sendAlert(error.response.data.Message, 'error')
    })
  }

  function handleAddCheckoutAttribute() {
    if (state.checkOutAttributes.length < productDetials.checkOutAttributes.length) {
      setState((prevState) => ({
        ...prevState,
        checkOutAttributes: [
          ...prevState.checkOutAttributes,
          {
            checkOutAttributeId: 0,
            value: ''
          }
        ]
      }))
    } else {
      sendAlert('There are no more options', 'error')
    }
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      productId: productDetials.id,
      options: productDetials.attributes.reduce((acc: number[], atrribute) => {
        if (atrribute.options[0]?.id)
          return [...acc, atrribute.options[0]?.id];
        return acc;
      }, [])
    }))
  }, [productDetials])

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2.5 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{ mb: 0, fontWeight: '400', fontSize: '20px' }}
        >
          {productDetials.name}
        </Typography>
        <IconButton onClick={handleTogglingProductInWishList} sx={{ p: 0 }}>
          <Image src={productDetials.isInWishList ? FilledHeartIcon : HeartIcon} alt='heart icon' width={40} height={40}/>
        </IconButton>
      </Box>
      
      {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <Image src={StarIcon} alt='instagram' />
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 1, fontWeight: '700', color: 'text.secondary' }}
        >
          4.9 Reviews
        </Typography>
      </Box> */}
      <Typography variant='h2' component='span' sx={{ mb: 1, display: 'block' }}>
        {t('common:sar')} {productDetials.salePrice}
      </Typography>
      <Box sx={{ display: 'flex', gap:'10px', mb: 4 }}>
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 0, color: 'text.secondary', fontWeight: '700' }}
        >
           {t('common:availability')} :
        </Typography>
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 0, color: '#23A6F0', fontWeight: '700' }}
        >
          {productDetials.quantity > 0 ? 'In Stock' : 'Out Stock'}
        </Typography>
      </Box>
      <Typography
        variant='h6'
        component='h1'
        sx={{ mb: 3.5, color: 'text.secondary' }}
      >
        {productDetials.shortDescription}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      
      <Attributes
        productDetials={productDetials}
        setState={setState}
        options={state.options}
      />

      <CheckoutAttributes
        productDetials={productDetials}
        checkoutAttributes={state.checkOutAttributes}
        setState={setState}
      />
      
      <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
        <Button
          variant='contained'
          sx={{ width: 'auto', height: '44px', mr: 2.5 }}
          type='submit'
          onClick={handleAddCheckoutAttribute}
          disabled={state.checkOutAttributes.length > 0}
        >
           {t('common:selectOptions')}
        </Button>
        <Box sx={{display:'flex' }}>
          <IconButton onClick={handleAddProductToCart} sx={{ p: 0 }}>
            <Image src={CartIcon} alt='cart icon' width={40} height={40} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsInformation;
