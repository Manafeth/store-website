import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import ProductItem from "../components/ProductItem";
import MainLayout from "../layouts/MainLayout";
import SettingLayout from "../layouts/SettingLayout";

const WishListProduct = () => {
  return (
    <MainLayout>
       <SettingLayout>
       <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{ mb: 5, fontWeight: "bold" }}
                >
                  Wishlist Product
                </Typography>
                <ProductItem/>
              </Box>
       </SettingLayout>

    </MainLayout>
  );
};

export default WishListProduct;
