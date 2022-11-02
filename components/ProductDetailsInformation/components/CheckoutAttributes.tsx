import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { ProductData } from '../../../types/products';
import { ProductCartData } from '../../../types/cart';
import AddIcon from '../../../assets/images/icons/filled-add-icon.svg';
import Image from 'next/image';
import { useAlert } from '../../../contexts/AlertContext';
import useTranslation from 'next-translate/useTranslation';

interface Props {
    productDetials: ProductData,
    setState: Dispatch<SetStateAction<ProductCartData>>,
    checkoutAttributes: {checkOutAttributeId: number, value: string}[]
}

const CheckoutAttributes: FC<Props> = ({ productDetials, checkoutAttributes, setState }) => {
  const { sendAlert } = useAlert()
  const {t} = useTranslation('common');
  function handleAddCheckoutAttribute() {
    if (checkoutAttributes?.length < productDetials.checkOutAttributes?.length) {
      setState((prevState) => ({
        ...prevState,
        checkOutAttributes: [
          ...prevState.checkOutAttributes,
          {
            checkOutAttributeId: 0,
            value: ''
          }
        ]
      }))
    } else {
      sendAlert('There are no more options', 'error')
    }
  }

  function handleSelectCheckoutAttribute(ev: ChangeEvent<HTMLInputElement>, checkOutAttributeId: number) {
    setState((prevState) => ({
      ...prevState,
      checkOutAttributes: prevState.checkOutAttributes?.map((item) => {
        if (item.checkOutAttributeId === checkOutAttributeId) {
          return { ...item, checkOutAttributeId: +ev.target.value };
        }
        return item;
      })
    }))
  }

  function handleValue(ev: ChangeEvent<HTMLInputElement>, checkOutAttributeId: number) {
    setState((prevState) => ({
      ...prevState,
      checkOutAttributes: prevState.checkOutAttributes?.map((item) => {
        if (item.checkOutAttributeId === checkOutAttributeId) {
          return { ...item, value: ev.target.value };
        }
        return item;
      })
    }))
  }


  return (
    <>
      {checkoutAttributes?.map((item, index) => {
        const options = productDetials.checkOutAttributes?.filter((option) => option.id === item.checkOutAttributeId ? true : !checkoutAttributes?.find((item) => item.checkOutAttributeId === option.id))
        return (
          <Grid
            container
            spacing={2.5}
            key={item.checkOutAttributeId}
            alignItems='center'
          >
            <Grid item xs={5}>
              <TextField
                select
                margin='normal'
                value={item.checkOutAttributeId}
                InputProps={{
                  sx: {
                    height: 40,
                    backgroundColor: 'grey.200',
                    borderRadius: 2,
                    color: 'text.grey',
                    borderColor: 'text.grey',
                    fontWeight: 400,
                    fontSize: '14px',
                    letterSpacing: '0.2px',
                  }
                }}
                fullWidth
                onChange={
                  function (ev: ChangeEvent<HTMLInputElement>) {
                    handleSelectCheckoutAttribute(ev, item.checkOutAttributeId)
                  }
                }
              >
                <MenuItem value={0} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                {t('selectItem')}
                </MenuItem>
                  {options?.map((option) => (
                    <MenuItem
                      key={option.id}
                      value={option?.id}
                      sx={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                      {option?.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin='normal'
                InputProps={{
                  sx: {
                    height: 40,
                    backgroundColor: 'grey.200',
                    borderRadius: 2,
                    color: 'text.grey',
                    borderColor: 'text.grey',
                    fontWeight: 400,
                    fontSize: '14px',
                    letterSpacing: '0.2px',
                  }
                }}
                fullWidth
                placeholder='Enter the value'
                value={item.value}
                onChange={
                  function (ev: ChangeEvent<HTMLInputElement>) {
                    handleValue(ev, item.checkOutAttributeId)
                  }
                }
              />
            </Grid>
            {(checkoutAttributes?.length - 1) === index && (
            <Grid item xs={1}>
              <IconButton
                sx={{ p: 0 }}
                onClick={handleAddCheckoutAttribute}
                disabled={!!checkoutAttributes?.find(({checkOutAttributeId}) => checkOutAttributeId === 0)}
              >
                <Image src={AddIcon} width={24} height={24} alt='add icon' />
              </IconButton>
            </Grid>
            )}
          </Grid>
        )
      })}
    </>
  )
}

export default CheckoutAttributes