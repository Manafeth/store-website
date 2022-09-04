import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
// import StarIcon from '../../assets/images/icons/star-icon.png';
// import EmptyStarIcon from '../../assets/images/icons/emptyStar-icon.png';
import Link from 'next/link';
import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import FilledHeartIcon from '../../assets/images/icons/filled-heart-icon.svg';
// import CartIcon from '../../assets/images/icons/cart-icon.svg';
// import EyeIcon from '../../assets/images/icons/eye-icon.svg';
import { ProductData } from '../../types/products';
import paths from '../../constants/paths';
import { toggleProductInWishList } from '../../services/products.services';
import { useAlert } from '../../contexts/AlertContext';
interface Props {
  data: ProductData
}

const RelatedProductCard: FC<Props> = ({ data }) => {
  const [product, setProduct] = useState<ProductData>({
    id: 0,
    name: '',
    salePrice: 0,
    quantity: 0,
    category: '',
    priceAfterDiscount: 0,
    shortDescription: '',
    description: '',
    pageTitle: '',
    metaDescription: '',
    isInWishList: false,
    imagesFilePath: [],
    attributes: [],
    checkOutAttributes: [],
    subProducts: [],
  });

  const { sendAlert } = useAlert();

  function handleTogglingProductInWishList() {
    toggleProductInWishList(product.id).then(() => {
      setProduct((prevState) => ({
        ...prevState,
        isInWishList: !prevState.isInWishList
      }))
    }).catch((error: any) => {
      sendAlert(error.response.data.Message, 'error')
    });
  }

  useEffect(() => {
    setProduct(data)
  }, [data])

  const colorAttribute = product.attributes.find((item) => item.type === 2);
  
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Link href={paths.productDetails(product.id)}>
          <MuiLink>
            <Avatar
              src={product.mainImageFilePath?.orignialUrl || ''}
              alt='product' sx={{ width: '100%', height: 300, borderRadius: 0 }}
            >
              P
            </Avatar>
          </MuiLink>
        </Link>
        <Box
          sx={{
            position: 'absolute',
            top: '7px',
            right: '7px'
          }}
        >
          <IconButton onClick={handleTogglingProductInWishList}>
            <Image src={product.isInWishList ? FilledHeartIcon : HeartIcon} alt='heart icon' width={40} height={40} />
          </IconButton>
          {/* <IconButton onClick={handleAddProductToCart}>
            <Image src={CartIcon} alt='cart icon' width={40} height={40} />
          </IconButton> */}
          {/* <IconButton>
            <Image src={EyeIcon} alt='eye icon' width={40} height={40} />
          </IconButton> */}
        </Box>
      </Box>
      <Box sx={{ pb: 4.25, pt: 3 }}>
        <Link href={paths.productDetails(product.id)}>
          <Typography
            variant='h5'
            component='h3'
            sx={{
              mb: 1.25,
              cursor: 'pointer',
              fontWeight: '700',
              textAlign: 'left',
            }}
          >
            {product.name}
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', mb: 2 }}>
          {product.priceAfterDiscount ? (
            <>
              <Typography
                variant='h5'
                component='span'
                sx={{
                  mr: 1,
                  color: 'text.disabled',
                  textDecorationLine: 'line-through',
                  fontWeight: '700',
                }}
              >
                SAR {product.salePrice}
              </Typography>
              <Typography
                variant='h5'
                component='span'
                sx={{ color: '#23856D', fontWeight: '700' }}
              >
                SAR {product.priceAfterDiscount}
              </Typography>
            </>
          ) : (
            <Typography
              variant='h5'
              component='span'
              sx={{ color: '#23856D', fontWeight: '700' }}
            >
              SAR {product.salePrice}
            </Typography>
          )}
        </Box>
        {/* <Box
          sx={{ display: 'flex', mb: 2, alignItems: 'flex-start', gap: '20px' }}
        >
          <Box sx={{ display: 'flex' }}>
            <Image src={StarIcon} alt='star' />
            <Image src={StarIcon} alt='star' />
            <Image src={StarIcon} alt='star' />
            <Image src={StarIcon} alt='star' />
            <Image src={EmptyStarIcon} alt='star' />
          </Box>
          <Typography
            variant='h6'
            component='span'
            sx={{ color: 'text.secondary', fontWeight: '700' }}
          >
            10 Reviews
          </Typography>
        </Box> */}
        {colorAttribute && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {colorAttribute.options.map((item) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    backgroundColor: item.name,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    mr: 0.75,
                  }}
                />
              )
            })}
          </Box>
        )}
        
      </Box>
    </Box>
  );
};

export default RelatedProductCard;
