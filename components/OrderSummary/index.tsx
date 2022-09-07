import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useCartModal } from "../../contexts/CartContext";

const OrderSummary = () => {
  const [t] = useTranslation();
  const { cartData } = useCartModal();
  // const calcPrice = (item) => {
  //   return item.reduce((accumulator, object) => {
  //     return accumulator + object.total;
  //   }, 0);
  // };


  return (
    <Box>
      {cartData?.map((item) => {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h5" component="h1">
                {t("cart.subTotal")}
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                sx={{ fontWeight: "700" }}
              >
                {t("common.sar")} 4,557.32
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h5" component="h1">
                {t("common.estimatedDelivery")}
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                sx={{ fontWeight: "700" }}
              >
                {t("common.sar")} 10
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h5" component="h1">
                {t("cart.total")}
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                sx={{ fontWeight: "700" }}
              >
                {t("common.sar")} 4,567.32 
              </Typography>
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default OrderSummary;
