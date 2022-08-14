import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import ProductItem from "../../components/ProductItem";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";

const WishListProduct = () => {
  return (
    <MainLayout>
       <ProfileLayout>
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
       </ProfileLayout>
    </MainLayout>
  );
};

export default WishListProduct;
