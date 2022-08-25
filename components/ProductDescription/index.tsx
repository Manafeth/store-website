import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ProductData } from '../../types/products';
import { CardMedia } from '@mui/material';


interface Props {
  productDetials: ProductData
}

const ProductDescription: FC<Props> = ({ productDetials }) => {
  
  return (
    <Box sx={{ pt: 3 }}>
      <Container>
        <Grid container spacing='40px'>
          <Grid item xs={6}>
            <CardMedia
              image={productDetials.mainImageFilePath?.orignialUrl || ''}
              component='img'
              alt='product'
              sx={{ width: '100%', maxWidth: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box>
             {productDetials.description}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDescription;
