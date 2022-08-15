import React, { FC } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import closeIcon from "../../assets/images/icons/close-icon.png";
import CartItem from "../CartItem";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';


interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: FC<Props> = ({ open, onClose }) => {
  function handleClose() {
    onClose();
  }
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { width: { xs: "100%", md: "700px" }, px: { xs: 3, sm: 4, lg: 6 } },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: "40px",
          pb: 7,
        }}
      >
        <Typography variant="h1" component="h2">
        My bag (2)
        </Typography>
        <Box onClick={onClose}>
          <Image src={closeIcon} alt="close icon" width="24" height="24" />
        </Box>
      </Box>
      <Box>
        <CartItem />
        <Divider sx={{mt:3, mb:3}}/>
      </Box>
      <Box  
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 3
      }}>
         <Typography variant='h5' component='h1'>
         Subtotal
      </Typography>
      <Typography variant='h5' component='h1' sx={{fontWeight:'700'}}>
      SAR 4,557.32
      </Typography>

      </Box>
      <Box  
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 3
      }}>
         <Typography variant='h5' component='h1'>
         Estimated Delivery & Handling
      </Typography>
      <Typography variant='h5' component='h1' sx={{fontWeight:'700'}}>
      SAR 10
      </Typography>

      </Box>
      <Box  
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 3
      }}>
         <Typography variant='h5' component='h1'>
         Total
      </Typography>
      <Typography variant='h5' component='h1' sx={{fontWeight:'700'}}>
      SAR 4,567.32
      </Typography>

      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          pt: 7,
          pb: 5,
        }}
      >
        <Button
          variant='contained'
          color='secondary'
          sx={{
            color: 'secondary.contrastText',
            width: 'auto',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
        >
          Continue shopping
        </Button>
        <Button variant='contained' sx={{  width: 'auto',
            height: '44px',}} type='submit'>
          Continue to payment
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
