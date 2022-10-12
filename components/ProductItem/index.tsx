import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC,useState } from 'react';
import HeartIcon from '../../assets/images/icons/heart-icon.svg';
import FilledHeartIcon from '../../assets/images/icons/filled-heart-icon.svg';
import { wishListData } from '../../types/profile';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import paths from '../../constants/paths';
import IconButton from '@mui/material/IconButton';
import { toggleProductInWishList } from '../../services/products.services';
import { useAlert } from '../../contexts/AlertContext';
import { useProfile } from '../../contexts/ProfileContext';
import { ProductData } from '../../types/products';
interface Props {
  data: wishListData;
}

const ProductItem: FC<Props> = ({ data }) => {
  const [t] = useTranslation();
  const { sendAlert } = useAlert();
  const { fetchWishListData } = useProfile();
  const [productWishList, setProductWishList] = useState<wishListData>({
    id: 0,
    name: '',
    salePrice: 0,
    isInWishList: false,
    imagesFilePath:{
      orignialUrl:'',
      thumbUrl: '',
    },
    type: 0,
    category:'',
    attributes: [],
  });
  function handleTogglingProductInWishList() {
    toggleProductInWishList(data.id).then(() => {
      setProductWishList((prevState) => ({
        ...prevState,
        isInWishList: !prevState.isInWishList
      }))
      fetchWishListData()
    }).catch((error: any) => {
      sendAlert(error.response.data.Message, 'error')
    });
  }

  return (
    <Box sx={{ display: 'flex', gap: '25px', mt:2 , mb:2 }}>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Link href={paths.productDetails(data.id)}>
          <Avatar
            src={data.imagesFilePath?.orignialUrl || ''}
            alt='product'
            sx={{ width: '120px', height: '134px', borderRadius: 0, cursor: 'pointer' }}
          >
            P
          </Avatar>
        </Link>
        <Box
          sx={{
            position: 'absolute',
            top: '7px',
            right: '7px'
          }}
        >
          <IconButton onClick={handleTogglingProductInWishList}>
            <Image src={data.isInWishList ? FilledHeartIcon : HeartIcon} alt='heart icon' width={40} height={40} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Link href={paths.productDetails(data.id)}>
          <Typography
            variant='h2'
            component='h3'
            sx={{ mb: 2, fontWeight: '400', fontSize: '20px', cursor: 'pointer' }}
          >
            {data.name}
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant='h5'
            component='h1'
            sx={{ mb: 2, fontWeight: '400', color: 'text.secondary' }}
          >
            {data.category}
          </Typography>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Image src={goldStar} alt='instagram' width='22' height='22' />
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, fontWeight: '400' }}
            >
              4.8
            </Typography>
          </Box> */}
        </Box>
        <Typography variant='h2' component='p' sx={{ fontWeight: 'bold' }}>
          {t('common:sar')} {data.salePrice}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
