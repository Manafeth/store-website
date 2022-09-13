import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "next-i18next";
import OrderTabs from "../../components/OrderTabs";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
              {t('settings:myOrders')}
            </Typography>
            <OrderTabs/>
          </Box>
       </ProfileLayout>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && await serverSideTranslations(locale, ['settings', 'common', 'cart', 'auth']))
    },
    revalidate: 10,
  }
}

export default ProfileOrders;
