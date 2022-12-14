import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import closeIcon from '../../../../assets/images/icons/close-icon.png';
import AddIcon from '../../../../assets/images/icons/add-icon.svg';
import CheckIcon from '../../../../assets/images/icons/checked-icon.svg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useProfile } from '../../../../contexts/ProfileContext';
import { AddressData } from '../../../../types/profile';
import { GOOGLE_MAP_KEY, LOADING, SUCCESS } from '../../../../constants';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import GoogleMap from '../../../GoogleMap';
import Marker from '../../../Marker';
import useTranslation from "next-translate/useTranslation";
import LoadingButton from '@mui/lab/LoadingButton';
import { addressTagsEnums } from '../../../../constants/statuses';
import CitiesDropDown from '../../../CitiesDropDown';


interface Props {
  open: boolean;
  onClose: () => void;
  selectedAddress?: AddressData | undefined;
}

const AddressDrawer: FC<Props> = ({ open, onClose, selectedAddress }) => {
  const {
    createAddressStatus,
    triggerCreateAddress,
    updateAddressData,
    updateAddressStatus,
    getAddressDetails,
    addressDetails,
  } = useProfile();
  const { countryData } = useProfile();

  const initialState = {
    id: 0,
    cityId: 0,
    address: '',
    street: '',
    type: 2,
    latitude: 0,
    longitude: 0,
  };

  const [state, setState] = useState<AddressData>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [country, setCountry] = useState(0);
  const {t: CT, lang} = useTranslation('common');
  const {t: ST} = useTranslation('settings');
  const renderMarker = state.latitude > 0 && state.longitude > 0;
  const loading =
    createAddressStatus === LOADING || updateAddressStatus === LOADING;

    useEffect(() => {
      if (selectedAddress && selectedAddress.id && open)
        getAddressDetails(selectedAddress.id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAddress, open]);
  
    useEffect(() => {
      if (addressDetails) {
        setState((prevState) => ({
          ...prevState,
          address: addressDetails.address,
          street: addressDetails.street,
          cityId: addressDetails.cityId,
          type: addressDetails.type,
          latitude: addressDetails.latitude,
          longitude: addressDetails.longitude,
        }));
        if (addressDetails?.countryId)
          setCountry(addressDetails.countryId)
      }
    }, [addressDetails]);
  
    useEffect(() => {
      if (createAddressStatus === SUCCESS) {
        handleClose();
        setIsSubmitted(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createAddressStatus]);
  
    useEffect(() => {
      if (updateAddressStatus === SUCCESS) {
        handleClose();
        setIsSubmitted(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateAddressStatus]);


  function handleClose() {
    onClose();
    setState(initialState);
  }

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  }

  function renderMapStatus(status: Status) {
    return <h1>{status}</h1>;
  }
  // eslint-disable-next-line no-undef
  function handleMapClick(ev: google.maps.MapMouseEvent) {
    setState((prevState) => ({
      ...prevState,
      latitude: ev.latLng.lat(),
      longitude: ev.latLng.lng(),
    }));
  }

  function isFormValid() {
    return state.address && state.street && state.cityId;
  }

  function createAddress() {
    if (!isFormValid()) setIsSubmitted(true);
    else {
      const payload = {
        ...state,
      };
      delete payload?.id;
      triggerCreateAddress(payload)
        .then(() => {
          setState(initialState);
          setIsSubmitted(false);
        })
        .catch(() => {
          setIsSubmitted(false);
        });
    }
  }

  function updateAddress() {
    if (!isFormValid()) setIsSubmitted(true);
    else {
      const payload = {
        ...state,
        id: selectedAddress?.id,
      };
      updateAddressData(payload)
        .then(() => {
          setIsSubmitted(false);
          setState((prevState) => ({
            ...prevState,
          }));
          setState(initialState);
        })
        .catch(() => {
          setIsSubmitted(false);
        });
    }
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (selectedAddress) {
      updateAddress();
    } else {
      createAddress();
    }
  }


  function  handleSelectAddressTag(id: number) {
    setState((prevState) => ({
      ...prevState,
      type: id,
    }));
  }

  function handleCountry(ev: ChangeEvent<HTMLInputElement>) {
    setCountry(+ev.target.value);
  }

  useEffect(() => {
    if (countryData.length > 0) {
      setCountry(countryData[0].id)
    }
  }, [countryData])
  

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { width: { xs: '100%', md: '700px' }, px: { xs: 3, sm: 4, lg: 6 } },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: '40px',
          pb: 7,
        }}
      >
        <Typography variant='h2' component='h2' sx={{fontFamily: lang === 'en' ? 'Urbanist' : ''}}>
          {!selectedAddress ? ST('addNewAddress') : ST('updateAddress')}
        </Typography>
        <IconButton onClick={handleClose}>
          <Image src={closeIcon} alt='close icon' width='24' height='24' />
        </IconButton>
      </Box>

      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3.5 }}>
          {addressTagsEnums.map((item) => {
            const isActive = item.value === state.type 
            return (
              <Button
                variant={isActive ? 'outlined' : 'contained'}
                sx={{ width: 'auto', height: '44px',fontSize:'12px',fontWeight:'400' }}
                key={item.value}
                endIcon={
                  isActive ? (
                    <Image
                      src={CheckIcon}
                      width='14'
                      height='14'
                      alt='check icon'
                    />
                  ) : (
                    <Image
                      src={AddIcon}
                      width='12'
                      height='12'
                      alt='add icon'
                    />
                  )
                }
                color={isActive ? 'primary' : "secondary"}
                onClick={function testddd() {
                  if (!isActive)
                    handleSelectAddressTag(item.value);
                }}
              >
                {CT(item.label)}
              </Button>
            )
          })}
        </Box>
        <Box
          component='label'
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            fontSize:'14px',
            marginTop: '16px',
            fontFamily: lang === 'en' ? 'Urbanist' : ''
          }}
        >
          {ST('address')}
        </Box>
        <TextField
          variant='standard'
          placeholder={ST('address')}
          name='address'
          value={state.address}
          sx={{ mb: 3 }}
          onChange={handleInput}
          error={isSubmitted && !state.address}
        />

        <Box
          component='label'
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
            fontSize:'14px',
            fontFamily: lang === 'en' ? 'Urbanist' : ''
          }}
        >
          {ST('street')}
        </Box>

        <TextField
          variant='standard'
          placeholder='Street'
          name='street'
          value={state.street}
          error={isSubmitted && !state.street}
          sx={{ mb: 3 }}
          onChange={handleInput}
        />

        <Box
          component='label'
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
            fontSize:'14px',
            fontFamily: lang === 'en' ? 'Urbanist' : ''
          }}
        >
          {ST('country')}
        </Box>

        <TextField
          select
          variant='standard'
          margin='normal'
          sx={{ mb: 4 }}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleCountry}
          name='country'
          value={country}
        >
          <MenuItem value={0} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
            {CT('selectItem')}
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
          component='label'
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
            fontSize:'14px',
            fontFamily: lang === 'en' ? 'Urbanist' : ''
          }}
        >
          {ST('city')}
        </Box>

        <CitiesDropDown cityId={state.cityId || 0} isInValid={isSubmitted} countryId={country || 0} sx={{ mb: 6 }} setState={setState} />

        <Box sx={{ mb: 5 }}>
          <Wrapper apiKey={GOOGLE_MAP_KEY || ''} render={renderMapStatus}>
            <GoogleMap
              sx={{ height: '300px' }}
              center={{ lat: 23.52893742654533, lng: 43.5331634510418 }}
              zoom={4}
              onClick={handleMapClick}
            >
              {renderMarker ? (
                <Marker
                  position={{
                    lat: state.latitude,
                    lng: state.longitude,
                  }}
                  // icon={mapMarkupIcon}
                />
              ) : (
                <span />
              )}
            </GoogleMap>
          </Wrapper>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'space-between', sm: 'flex-start' },
            pt: 7,
            pb: 5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-between', sm: 'flex-end' },
              pt: 7,
              pb: 5,
            }}
          >
            <Button
              variant='contained'
              color='secondary'
              sx={{
                color: 'secondary.contrastText',
                width: '135px',
                height: '46px',
                backgroundColor: ' background.grayDisabled',
                mr: '20px',
              }}
              onClick={handleClose}
            >
              {CT('cancel')}
            </Button>

            <LoadingButton
              variant='contained'
              sx={{ width: 'auto', height: '44px',
              "&:hover": {
                backgroundColor: "primary.hover"
              } }}
              type='submit'
              loading={loading}
            >
              {!selectedAddress
                ? ST('addNewAddress')
                : ST('updateAddress')}
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddressDrawer;
