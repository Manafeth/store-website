import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import OrderTabs from "../../components/OrderTabs";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";

const ProfileOrders = () => {
  const [t] = useTranslation();
  return (
    <MainLayout>
       <ProfileLayout>
        <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{ mb: 5, fontWeight: "bold", fontSize: { xs: '28px', md: '34px' } }}
            >
              {t('settings.myOrders')}
            </Typography>
            <OrderTabs/>
          </Box>
       </ProfileLayout>
    </MainLayout>
  );
};

export default ProfileOrders;
