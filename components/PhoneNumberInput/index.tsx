import React, { ChangeEvent, FC, useEffect, useState} from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import arrowDown from '../../assets/images/icons/arrow-down.png';
import isNumeric from 'validator/lib/isNumeric';
import { getCountries } from '../../services/common.services';
import { CountryData } from '../../types/common';
import InputLabel from '@mui/material/InputLabel';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


interface Props {
  onChange: (data: { countryId: number; phoneNumber: string }) => void;
  sx?: {};
  error?: boolean;
  value?: { countryId: number; phoneNumber: string };
  countryError?: boolean;
  isDisabled?: boolean;
}

const PhoneNumberInput: FC<Props> = ({ onChange, value, sx, error, countryError, isDisabled }) => {
  const [countryId, setCountry] = useState(0);
  const [phoneNumber, setPhone] = useState('');
  const [countries, setCountires] = useState<CountryData[]>([]);
  const [isError, setIsError] = useState(false);

  function handleSelect(ev: SelectChangeEvent) {
    setCountry(+ev.target.value);
    onChange({
      countryId: +ev.target.value,
      phoneNumber: phoneNumber,
    });
  }

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    if (isNumeric(ev.target.value) || ev.target.value === '' || ev.target.value === null || (ev.target.value.length > 10)) {
      setPhone(ev.target.value);
      setIsError(true);
      onChange({
        countryId,
        phoneNumber: ev.target.value,
      });
    }
  }


  function fetchCountires() {
    getCountries().then((response) => {
      setCountires(response?.data?.data)
    })
  }

  useEffect(() => {
    if (value) {
      setCountry(value.countryId);
      setPhone(value.phoneNumber);
    }
  }, [value]);

  useEffect(() => {
    if (!value?.countryId && countries.length) {
      const countryID = countries[0]?.id;
      setCountry(countryID);
      onChange({
        countryId: countryID,
        phoneNumber: phoneNumber,
      });
    }
  }, [countries, onChange, phoneNumber, value]);

  useEffect(() => {
    fetchCountires()
  }, [])
  

  return (
    <Box sx={sx || {}}>
      <FormControl variant="standard" sx={{ width: '150px' }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Phone"
          error={countryError}
          IconComponent={ExpandMoreIcon}
          // endAdornment={
          //   <Box sx={{ px: 1, minWidth: 32, minHeight: 16 }} component="span">
          //     <Image src={arrowDown} width='16' height='8' alt='arrow down' />
          //   </Box>
          // }
          disabled={isDisabled}
          onChange={handleSelect}
          value={JSON.stringify(countryId)}
          inputProps={{
            sx: {
              pr: 1.25,
              pl: 2,
              textAlgin: 'center'
            }
          }}
          sx={{
            height: 40,
          }}
        >
          <MenuItem value={0} disabled />
          {countries.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id} sx={{ pr: 1.25 }}>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', justrifyContent: 'center' }}>
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.flag} alt="flag" width="32" height="22" />
                  <Box component="span" sx={{
                    ml: 1,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0.4px',
                  }}>
                    {item?.countryPrefix}
                  </Box>
                </Box>
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ width: 'calc(100% - 151px)' }}>
        <Input
          sx={{
            borderLeft: 1,
            borderColor: 'secondary.main',
            px: 2,
            height: 40
          }}
          error={error && isError && !phoneNumber}
          inputProps={{ maxLength: 9, minLength:9}}
          placeholder="05X XXX-XXX"
          disabled={isDisabled}
          onChange={handleInput}
          value={phoneNumber}
        />
      </FormControl>
    </Box>
  );
};


export default PhoneNumberInput;