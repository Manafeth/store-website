import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ProductAttributesData, ProductData } from '../../../types/products';
import { ProductCartData } from '../../../types/cart';


interface Props {
    productDetials: ProductData,
    setState: Dispatch<SetStateAction<ProductCartData>>,
    options: number[]
}

const Attributes: FC<Props> = ({ productDetials, setState, options }) => {

    function handleAddingAttribute(id: number) {
        setState((prevState) => {
            const attribute = productDetials.attributes.find((item) => !!item.options?.find((option) => option.id === id));
            if (attribute) {
                return {
                    ...prevState,
                    options: [...prevState.options.filter((item) => !attribute.options.find((option) => (item === option.id))), id]
                }
            }
            return {
                ...prevState,
                options: [...(prevState.options || []), id]
            }
        })
    }

    return (
        <>
            {productDetials.attributes.map((item) => (
                <Grid
                    key={item.id}
                    container
                    spacing={2.5}
                    mb={2}
                >
                <Grid item xs={5}>
                    <Box component='span'>{item.name}</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: {xs:'wrap', sm:'wrap', md:'nowrap',lg:'nowrap'}
                        }}
                    >
                    {item.options.map((option) => {
                        if (item.type === 1) {
                        return (
                            <Button
                                variant='contained'
                                color={options.includes(option.id || 0) ? 'primary' : 'secondary'}
                                key={option.id}
                                sx={{
                                    p: 0.5,
                                    mr: 1,
                                    mb: 1,
                                    borderRadius: 5,
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.2px',
                                    backgroundColor: !options.includes(option.id || 0) ? 'rgba(217, 217, 217, 0.4)' : '',
                                    minWidth: 0,
                                    px: 1.25,
                                    py: 0.5,
                                    whiteSpace: 'nowrap'
                                }}
                                onClick={
                                    function () {
                                        if (option.id)
                                        handleAddingAttribute(option.id)
                                    }
                                }
                            >
                            {option.name}
                            </Button>
                        )
                        }

                        if (item.type === 2) {
                        return (
                            <IconButton
                                sx={{ p: 0, mr: 1, mb: 1 }}
                                onClick={
                                    function () {
                                        if (option.id)
                                        handleAddingAttribute(option.id)
                                    }
                                }
                                key={option.id}
                            >
                                <Box
                                    key={option.id}
                                    sx={{
                                        backgroundColor: option.name,
                                        width: 30,
                                        height: 30,
                                        borderRadius: '50%',
                                        border: '2px solid transparent',
                                        borderColor: options.includes(option.id || 0) ? 'text.primary' : 'transparent'
                                    }}
                                />
                            </IconButton>
                        )
                        }

                        return (
                            <Button
                                variant='contained'
                                color={options.includes(option.id || 0) ? 'primary' : 'secondary'}
                                key={option.id}
                                sx={{
                                    p: 0.5,
                                    mr: 1,
                                    mb: 1,
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.2px',
                                    backgroundColor: !options.includes(option.id || 0) ? 'rgba(217, 217, 217, 0.4)' : '',
                                    borderRadius: 2.25,
                                    minWidth: 0,
                                    px: 1.25,
                                    py: 0.5,
                                    whiteSpace: 'nowrap'
                                }}
                                onClick={
                                    function () {
                                        if (option.id)
                                        handleAddingAttribute(option.id)
                                    }
                                }
                            >
                                {option.name}
                            </Button>
                        )
                    })}
                    </Box>
                </Grid>
                </Grid>
            ))}
        </>
    )
}

export default Attributes