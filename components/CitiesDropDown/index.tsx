import React, { Dispatch, FC, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { LOADING, SUCCESS } from '../../constants';
import { cityData } from '../../types/profile';
import { useProfile } from '../../contexts/ProfileContext';
import { styled } from '@mui/system';
import InfiniteScroll from 'react-infinite-scroll-component';

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


const Listbox = styled('ul')(({ theme }) => ({
  width: '100%',
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
  borderRadius: 4
}));

const CitiesDropDown: FC<Props> = ({ countryId, isInValid, cityId, sx, setState, disabled, disableUnderline, inputXs }) => {
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    fetchAllCityData,
    cityData,
    hasMoreCities,
    citiesStatus,
    clearCitiesStatus
  } = useProfile();

  function fetchData(params?: { page?: number; searchKey?: string }) {
    if (countryId) fetchAllCityData({ countryId, searchKey: params?.searchKey || searchKey /* page: params?.page || page, pageSize: 10, searchKey: params?.searchKey || searchKey */ } );
    else fetchAllCityData({searchKey: params?.searchKey || searchKey}/* { page: params?.page || page, pageSize: 10, searchKey: params?.searchKey || searchKey } */);
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
    if (citiesStatus === SUCCESS && menuRef?.current) {
      clearCitiesStatus()
    }
  }, [menuRef, citiesStatus]);


  return (
    <>
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
            maxHeight: 300,
          },
          id: "cities-list"
        }}
        inputValue={searchKey}
        disabled={disabled}
        ListboxComponent={({children, ...props}) => {
          return (
            // @ts-ignore
            <Listbox {...props} ref={menuRef}>
              <InfiniteScroll
                dataLength={cityData.length}
                next={fetchMoreData}
                hasMore={hasMoreCities}
                loader={<CircularProgress />}
                scrollableTarget="cities-list"
              >
                {children}
              </InfiniteScroll>
            </Listbox>
          )
        }}
      />
    </>
  );
};

export default CitiesDropDown;
