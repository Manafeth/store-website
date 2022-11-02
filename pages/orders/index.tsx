import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import useTranslation from 'next-translate/useTranslation';
import OrderTabs from "../../components/OrderTabs";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";

const ProfileOrders = () => {
  const {t} = useTranslation('settings');
  return (
    <MainLayout>
       <ProfileLayout>
        <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{ mb: 5, fontWeight: "bold", fontSize: { xs: '28px', md: '34px' } }}
            >
              {t('myOrders')}
            </Typography>
            <OrderTabs/>
          </Box>
       </ProfileLayout>
    </MainLayout>
  );
};

export default ProfileOrders;
