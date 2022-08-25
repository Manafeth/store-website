import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState, MouseEvent, FC } from 'react';
import { ProductData } from '../../types/products';
import ProductDescription from '../ProductDescription';
import Tabs from './components/Tabs';

interface Props {
  productDetials: ProductData
}

const ProductTabs: FC<Props> = ({ productDetials }) => {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabs(ev: MouseEvent<HTMLButtonElement>) {
    // @ts-ignore
    setActiveTab(+ev.target.value);
  }
  return (
    <Box>
      <Tabs handleTabs={handleTabs} activeTab={activeTab} />
      {activeTab === 1 && <ProductDescription productDetials={productDetials} />}

      {activeTab === 2 && (
        <Typography
          sx={{
            fontSize: '13px',
            lineHeight: '16px',
            letterSpacing: '0.2px',
            mb: 2,
          }}
        >
          history
        </Typography>
      )}
      {activeTab === 3 && (
        <Typography
          sx={{
            fontSize: '13px',
            lineHeight: '16px',
            letterSpacing: '0.2px',
            mb: 2,
          }}
        >
          history
        </Typography>
      )}
    </Box>
  );
};

export default ProductTabs;
