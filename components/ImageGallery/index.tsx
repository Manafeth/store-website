import React, { FC } from 'react';
import Box from '@mui/material/Box';
import ReactImageGallery from 'react-image-gallery';

interface Props {
  images: {orignialUrl: string; thumbUrl: string}[]
}

const ProductGallery: FC<Props> = ({ images }) => {
  return (
    <Box component='section'>
      <ReactImageGallery items={images.map((item) => ({
        thumbnail: item.thumbUrl,
        original: item.orignialUrl
      }))} />
    </Box>
  );
};

export default ProductGallery;
