import React, { ChangeEvent, FC } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import SearchIcon from '../../../../assets/images/icons/search-icon.svg';

interface Props {
  onSearch?: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const FilterUtils: FC<Props> = ({ onSearch }) => {
  let timer: ReturnType<typeof setTimeout>;
  function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (onSearch) onSearch(ev);
    }, 500);
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 3,
      }}
    >
      <FormControl sx={{ maxWidth: '206px', width: '100%' }} variant='outlined'>
        <OutlinedInput
          id='outlined-adornment-amount'
          startAdornment={
            <InputAdornment position='start'>
              <Image src={SearchIcon} alt='search' width='24' height='24' />
            </InputAdornment>
          }
          placeholder='search'
          sx={{
            height: 50,
            width: 186,
            borderRadius: '8px',
            fontSize: '12px',
            '& ::placeholder': {
              color: 'grey.2200',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '12px',
              letterSpacing: '0.12px',
            },
          }}
          onChange={handleSearch}
        />
      </FormControl>
    </Box>
  );
};

export default FilterUtils;
