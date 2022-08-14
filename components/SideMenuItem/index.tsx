/* eslint-disable react/jsx-key */
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import paths from '../../constants/paths';
import ListMenuItem from './components/ListMenuItem';


const SideMenuItem = () => {
  const listItemSideBar = [
    { id: 1, name: 'Edit Account',link: paths.editAccount },
    { id: 2, name: 'Orders',link: paths.profileOrders},
    { id: 3, name: 'Wishlist',link: paths.whishList},
    { id: 4, name: 'Setting',link: paths.addressSettings },
    { id: 5, name: 'Logout',link: ''},
  ];
  return (
    <Box sx={{ minHeight: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pr: 2,
          mb: 5,
          gap:'30px'
        }}
      >
        <Avatar>A</Avatar>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold" }}
        >
          Ahmed Shalayel
        </Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {listItemSideBar?.map((item) => (
          <ListMenuItem data={item} key={item.id} />
        ))}
      </List>
    </Box>
  );
};

export default SideMenuItem;
