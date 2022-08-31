/* eslint-disable react/jsx-key */

import { FC } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import FilterMenuItem from './component/FilterMenuItem';
import { CategoryData } from '../../../../types/categories';
import paths from '../../../../constants/paths';
interface Props {
  categories: CategoryData[]
}

const MenuItemFilter: FC<Props> = ({ categories }) => {
  return (
    <Box>
      <Typography
        variant='h6'
        component='h1'
        sx={{ fontWeight: 'bold', ml: 2 }}
      >
        Accessories
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {categories?.map((item) => (
          <FilterMenuItem data={{...item, link: paths.categoryDetails(item.id)}} key={item.id} />
        ))}
      </List>
    </Box>
  );
};

export default MenuItemFilter;
