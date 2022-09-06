import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterUtils from './components/SerachFilter';
import MenuItemFilter from './components/MenuItemFilter';
import CheckboxFilter from './components/CheckboxFilter';
import ColorFilter from './components/ColorFilter';
import RadioButtonFilter from './components/RadioButtonFilter';
import FilterByPrice from './components/PriceFilter';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { ProductAttributesData, ProductByCategoryParams, ProductData } from '../../types/products';
import { CategoryData } from '../../types/categories';
import { useTranslation } from "react-i18next";
// import TagFilter from './components/TagFilter';


interface Props {
  getProducts: (data: ProductByCategoryParams) => void,
  setParams: Dispatch<SetStateAction<ProductByCategoryParams>>,
  attributes: ProductAttributesData[],
  categories: CategoryData[],
  params: ProductByCategoryParams
}

const Filters: FC<Props> = ({ getProducts, setParams, attributes, categories, params }) => {
  const [t] = useTranslation();

  function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
    setParams((prevState) => ({
      ...prevState,
      generalSearch: ev.target.value,
      page: 1,
    }))
    getProducts({generalSearch: ev.target.value, page: 1})
  }

  function handleColorAttribute(id: number) {
    setParams((prevState) => ({
      ...prevState,
      options: prevState.options?.includes(id) ? prevState.options.filter((item) => item !== id)  : [...(prevState.options || []), id]
    }))
  }

  function handleAttributeChange(ev: ChangeEvent<HTMLInputElement>) {
    setParams((prevState) => ({
      ...prevState,
      options: prevState.options?.includes(+ev.target.value) ? prevState.options.filter((item) => item !== +ev.target.value)  : [...(prevState.options || []), +ev.target.value]
    }))
  }

  function handlePriceFromInput(priceFrom: number) {
    setParams((prevState) => ({
      ...prevState,
      priceFrom
    }))
  }

  function handlePriceToInput(priceTo: number) {
    setParams((prevState) => ({
      ...prevState,
      priceTo
    }))
  }

  function handleFilterSubmit() {
    getProducts({})
  }
  
  return (
    <>
      <Box sx={{ display: 'flex' , flexDirection:'column' }}>
        <Typography
          variant='h5'
          component='h1'
          sx={{ fontWeight: '700' }}
        >
          {t('common.filter')} :
        </Typography>
        <FilterUtils onSearch={handleSearch} />
      </Box>
      {categories.length > 0 && (
        <MenuItemFilter categories={categories} />
      )}
      {/* <Divider sx={{ mb: 3 }} /> */}
      {attributes.map((item) => {
        if (item.type === 2) {
          return (
            <Box key={item.id}>
              <Divider sx={{ mb: 3, mt: 3 }} />
              <ColorFilter data={item} onClick={handleColorAttribute} params={params} />
            </Box>
          )
        }
        return (
          <Box key={item.id}>
            <Divider sx={{ mb: 3, mt: 3 }} />
            {/* <RadioButtonFilter data={item} onChange={handleAttributeChange} /> */}
            <CheckboxFilter data={item} onChange={handleAttributeChange} params={params} />
          </Box>
        )
      })}
     
     
   
      {/* <Divider sx={{ mb: 3, mt: 3 }} /> */}
      {/* <TagFilter/>      */}
      <Divider sx={{ mb: 3, mt: 3 }} />
      <FilterByPrice
        params={params}
        handlePriceFromInput={handlePriceFromInput}
        handlePriceToInput={handlePriceToInput}
      />
      <Button
        variant='contained'
        sx={{
          width: '154px',
          height: '44px',
          ml: 2
        }}
        onClick={handleFilterSubmit}
      >
          {t('common.filter')}
      </Button>
    </>
  );
};

export default Filters;
