import React, {
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import { AddressData } from '../../types/profile';
import { useProfileModal } from '../../contexts/ProfileContext';
import Image from 'next/image';
import deleteIcon from '../../assets/images/icons/delete-icon.svg';
import editIcon from '../../assets/images/icons/edit-icon.svg';
import addIcon from '../../assets/images/icons/add-icon.svg';
import DeleteConfirmationMdoal from '../DeleteConfirmation';
import AddressDrawer from './AddressDrawer';
import { LOADING, SUCCESS } from '../../constants';
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation();
  const [deleteConfirmationActive, setDeleteConfirmationState] =useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressData>();

  const {
    fetchAllAddressData,
    fetchAllCityData,
    fetchAllCountryData,
    status,
    addressData,
    deleteAddressData,
    removeStatus,
  } = useProfileModal();

  function handleDeleteConfirmationOpen() {
    setDeleteConfirmationState(true);
  }

  function handleDeleteConfirmationClose() {
    setDeleteConfirmationState(false);
  }

  function HandleRemoveAddress() {
    if (selectedAddress && selectedAddress.id) {
      deleteAddressData(selectedAddress.id);
    }
  }

  function handleEdit(data: AddressData) {
    setSelectedAddress(data);
    setOpen(true);
  }

  function handleDelete(data: AddressData) {
    setSelectedAddress(data);
    handleDeleteConfirmationOpen();
  }

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
    setSelectedAddress(undefined);
  }

  useEffect(() => {
    fetchAllAddressData();
    fetchAllCityData(); 
    fetchAllCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (removeStatus === SUCCESS) {
      handleDeleteConfirmationClose();
    }
  }, [removeStatus]);


  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5, fontSize: { xs: '28px', md: '34px' }  }}>
        {t('settings.addressManagment')}
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
        <Typography variant='h2' component='span' sx={{ flex: '0.75', fontSize: { xs: '20px', md: '24px' }  }}>
          {t('settings.homeAddress')}
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
            fontSize: { xs: '12px', md: '14px' },
          }}
          onClick={onOpen}
        >
          {t('settings.addNewAddress')}
        </Button>
      </Box>

      {addressData.length > 0 ? addressData.map((item) => {
        return (
          <Card key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 2, px: 2, py: 1, mb: 2 }}>
            {item.address}
            <Box>
              <IconButton
                onClick={function () {
                  handleEdit(item)
                }}
              >
                <Image src={editIcon} width='14' height='14' alt='edit icon' />
              </IconButton>
              <IconButton
                onClick={function () {
                  handleDelete(item)
                }}
              >
                <Image src={deleteIcon} width='14' height='14' alt='delete icon' />
              </IconButton>
            </Box>
          </Card>
        )
      }) : (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
          <Typography variant="h2" sx={{ mb: '20px', fontWeight: 'bold' }}>
          {t('settings.oops')}
          </Typography>
          <Typography variant="h5" sx={{ mb: '20px', fontWeight: 'bold' }}>
          {t('settings.noAddress')}
          </Typography>
        </Box>
      )}

      <AddressDrawer
        onClose={onClose}
        open={open}
        selectedAddress={selectedAddress}
      />

      <DeleteConfirmationMdoal
        open={deleteConfirmationActive}
        onClose={handleDeleteConfirmationClose}
        handleRemove={HandleRemoveAddress}
        loading={removeStatus === LOADING}
      />
      
    </Box>
  );
};

export default AddressManagment;
