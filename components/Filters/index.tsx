import React, { ChangeEvent, FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterUtils from './components/SerachFilter';
import MenuItemFilter from './components/MenuItemFilter';
import CheckboxFilter from './components/CheckboxFilter';
import ColorFilter from './components/ColorFilter';
import RadioButtonFilter from './components/RadioButtonFilter';
import FilterByPrice from './components/PriceFilter';
import Divider from '@mui/material/Divider';
import TagFilter from './components/TagFilter';



const Filters = () => {

  return (
    <>
    <Box sx={{ display: 'flex' , flexDirection:'column' }}>
                  <Typography
                    variant='h5'
                    component='h1'
                    sx={{ fontWeight: '700' }}
                  >
                    Filter :
                  </Typography>
                  <FilterUtils />
                </Box>
                <MenuItemFilter/>
                <Divider sx={{ mb: 3 }} />
                <CheckboxFilter />
                <Divider sx={{ mb: 3, mt: 3 }} />
                <ColorFilter/>
                <Divider sx={{ mb: 3, mt: 3 }} />
                <RadioButtonFilter />
                <Divider sx={{ mb: 3, mt: 3 }} />
                <TagFilter/>     
                <Divider sx={{ mb: 3, mt: 3 }} />
                <FilterByPrice/>
                </>
    
  );
};

export default Filters;
