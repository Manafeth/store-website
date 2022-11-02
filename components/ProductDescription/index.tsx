import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ProductData } from '../../types/products';


interface Props {
  productDetials: ProductData
}

const ProductDescription: FC<Props> = ({ productDetials }) => {
  
  return (
    <Box sx={{ pt: 3, pb: 8.5 }}>
      <Container>
        <Grid container spacing={4.25}>
          <Grid item md={4.3}>
            <CardMedia
              image={productDetials.mainImageFilePath?.orignialUrl || ''}
              component='img'
              alt='product'
              sx={{ width: '100%', maxWidth: '100%', height: 372 }}
            />
          </Grid>
          <Grid item md={7.7}>
            <Typography>
             {productDetials.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDescription;
