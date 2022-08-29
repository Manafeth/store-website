import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { addressData, addressDetailsData } from '../../types/profile';
import { useProfileModal } from '../../contexts/ProfileContext';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import deleteIcon from '../../assets/images/icons/delete-icon.svg';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteConfirmationMdoal from '../DeleteConfirmation';
interface Props {
  // data: addressData;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  isSubmitted: boolean;
  accountAddressData: addressDetailsData;
  setAccountAddressData: Dispatch<SetStateAction<addressDetailsData>>;
  isEditMode: boolean;
  loading: boolean;
}

const AddressManagment: FC<Props> = ({
  handleSubmit,
  isSubmitted,
  accountAddressData,
  setAccountAddressData,
  isEditMode,
  loading
}) => {
  const {
    fetchAllAddressData,
    addressDetailsData,
    cityData,
    fetchAllCityData,
    fetchAllCountryData,
    countryData,
    addressData,
    deleteAddressData
  } = useProfileModal();
  const [deleteConfirmationActive, setDeleteConfirmationState] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<addressData>();
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
  function handleDeleteConfirmationClose() {
    setDeleteConfirmationState(false);
  }
  function HandleRemoveCustomer() {
  
      // deleteAddressData(selectedAddress.id).then(()=>{

      // }).catch(()=>{

      // })
 
  }
  function handleDeleteConfirmationOpen() {
    setDeleteConfirmationState(true);
  }
  function handleDelete() {
    // setSelectedAddress(id);
    handleDeleteConfirmationOpen();   
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
        return( 
          // eslint-disable-next-line react/jsx-key
          <Box sx={{display:'flex', justifyContent: 'space-between',
          alignItems: 'center'}}>
        <Typography key={item.id}>{item.address}</Typography>
        <IconButton onClick={handleDelete}>
        <Image src={deleteIcon} width='14' height='14' alt='close icon' />
        </IconButton> 
        </Box>
        );
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
        name='cityId'
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
      > {!isEditMode ? (
        <>
        <Button
          variant='contained'
          sx={{ width: 'auto', height: '44px' }}
          type='submit'
          disabled={loading}
        >
           {loading ? <CircularProgress size={25} color="info" /> : 'Add new address'}
        </Button>
        </>
         ) : (
          <>
            <Button color="secondary" variant="contained" sx={{ minWidth: 135, mr: '20px' }}>
            Cancel
            </Button>
            <Button variant="contained" sx={{ minWidth: 135, }} type="submit">
              update
            </Button>
          </>
        )}
      </Box>
      <DeleteConfirmationMdoal
        open={deleteConfirmationActive}
        onClose={handleDeleteConfirmationClose}
        handleRemove={HandleRemoveCustomer}
      />
    </Box>
  );
};

export default AddressManagment;
