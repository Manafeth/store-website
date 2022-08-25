import React, { ChangeEvent, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import uploadIcon from '../../assets/images/icons/upload-icon.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useProfileModal } from '../../contexts/ProfileContext';
import Avatar from '@mui/material/Avatar';
import PhoneNumberInput from '../PhoneNumberInput';
import { customerData } from '../../types/profile';

const EditAccount = () => {
  const { fetchCustomerProfileData, customerData } = useProfileModal();
  // const [state, setState] = useState<customerData>();

  useEffect(() => {
    fetchCustomerProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    // setState((prevState: any) => ({
    //   ...prevState,
    //   [ev.target.name]: ev.target.value,
    // }));
    console.log(ev.target.name);
  }
  function handlePhoneInput(data: { countryId: number; phoneNumber: string }) {
   
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
        Edit Account
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          gap: '30px',
          mb: 4,
        }}
      >
        <Avatar
          src={customerData.imageFilePath?.orignialUrl || ''}
          alt='product'
          sx={{ width: '100', height: '100' }}
        >
        </Avatar>
        <Button
          variant='outlined'
          component='label'
          sx={{ fontSize: '14px', color: 'grey.2000', fontWeight: '400' }}
          endIcon={<Image src={uploadIcon} alt='upload Iocn' />}
        >
          Upload Photo (Max 1 Mb)
          <input hidden accept='image/*' multiple type='file' />
        </Button>
      </Box>
      <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500' }}>
        Full Name
      </InputLabel>
      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder={customerData.fullName}
        name='firstName'
      />
      <Typography variant='h1' component='h1' sx={{ mb: 3, mt: 3 }}>
        Contact
      </Typography>
      <InputLabel
        shrink
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
        Email
      </InputLabel>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder={customerData.email}
        name='email'
        sx={{ mb: 3 }}
      />
      <InputLabel shrink sx={{ color: 'primary.dark', fontWeight: '500', mt:1 }}>
        Phone Number
      </InputLabel>
   
         <PhoneNumberInput
          sx={{ mb: 3 }}
          onChange={handlePhoneInput}
          value={{ countryId: customerData.countryId,phoneNumber: customerData.phoneNumber }}
        />
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
            width: '92px',
            height: '44px',
            backgroundColor: ' background.grayDisabled',
            mr: '20px',
          }}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          sx={{ width: 'auto', height: '44px' }}
          type='submit'
        >
          save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditAccount;
