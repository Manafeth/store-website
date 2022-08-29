import React, { FC } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FormLabel } from '@mui/material';
import { ProductAttributesData, ProductByCategoryParams } from '../../../../types/products';

interface Props {
  data: ProductAttributesData,
  onClick: (id: number) => void,
  params: ProductByCategoryParams
}

const ColorFilter: FC<Props> = ({ data, onClick, params }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        ml: 2,
      }}
    >
       <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{
          color: 'text.primary',
          fontWeight: '700',
          fontSize: '16px',
          my: 3,
        }}
      >
        {data.nameEn}
      </FormLabel>
      {data.options.map((item) => {
        return (
          <IconButton
            sx={{ display: 'flex', alignItems: 'center', borderRadius: 0, p: 0, textAlign: 'left', justifyContent: 'flex-start', backgroundColor: params.options?.includes(item.id || 0) ? 'secondary.main' : '' }}
            key={item.id}
            onClick={function () {
              if (item.id)
                onClick(item.id)
            }}
          >
            <Box
              sx={{
                backgroundColor: item.nameEn,
                width: 30,
                height: 30,
                borderRadius: '50%',
                mr: 0.75,
                border: '2px solid #FFFFFF',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Typography
              variant='h5'
              component='h1'
              sx={{ color: 'grey.2200', fontWeight: '700' }}
            >
              {item.nameEn}
            </Typography>
          </IconButton>
        )
      })}
    </Box>
  );
};

export default ColorFilter;
