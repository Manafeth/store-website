import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';
import blackHeart from '../../assets/images/icons/fill-heart.png';
import goldStar from '../../assets/images/icons/gold-star.png';
import { wishListData } from '../../types/profile';
interface Props {
  data: wishListData
}

const ProductItem: FC<Props> = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', gap: '25px' }}>
      <Box
        sx={{
          width: '120px',
          height: '134px',
          backgroundColor: 'text.light',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '44px',
            height: '44px',
            backgroundColor: 'background.light',
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            textAlign: 'center',
            lineHeight: '3.5',
          }}
        >
          <Image src={blackHeart} alt='instagram' width='22' height='22' />
        </Box>
      </Box>
      <Box>
        <Typography
          variant='h2'
          component='h1'
          sx={{ mb: 2, fontWeight: '400' }}
        >
          {data.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant='h5'
            component='h1'
            sx={{ mb: 2, fontWeight: '400' }}
          >
            Home decore
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
        <Typography variant='h2' component='h1' sx={{ fontWeight: 'bold' }}>
        SAR {data.salePrice}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
