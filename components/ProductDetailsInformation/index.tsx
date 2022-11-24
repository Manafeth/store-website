import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// import StarIcon from '../../assets/images/icons/gold-star.png';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import FilledHeartIcon from '../../assets/images/icons/filled-heart-icon.svg';
import CartIcon from '../../assets/images/icons/cart-icon.svg';
// import EyeIcon from '../../assets/images/icons/eye-icon.svg';
import { ProductData } from '../../types/products';
import useTranslation from 'next-translate/useTranslation';
import CheckoutAttributes from './components/CheckoutAttributes';
import Attributes from './components/Attributes';
import { ProductCartData } from '../../types/cart';
import { addProductToCart } from '../../services/cart.services';
import { useAlert } from '../../contexts/AlertContext';
import { useCart } from '../../contexts/CartContext';
import { useAuthModal } from '../../contexts/AuthModalContext';
import { useCommon } from '../../contexts/CommonContext';
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

  const {t} = useTranslation('common');
  
  const { sendAlert } = useAlert()
  const { fetchCartProducts } = useCart()
  const { isloggedIn, handleOpenAuthModal } = useAuthModal()
  const [addToCartLoader, setAddToCartLoader] = useState(false);
  const { storeInfo } = useCommon()

  function handleAddProductToCart() {
    if (isloggedIn) {
      setAddToCartLoader(true);
      addProductToCart(state).then((response) => {
        sendAlert(response?.data?.message, 'success')
        fetchCartProducts()
        setAddToCartLoader(false);
      }).catch((error: any) => {
        sendAlert(error.response.data.Message, 'error')
        setAddToCartLoader(false);
      })
    } else {
      handleOpenAuthModal();
    }
  }

  function handleAddCheckoutAttribute() {
    if (state.checkOutAttributes.length < productDetials.checkOutAttributes?.length) {
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
      options: productDetials.attributes?.reduce((acc: number[], atrribute) => {
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
          sx={{ mb: 0, fontWeight: '400', fontSize: '20px' , color: storeInfo.producTitelColor }}
        >
          {productDetials.name}
        </Typography>
        <IconButton onClick={!isloggedIn ? handleOpenAuthModal : handleTogglingProductInWishList} sx={{ p: 0 }}>
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
      <Box sx={{ display: 'flex', mb: 2 }}>
        {productDetials.priceAfterDiscount ? (
          <>
            <Typography variant='h2' component='span' sx={{ mb: 1, display: 'block', color: 'text.disabled',
                textDecorationLine: 'line-through' }}>
              {t('sar')} {productDetials.salePrice}
            </Typography>
            <Typography
              variant='h5'
              component='span'
              sx={{ color: '#23856D', fontWeight: '700' }}
            >
                {t('sar')} {productDetials.priceAfterDiscount}
            </Typography>
          </>
        ) : (
          <Typography variant='h2' component='span' sx={{ mb: 1, display: 'block', color: storeInfo.priceColor }}>
            {t('sar')} {productDetials.salePrice}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', gap:'10px', mb: 4 }}>
        <Typography
          variant='h6'
          component='h1'
          sx={{ mb: 0, color: 'text.secondary', fontWeight: '700' }}
        >
           {t('availability')} :
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
          sx={{ width: 'auto', height: '44px', mr: 2.5 , backgroundColor: storeInfo.buttonColor, color: storeInfo.buttonTitelColor,
           "&:hover": {
            backgroundColor: "primary.hover"
          }}}
          type='submit'
          onClick={handleAddCheckoutAttribute}
          disabled={state.checkOutAttributes?.length > 0}
        >
           {t('selectOptions')}
        </Button>
        <Box sx={{display:'flex' }}>
          <IconButton onClick={handleAddProductToCart} sx={{ p: 0 }} disabled={addToCartLoader}>
            {addToCartLoader ? <CircularProgress /> : <Image src={CartIcon} alt='cart icon' width={40} height={40} />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsInformation;
