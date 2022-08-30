import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { addressData } from '../../types/profile';
import { useProfileModal } from '../../contexts/ProfileContext';
import Image from 'next/image';
import deleteIcon from '../../assets/images/icons/delete-icon.svg';
import editIcon from '../../assets/images/icons/edit-icon.svg';
import addIcon from '../../assets/images/icons/add-icon.svg';
import DeleteConfirmationMdoal from '../DeleteConfirmation';
import AddressDrawer from './components/AddressDrawer';
import { LOADING, SUCCESS } from '../../constants';
import DataTable from './components/DataTable';

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
  const [accountAddressData, setAccountAddressData] =useState<addressData>(initialState);
  const [deleteConfirmationActive, setDeleteConfirmationState] =useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<addressData>();
  const {
    fetchAllAddressData,
    fetchAllCityData,
    fetchAllCountryData,
    countryData,
    addressData,
    deleteAddressData,
    createAddressStatus,
    triggerCreateAddress,
    removeStatus,
    updateAddressData,
    updateAddressStatus,
    getAddressDetails,
    addressDetails  
  } = useProfileModal();
  function isFormValid() {
    return (
      accountAddressData.address &&
      accountAddressData.street &&
      accountAddressData.cityId
    );
  }

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
 
  function handleClose() {
    setAccountAddressData(initialState);
    onClose();
  }
  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
 return !isEditMode? createAddress():updateAddress()
  }
  function createAddress(){
    if (!isFormValid()) {
      const payload = {
        ...accountAddressData,
      };
      delete payload?.id;
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
  useEffect(() => {
    if (addressDetails) {
    setAccountAddressData((prevState) => ({
      ...prevState,
      address: addressDetails.address,
      street: addressDetails.street,
      cityId: addressDetails.cityId,
    }));
  }
  }, [addressDetails]);
  function updateAddress(){
    if (isFormValid()) {
    const payload = {
      ...accountAddressData,
      id:selectedAddress?.id,
    };
    updateAddressData(payload).then(() => {
        setIsSubmitted(false);
        setAccountAddressData((prevState) => ({
            ...prevState,
        }));
    }).catch(() => {
        setIsSubmitted(false);
    })
  }
  }
  useEffect(() => {
    if (createAddressStatus === SUCCESS) {
      onClose();
      setIsSubmitted(false);
    }
  }, [createAddressStatus]);

  useEffect(() => {
    if (updateAddressStatus === SUCCESS) {
      onClose();
      setIsSubmitted(false);
    }
  }, [updateAddressStatus]);

  function handleDeleteConfirmationClose() {
    setDeleteConfirmationState(false);
  }
  function HandleRemoveAddress() {
    if (selectedAddress && selectedAddress.id) {
      deleteAddressData(selectedAddress.id);
    }
  }
  useEffect(() => {
    if (selectedAddress && selectedAddress.id && open)
    getAddressDetails(selectedAddress.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddress, open]);

  function handleActions(_: undefined, row: any) {
    function handleEdit() {
      setSelectedAddress(row);
      setOpen(true);
      setIsEditMode(true);
    }

    function handleDelete() {
      setSelectedAddress(row);
      handleDeleteConfirmationOpen();
    }

    return (
      <>
          <Button size="small" sx={{ minWidth: 0, p: '5px', mr: '14px', color: 'text.primary' }} variant="contained" color="secondary" onClick={handleEdit}>
          <Image src={editIcon} width='14' height='14' alt='edit icon' />
          </Button>
          <Button size="small" sx={{ minWidth: 0, p: '5px' }} variant="contained" color="secondary" onClick={handleDelete}>
          <Image src={deleteIcon} width='14' height='14' alt='delete icon' />
          </Button>
      </>
    );
  }
  function handleDeleteConfirmationOpen() {
    setDeleteConfirmationState(true);
  }
  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }
  const columns: any[] = [];
  const fields: any[] = [
    { id: 1, field: 'address', alignment: 'left' },
    { id: 2, field: '', alignment: 'center', render: handleActions },
  ];
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
       <DataTable
        columns={columns}
        rowsData={addressData}
        rowFields={fields}
        keyField="id"
        noDataContent={
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
            <Typography variant="h2" sx={{ mb: '20px', fontWeight: 'bold' }}>
             OOPS!
            </Typography>
            <Typography variant="h5" sx={{ mb: '20px', fontWeight: 'bold' }}>
              There is no address to show, please add new address
            </Typography>
          </Box>
        }
      />

      <AddressDrawer
        onClose={onClose}
        open={open}
        setAccountAddressData={setAccountAddressData}
        accountAddressData={accountAddressData}
        isEditMode={isEditMode}
        loading={createAddressStatus === LOADING || updateAddressStatus === LOADING}
        isSubmitted={isSubmitted}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        addressDetails={addressDetails}
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
