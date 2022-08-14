import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import OrderTabs from "../components/OrderTabs";
import MainLayout from "../layouts/MainLayout";
import SettingLayout from "../layouts/SettingLayout";

const ProfileOrders = () => {
  return (
    <MainLayout>
       <SettingLayout>
       <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{ mb: 5, fontWeight: "bold" }}
                >
               My Orders
                </Typography>
                <OrderTabs/>
                
              </Box>
       </SettingLayout>

    </MainLayout>
  );
};

export default ProfileOrders;
