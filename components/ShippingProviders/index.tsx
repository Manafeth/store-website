import React, { FC, FormEvent, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShippingCard from './components/ShippingCard';

interface Props {
  handleNext: () => void;
}

const ShippingProviders: FC<Props> = ({ handleNext }) => {
  const [selectedId, setSelectedId] = useState();
  function handleClick() {
    console.log('hello')
  }
  
  return (
    <Box>
           <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
         Shipping Providers
      </Typography>
      <Typography variant='h4' component='h1' sx={{ mb: 2, width:'70%' }}>
      These are available shipping methods, please select suitable one for you
      </Typography>
      <ShippingCard 
      selectedId={selectedId}
      title="test"
      id={1}
      handleClick={handleClick}/>
       <ShippingCard 
      selectedId={selectedId}
      title="test2"
      id={2}
      handleClick={handleClick}/>
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
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default ShippingProviders