import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useCart } from '../../contexts/CartContext';
import { LOADING, SUCCESS } from '../../constants';
import LoadingButton from '@mui/lab/LoadingButton';
import isNumeric from 'validator/lib/isNumeric';
import useTranslation from 'next-translate/useTranslation';

const StcPayment = () => {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const {t} = useTranslation('checkout');
    const {t:CT} = useTranslation('common');
    const { createPayment, orderData, paymentStatus, createStcPayment, stcPaymentStatus } = useCart();
    function handleInput(ev: ChangeEvent<HTMLInputElement>) {
        if (isNumeric(ev.target.value) || ev.target.value === '' || ev.target.value === null)
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
            <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '30px', fontWeight: 'bold', m: 0 }}>{t('payConfirmYourPayment')}</Typography>
            <Typography sx={{ fontSize: '17px', lineHeight: '150%', m: 0 }}>{t('payemntDescription')}</Typography>
            <Divider sx={{ mt: 2, mb: 1.25 }} />
            {step === 1  && (
                <>
                    <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 'bold', mt: 0, mb: 2.5 }}>{t('mobileNumber')}</Typography>
                    <TextField
                        fullWidth
                        InputProps={{
                            sx: { 
                            height: 52,
                            borderRadius: 2,
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '21px',
                            },
                            inputProps:{ maxLength: 10 }
                        }}
                        sx={{ mb: 6 }}
                        onChange={handleInput}
                        placeholder="XXX XXX-XXX"
                        error={isInvalid && !phoneNumber}
                        value={phoneNumber}
                    />
                </>
            )}
           
           {step === 2  && (
                <>
                    <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 'bold', mt: 0, mb: 2.5 }}>{t('verifiy')}</Typography>
                    <Typography sx={{ fontSize: '17px', lineHeight: '150%', mt: 0, mb: 2.5 }}>{t('verificationCode')} <b>(+966) {phoneNumber}</b></Typography>
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
                {CT('next')}
            </LoadingButton>
        </Box>
    )
}

export default StcPayment