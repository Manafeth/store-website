import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useCart } from '../../contexts/CartContext';
import { LOADING, SUCCESS } from '../../constants';
import LoadingButton from '@mui/lab/LoadingButton';

const StcPayment = () => {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const { createPayment, orderData, paymentStatus, createStcPayment, stcPaymentStatus } = useCart();
    function handleInput(ev: ChangeEvent<HTMLInputElement>) {
        setPhoneNumber(ev.target.value);
    }

    function handleCodeInput(ev: ChangeEvent<HTMLInputElement>) {
        setCode(ev.target.value)
    }

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        if (step === 1) {
            if (phoneNumber) {
                createPayment({
                    orderId: orderData.id,
                    mobileNumber: phoneNumber
                });
                setIsInvalid(false);
            } else {
                setIsInvalid(true);
            }
        } else if (step === 2) {
            if (code) {
                createStcPayment({
                    invoiceId: orderData.invoiceId,
                    otpValue: code,
                })
                setIsInvalid(false);
            } else {
                setIsInvalid(true);
            }
            
        }
    }

    useEffect(() => {
        if (paymentStatus === SUCCESS) {
            setStep(2);
            setPhoneNumber('');
        }
    }, [paymentStatus])

    useEffect(() => {
        if (stcPaymentStatus === SUCCESS) {
            setCode('');
        }
    }, [stcPaymentStatus])

    return (
        <Box component='form' onSubmit={handleSubmit}>
            <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '30px', fontWeight: 'bold', m: 0 }}>Pay and Confirm your Payment</Typography>
            <Typography sx={{ fontSize: '17px', lineHeight: '150%', m: 0 }}>please make sure to make bank transfer and attach file to confirm your payment process.</Typography>
            <Divider sx={{ mt: 2, mb: 1.25 }} />
            {step === 1  && (
                <>
                    <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 'bold', mt: 0, mb: 2.5 }}>Mobile Number</Typography>
                    <TextField
                        fullWidth
                        InputProps={{
                            sx: { 
                            height: 52,
                            borderRadius: 2,
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '21px',
                            }
                        }}
                        sx={{ mb: 6 }}
                        onChange={handleInput}
                        error={isInvalid && !phoneNumber}
                        value={phoneNumber}
                    />
                </>
            )}
           
           {step === 2  && (
                <>
                    <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 'bold', mt: 0, mb: 2.5 }}>Varification Code</Typography>
                    <Typography sx={{ fontSize: '17px', lineHeight: '150%', mt: 0, mb: 2.5 }}>A verification code has been sent to your phone <b>(+966) {phoneNumber}</b></Typography>
                    <TextField
                        fullWidth
                        InputProps={{
                            sx: { 
                            height: 52,
                            borderRadius: 2,
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '21px',
                            }
                        }}
                        sx={{ mb: 6 }}
                        onChange={handleCodeInput}
                        error={isInvalid && !code}
                    />
                </>
            )}
           
            <LoadingButton
                variant='contained'
                sx={{ minWidth: '219px' }}
                type='submit'
                loading={[paymentStatus, stcPaymentStatus].includes(LOADING)}
            >
                Next
            </LoadingButton>
        </Box>
    )
}

export default StcPayment