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
import { useTranslation } from "react-i18next";

interface Props {
  customerData: customerData;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  setState: Dispatch<SetStateAction<customerData>>;
  state: customerData;
  loading: boolean;
}

const EditAccount: FC<Props> = ({
  customerData,
  handleSubmit,
  setState,
  state,
  loading,
}) => {
  const [image, setImage] = useState('');
  const [t] = useTranslation();

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
    console.log(ev.target.name);
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
    >
      <Typography variant='h1' component='h1' sx={{ mb: 5, fontSize: { xs: '28px', md: '34px' } }}>
        {t('settings.editAccount')}
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
          src={
            state.imageFile
              ? URL.createObjectURL(state.imageFile)
              : customerData?.imageFilePath?.thumbUrl || ''
          }
          alt='product'
          sx={{ width: '100', height: '100' }}
        ></Avatar>
        <Button
          variant='outlined'
          component='label'
          sx={{ fontSize: '14px', color: 'grey.2000', fontWeight: '400' }}
          endIcon={<Image src={uploadIcon} alt='upload Iocn' />}
        >
          {t('settings.uploadPhoto')}
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
      {t('common.fullName')}
      </Box>
      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder={customerData.fullName}
        name='fullName'
        onChange={handleInput}
        InputProps={{
          style: {
            fontSize: '14px',
            fontWeight: '400',
            color: 'grey.1800',
          },
        }}
      />
      <Typography variant='h1' component='h2' sx={{ mb: 3, mt: 3, fontSize: { xs: '28px', md: '34px' } }}>
        {t('common.contact')}
      </Typography>
      <Box component='label'
        sx={{ color: 'primary.dark', fontWeight: '500', mt: 2 }}
      >
          {t('common.email')}
      </Box>

      <TextField
        id='outlined-basic'
        variant='outlined'
        placeholder={customerData.email}
        name='email'
        onChange={handleInput}
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
          {t('common.phoneNumber')}
      </Box>

      <PhoneNumberInput
        sx={{ mb: 3, fontSize: '14px', fontWeight: '400', color: 'grey.1800' }}
        onChange={handlePhoneInput}
        value={{ phoneNumber: state.phoneNumber, countryId: state.countryId }}
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
          sx={{ width: 'auto', height: '44px' }}
          type='submit'
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={25} color='info' />
          ) : (
            t('common.saveChanges')
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default EditAccount;
