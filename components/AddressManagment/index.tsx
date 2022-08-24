import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { addressData, addressDetailsData } from '../../types/profile';
import { useProfileModal } from '../../contexts/ProfileModalContext';
import MenuItem from '@mui/material/MenuItem';
interface Props {
  // data: addressData;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  isSubmitted: boolean;
  accountAddressData: addressDetailsData;
  setAccountAddressData: Dispatch<SetStateAction<addressDetailsData>>;
}

const AddressManagment: FC<Props> = ({
  handleSubmit,
  isSubmitted,
  accountAddressData,
  setAccountAddressData,
}) => {
  const {
    fetchAllAddressData,
    addressDetailsData,
    cityData,
    fetchAllCityData,
    fetchAllCountryData,
    countryData,
    addressData,
  } = useProfileModal();
  useEffect(() => {
    fetchAllAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchAllCityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchAllCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setAccountAddressData((prevState) => ({
      ...prevState,
      address: addressDetailsData.address,
      street: addressDetailsData.street,
      cityId: addressDetailsData.cityId,
    }));
  }, [addressDetailsData, setAccountAddressData]);
  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    setAccountAddressData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
        Address managment
      </Typography>
      <Box
        sx={{
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant='h2' component='span' sx={{ flex: '0.75' }}>
          Home address
        </Typography>
        {/* <Switch color='success' /> */}
      </Box>

      {addressData?.map((item) => {
        return <Typography key={item.id}>{item.address}</Typography>;
      })}

      <Divider sx={{ mb: 5, width: '80%' }} />
      <Typography variant='h2' component='h1' sx={{ mb: 3, mt: 3 }}>
        Add new address
      </Typography>
      <label
        style={{ color: 'primary.dark', fontWeight: '500', marginTop: '16px' }}
      >
        {' '}
        Address 
      </label>
      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Address'
        name='address'
        value={accountAddressData.address}
        sx={{ mb: 3 }}
        onChange={handleInput}
        error={isSubmitted && !accountAddressData.address}
      />

      <label
        style={{ color: 'primary.dark', fontWeight: '500', marginTop: '16px' }}
      >
        Street
      </label>
      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder='Street'
        name='street'
        value={accountAddressData.street}
        error={isSubmitted && !accountAddressData.street}
        sx={{ mb: 3 }}
        onChange={handleInput}
      />
      <label
        style={{ color: 'primary.dark', fontWeight: '500', marginTop: '16px' }}
      >
        City
      </label>
      <TextField
        id='outlined-basic'
        select
        variant='standard'
        margin='normal'
        sx={{ mb: 4 }}
        value={accountAddressData.cityId}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleInput}
        name='city'
      >
        <MenuItem value={0} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          Select Item
        </MenuItem>
        {cityData?.length > 0 &&
          cityData?.map((option) => (
            <MenuItem
              key={option.id}
              value={option?.id}
              sx={{ fontSize: '14px', fontWeight: 'bold' }}
            >
              {option?.name}
            </MenuItem>
          ))}
      </TextField>

      <label
        style={{ color: 'primary.dark', fontWeight: '500', marginTop: '16px' }}
      >
        Country
      </label>
      <TextField
        id='outlined-basic'
        select
        variant='standard'
        margin='normal'
        sx={{ mb: 4 }}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleInput}
        name='country'
      >
        <MenuItem value={0} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          Select Item
        </MenuItem>
        {countryData?.length > 0 &&
          countryData?.map((option) => (
            <MenuItem
              key={option.id}
              value={option?.id}
              sx={{ fontSize: '14px', fontWeight: 'bold' }}
            >
              {option?.name}
            </MenuItem>
          ))}
      </TextField>

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
          Add new address
        </Button>
      </Box>
    </Box>
  );
};

export default AddressManagment;