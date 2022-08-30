import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
} from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import closeIcon from '../../../../assets/images/icons/close-icon.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { useProfileModal } from '../../../../contexts/ProfileContext';
import { addressData} from '../../../../types/profile';
import { GOOGLE_MAP_KEY } from '../../../../constants';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import GoogleMap from '../GoogleMap';
import Marker from '../Marker';
import mapMarkupIcon from '../../../../assets/images/icons/map-markup.svg';

interface Props {
  open: boolean;
  onClose: () => void;
  setAccountAddressData: Dispatch<SetStateAction<addressData>>;
  accountAddressData: addressData;
  isSubmitted: boolean;
  isEditMode: boolean;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  handleClose?: () => void;
  addressDetails:addressData;
}

const AddressDrawer: FC<Props> = ({
  open,
  onClose,
  setAccountAddressData,
  accountAddressData,
  isSubmitted,
  isEditMode,
  loading,
  handleSubmit,
  handleClose,
  addressDetails
  
}) => {
  const { cityData, countryData } =
    useProfileModal();
    const renderMarker =
    addressDetails.latitude > 0 && addressDetails.longitude > 0;

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    setAccountAddressData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  }
  function renderMapStatus(status: Status) {
    return <h1>{status}</h1>;
  }
  // eslint-disable-next-line no-undef
  function handleMapClick(ev: google.maps.MapMouseEvent) {
    setAccountAddressData((prevState) => ({
      ...prevState,
      latitude: ev.latLng.lat(),
      longitude: ev.latLng.lng(),
    }));
  }
 
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
        <Typography variant="h2" component="h2">{!isEditMode ? 'Add new address' : 'Update address'}</Typography>
        <IconButton onClick={onClose}>
          <Image src={closeIcon} alt='close icon' width='24' height='24' />
        </IconButton>
      </Box>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <label
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
          }}
        >
          {' '}
          Address
        </label>
        <TextField
          variant='standard'
          placeholder='Address'
          name='address'
          value={accountAddressData.address}
          sx={{ mb: 3 }}
          onChange={handleInput}
          error={isSubmitted && !accountAddressData.address}
        />

        <label
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
          }}
        >
          Street
        </label>
        <TextField
          variant='standard'
          placeholder='Street'
          name='street'
          value={accountAddressData.street}
          error={isSubmitted && !accountAddressData.street}
          sx={{ mb: 3 }}
          onChange={handleInput}
        />
        <label
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
          }}
        >
          City
        </label>
        <TextField
          select
          variant='standard'
          margin='normal'
          sx={{ mb: 4 }}
          value={cityData.length > 0 ? accountAddressData?.cityId : 0}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleInput}
          error={isSubmitted && !accountAddressData.cityId}
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
          style={{
            color: 'primary.dark',
            fontWeight: '500',
            marginTop: '16px',
          }}
        >
          Country
        </label>
        <TextField
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
                    lat: addressDetails.latitude,
                    lng: addressDetails.longitude,
                  }}
                  icon={mapMarkupIcon}
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
          {' '}
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
                  cancel
                </Button>
                {!isEditMode ? (
                <Button
                  variant='contained'
                  sx={{ width: 'auto', height: '44px' }}
                  type='submit'
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={25} color='info' />
                  ) : (
                    'Add new address'
                  )}
                </Button>
                ):(
              <Button variant='contained' sx={{ width: 'auto', height: '44px' }} type='submit'  disabled={loading}>
              {loading ? (
                    <CircularProgress size={25} color='info' />
                  ) : (
                    'update address'
                  )}
              </Button>
                )}
                </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddressDrawer;
