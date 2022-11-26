import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import uploadIcon from '../../assets/images/icons/upload-icon.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import PhoneNumberInput from '../PhoneNumberInput';
import { customerData } from '../../types/profile';
import CircularProgress from '@mui/material/CircularProgress';
import useTranslation from 'next-translate/useTranslation';
import { useCommon } from '../../contexts/CommonContext';

interface Props {
  customerData: customerData;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  setState: Dispatch<SetStateAction<customerData>>;
  state: customerData;
  loading: boolean;
  isSubmitted: boolean;
}

const EditAccount: FC<Props> = ({
  customerData,
  handleSubmit,
  setState,
  state,
  loading,
  isSubmitted,
}) => {
  const [image, setImage] = useState('');
  const {t: CT} = useTranslation('common');
  const {t: ST} = useTranslation('settings');
  const { storeInfo } = useCommon()

  function handlePhoneInput({
    countryId,
    phoneNumber,
  }: {
    countryId: number;
    phoneNumber: string;
  }) {
    setState((prevState) => ({
      ...prevState,
      countryId: +countryId,
      phoneNumber: phoneNumber,
    }));
  }

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    setState((prevState: any) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  }

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setState((prevState) => ({
        ...prevState,
        imageFile: event.target.files && event.target.files[0],
      }));
    }
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      fullName: customerData.fullName,
      email: customerData.email,
      phoneNumber: customerData.phoneNumber,
      countryId: customerData.countryId || 0,
    }));
    setImage(customerData.imageFilePath?.thumbUrl || '');
  }, [customerData, setState]);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
      component='form'
      onSubmit={handleSubmit}
      noValidate
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5, fontSize: { xs: '28px', md: '34px' },fontFamily: 'Urbanist' }}>
        {ST('editAccount')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          gap: '50px',
          mb: 4,
        }}
      >
        <Avatar
          src={
            state.imageFile
              ? URL.createObjectURL(state.imageFile)
              : customerData?.imageFilePath?.thumbUrl || ''
          }
          alt='product'
          sx={{ width: 60, height: 60 }}
        ></Avatar>
        <Button
          variant='outlined'
          color='inherit'
          component='label'
          sx={{ fontSize: '14px', color: 'grey.2000', fontWeight: '400', width:'100%' }}
          endIcon={<Image src={uploadIcon} alt='upload Iocn'/>}
        >
          {ST('uploadPhoto')}
          <input
            hidden
            accept='image/*'
            multiple
            type='file'
            onChange={onImageChange}
          />
        </Button>
      </Box>
      <Box component='label' sx={{ color: 'primary.dark', fontWeight: '500' }}>
      {CT('fullName')}
      </Box>
      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder={customerData.fullName}
        value={state.fullName}
        name='fullName'
        onChange={handleInput}
        error={isSubmitted && !state.fullName}
        InputProps={{
          style: {
            fontSize: '14px',
            fontWeight: '400',
            color: 'grey.1800',
          },
        }}
      />
      <Typography variant='h1' component='h2' sx={{ mt: 3, fontSize: { xs: '28px', md: '34px' } }}>
        {CT('contact')}
      </Typography>
      <Box component='label'
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
          {CT('email')}
      </Box>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder={customerData.email}
        value={state.email}
        name='email'
        onChange={handleInput}
        error={isSubmitted && !state.email}
        sx={{ mb: 3 }}
        InputProps={{
          style: {
            fontSize: '14px',
            fontWeight: '400',
            color: 'grey.1800',
          },
        }}
      />
      <Box component='label'
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 1 }}
      >
          {CT('phoneNumber')}
      </Box>

      <PhoneNumberInput
        sx={{ mb: 3, fontSize: '14px', fontWeight: '400', color: 'grey.1800' }}
        onChange={handlePhoneInput}
        value={{ phoneNumber: state.phoneNumber, countryId: state.countryId }}
        countryError={isSubmitted && !state.countryId}
        error={isSubmitted && !state.phoneNumber}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          pt: 7,
          pb: 5,
        }}
      >
        {/* <Button
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
        </Button> */}
        <Button
          variant='contained'
          sx={{ width: 'auto', height: '44px', backgroundColor: storeInfo.buttonColor, color : storeInfo.buttonTitelColor,
          "&:hover": {
            backgroundColor: "primary.hover"
          }
         }}
          type='submit'
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={25} color='info' />
          ) : (
            CT('saveChanges')
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default EditAccount;
