import React, { Dispatch, FC, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { SUCCESS } from '../../constants';
import { cityData } from '../../types/profile';
import { useProfile } from '../../contexts/ProfileContext';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  countryId?: number;
  isInValid: boolean;
  cityId: number;
  // eslint-disable-next-line no-unused-vars
  sx?: { [key: string]: any };
  setState: Dispatch<SetStateAction<any>>;
  disabled?: boolean;
  disableUnderline?: boolean;
  inputXs?: { [key: string]: any };
}
let timer: ReturnType<typeof setTimeout>;

const CitiesDropDown: FC<Props> = ({ countryId, isInValid, cityId, sx, setState, disabled, disableUnderline, inputXs }) => {
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const {
    fetchAllCityData,
    cityData
  } = useProfile();

  function fetchData(params?: { page?: number; searchKey?: string }) {
    if (countryId) fetchAllCityData({ countryId, page: params?.page || page, pageSize: 10, searchKey: params?.searchKey || searchKey });
    else fetchAllCityData({ page: params?.page || page, pageSize: 10, searchKey: params?.searchKey || searchKey });
  }
  useEffect(() => {
    setPage(1);
    fetchData({ page: 1 });
  }, [countryId]);

  function handleSelectInput(ev: SyntheticEvent, value: cityData | null) {
    setState((prevState: any) => ({
      ...prevState,
      cityId: value?.id,
    }));
  }

  const selectedCity = cityData.find((item) => item.id === cityId);

  function fetchMoreData() {
    setPage((prevState) => prevState + 1);
    fetchData({ page: page + 1 });
  }

  function handleSearch(ev: SyntheticEvent, value: string) {
    setSearchKey(value);
  }

  useEffect(() => {
    setPage(1);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchData({ searchKey, page: 1 });
    }, 500);
  }, [searchKey]);

  function getOptionlabel(option: cityData) {
    return option?.name || '';
  }

  useEffect(() => {
    if (status === SUCCESS && menuRef?.current) menuRef?.current?.scrollTo({ top: currentScrollPosition, behavior: 'smooth' });
  }, [menuRef, status, currentScrollPosition]);
  return (
    <Autocomplete
      disablePortal
      options={cityData}
      getOptionLabel={getOptionlabel}
      sx={sx}
      // eslint-disable-next-line react/jsx-no-bind
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          sx={{ mb: 0 }}
          error={isInValid && !cityId}
          fullWidth
          InputProps={{
            ...params.InputProps,
            disableUnderline,
            sx: {
              ...inputXs,
            },
          }}
        />
      )}
      onInputChange={handleSearch}
      onChange={handleSelectInput}
      value={cityId ? selectedCity : null}
      ListboxProps={{
        style: {
          maxHeight: 250,
        },
        onScroll(ev: any) {
          const element = ev.target;
          if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            fetchMoreData();
            setCurrentScrollPosition(element.scrollTop);
          }
        },
        // @ts-ignore
        ref: menuRef,
      }}
      inputValue={searchKey}
      disabled={disabled}
    />
  );
};

export default CitiesDropDown;
