import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import cartplaceHolder from '../../assets/images/cart-placeHolder.png';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const CartItem = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '50px' }}>
        <Image src={cartplaceHolder} alt='cart image' />
        <Box>
          <Typography
            variant='h5'
            component='h1'
            sx={{ mb: 2, fontWeight: '700', mt: 2 }}
          >
            Sketchers GOAL Pant
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5' component='h1' sx={{ mb: 2 }}>
              Home decore
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ mb: 2, fontWeight: '800' }}
              >
                2X
              </Typography>
            </Box>
          </Box>
          <Typography variant='h2' component='h1'>
            SAR 1,139.33
          </Typography>
        </Box>
      </Box>
      <Grid container spacing='40px' sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            label='Size : L'
            fullWidth
            margin='normal'
            name='cityId'
            sx={{ mb: 4 }}
          >
            <MenuItem value={0}>test</MenuItem>

            <MenuItem value={1}></MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            select
            variant='outlined'
            label='Qty : 1'
            fullWidth
            margin='normal'
            name='cityId'
            sx={{ mb: 4 }}
            inputProps={{ style: { fontSize: '16px', fontWeight: '700' } }}
          >
            <MenuItem value={0}>test</MenuItem>

            <MenuItem value={1}></MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
