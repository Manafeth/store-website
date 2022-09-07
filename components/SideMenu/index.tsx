/* eslint-disable react/jsx-key */

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import paths from '../../constants/paths';
import { useAuthModal } from '../../contexts/AuthModalContext';
import { useProfileModal } from '../../contexts/ProfileContext';
import ListMenuItem from './components/ListMenuItem';
import { useTranslation } from "react-i18next";


const SideMenu = () => {
  const { logout } = useAuthModal();
  const [t] = useTranslation();
  const { fetchCustomerProfileData, customerData } = useProfileModal();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetchCustomerProfileData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const listItemSideBar = [
    { id: 1, name: t('settings.editAccount'), link: paths.editAccount },
    { id: 2, name: t('settings.orders'), link: paths.profileOrders},
    { id: 3, name: t('settings.wishlist'), link: paths.whishList},
    { id: 4, name: t('settings.setting'), link: paths.addressSettings },
    { id: 5, name: t('settings.logout'), onClick: logout},
  ];
  return (
    <Box sx={{ minHeight: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pr: 2,
          mb: {xs: 3, md: 5},
          gap: '30px'
        }}
      >
        <Avatar  src={customerData?.imageFilePath?.thumbUrl || ''}></Avatar>
        <Typography
          variant='h2'
          component='h1'
          sx={{ fontWeight: 'bold' }}
        >
         {customerData.fullName}
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

export default SideMenu;
