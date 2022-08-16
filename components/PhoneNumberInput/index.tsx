import React, { FC} from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from 'next/image';
import arrowDown from '../../assets/images/icons/arrow-down.png';

interface Props {
  // onChange: (data: { country: string; number: string }) => void;
  sx?: {};
  error?: boolean;
  // value?: { country: any; number: string };
  countryError?: boolean;
  isDisabled?: boolean;
}

const PhoneNumberInput: FC<Props> = ({ sx, error, countryError, isDisabled }) => {

  return (
    <Box sx={sx || {}}>
      <FormControl variant="standard" sx={{ width: '150px' }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Phone"
          IconComponent="span"
          error={countryError}
          endAdornment={
            <Box sx={{ px: 1, minWidth: 32, minHeight: 16 }} component="span">
              <Image src={arrowDown} width='16' height='8' alt='arrow down' />
            </Box>
          }
          disabled={isDisabled}
        >
          <MenuItem value={0} disabled />
          <MenuItem>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
              {/* <img src={item.flag} alt="flag" width="32" height="22" /> */}
              <Box component="span" sx={{ ml: 2, fontWeight: 'bold' }}>
                test
              </Box>
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ width: 'calc(100% - 151px)' }}>
        <Input
          sx={{
            borderLeft: 1,
            borderColor: 'secondary.main',
            px: 2,
          }}
          error={error}
          inputProps={{ maxLength: 10 }}
          placeholder="05X XXX-XXX"
          disabled={isDisabled}
        />
      </FormControl>
    </Box>
  );
};


export default PhoneNumberInput;