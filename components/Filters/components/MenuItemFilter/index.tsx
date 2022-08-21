/* eslint-disable react/jsx-key */

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import paths from '../../../../constants/paths';
import FilterMenuItem from './component/FilterMenuItem';

const MenuItemFilter = () => {
  const listItemSideBar = [
    { id: 1, name: 'View All', link: '' },
    { id: 2, name: 'Bags', link: '' },
    { id: 3, name: 'Belts', link: '' },
    { id: 4, name: 'Cosmetics', link: '' },
    { id: 5, name: 'Bags', link: '' },
    { id: 5, name: 'Hats', link: '' },
  ];
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
        {listItemSideBar?.map((item) => (
          <FilterMenuItem data={item} key={item.id} />
        ))}
      </List>
    </Box>
  );
};

export default MenuItemFilter;
