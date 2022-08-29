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
import addIcon from '../../assets/images/icons/add-icon.svg';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteConfirmationMdoal from '../DeleteConfirmation';
import { useAuthModal } from '../../contexts/AuthModalContext';
import AddressDrawer from './components/AddressDrawer';
import { LOADING, SUCCESS } from '../../constants';

const AddressManagment = () => {
  const initialState = {
    id: 0,
    cityId: 0,
    address: '',
    street: '',
    type: 0,
    latitude: 0,
    longitude: 0,
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [accountAddressData, setAccountAddressData] =
    useState<addressDetailsData>(initialState);
  function isFormValid() {
    return (
      accountAddressData.address &&
      accountAddressData.street &&
      accountAddressData.cityId
    );
  }
  const {
    fetchAllAddressData,
    addressDetailsData,
    cityData,
    fetchAllCityData,
    fetchAllCountryData,
    countryData,
    addressData,
    deleteAddressData,
    createAddressStatus,
    triggerCreateAddress,
  } = useProfileModal();

  const [deleteConfirmationActive, setDeleteConfirmationState] =
    useState(false);
  const [open, setOpen] = useState(false);
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

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    console.log('clicked');
    // updateAddressData(accountAddressData).then(() => {
    //     setIsSubmitted(false);
    //     setAccountAddressData((prevState) => ({
    //         ...prevState,
    //     }));
    // }).catch(() => {
    //     setIsSubmitted(false);
    // })

    if (isFormValid()) {
      const payload = {
        ...accountAddressData,
      };
      delete payload.id;
      triggerCreateAddress(payload)
        .then((response) => {
          console.log(response);
          setIsSubmitted(false);
        })
        .catch(() => {
          setIsSubmitted(false);
        });
    }
  }
  //   function handleClose() {
  //     setAccountAddressData(initialState)
  // }
  useEffect(() => {
    if (createAddressStatus === SUCCESS) {
      onClose();
      setIsSubmitted(false);
    }
  }, [createAddressStatus]);
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
  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
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
        Address managment
      </Typography>
      <Box
        sx={{
          pb: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h2' component='span' sx={{ flex: '0.75' }}>
          Home address
        </Typography>
        <Button
          variant='contained'
          color='primary'
          endIcon={
            <Image src={addIcon} width='14' height='14' alt='add icon' />
          }
          sx={{
            py: '11px',
            mr: { xs: 3, lg: 4 },
            width: 'auto',
            height: '38px',
            fontSize: '14px',
            '& .MuiButton-endIcon': {
              mr: '15px',
            },
          }}
          onClick={onOpen}
        >
          Add New Address
        </Button>
      </Box>

      {addressData?.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography key={item.id}>{item.address}</Typography>
            <IconButton onClick={handleDelete}>
              <Image src={deleteIcon} width='14' height='14' alt='close icon' />
            </IconButton>
          </Box>
        );
      })}

      <Divider sx={{ mb: 5, width: '80%' }} />

      <AddressDrawer
        onClose={onClose}
        open={open}
        setAccountAddressData={setAccountAddressData}
        accountAddressData={accountAddressData}
        isEditMode={isEditMode}
        loading={createAddressStatus === LOADING}
        isSubmitted={isSubmitted}
        handleSubmit={handleSubmit}
      />
      <DeleteConfirmationMdoal
        open={deleteConfirmationActive}
        onClose={handleDeleteConfirmationClose}
        handleRemove={HandleRemoveCustomer}
      />
    </Box>
  );
};

export default AddressManagment;
