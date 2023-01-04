import React, { ChangeEvent, FC, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { OrderData } from '../../types/cart';
import { useCart } from '../../contexts/CartContext';
import EditIcon from '../../assets/images/icons/edit-icon.svg';
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton';
import { LOADING } from '../../constants';
import useTranslation from 'next-translate/useTranslation';
import { useCommon } from '../../contexts/CommonContext';

interface Props {
    orderData: OrderData
}

const BankPayment: FC<Props> = ({ orderData }) => {
    const {t} = useTranslation('checkout');
    const { fetchBankFiles, createBankFiles, bankFilesData, bankFilesStatus } = useCart();
    const { storeInfo } = useCommon()

    function handleFile(ev: ChangeEvent<HTMLInputElement>) {
        if (ev.target?.files && ev.target?.files[0])
            createBankFiles({ image: ev.target.files[0], invoiceId: orderData.invoiceId })
    }

    useEffect(() => {
        if (orderData.invoiceId)
            fetchBankFiles(orderData.invoiceId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderData.invoiceId])
    
    return (
        <>
            <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '30px', fontWeight: 'bold', m: 0 }}>{t('payConfirmYourPayment')}</Typography>
            <Typography sx={{ fontSize: '17px', lineHeight: '150%', m: 0 }}>{t('payemntDescription')}</Typography>
            <Divider sx={{ mt: 2, mb: 1.25 }} />
            <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 'bold', mt: 0, mb: 2.5 }}>{t('paymentDetail')}:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('bankName')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600' }}>{orderData.bankInfo?.bankName}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('holderName')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600'}}>{orderData.bankInfo?.holderName}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('accountNumber')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600' }}>{orderData.bankInfo?.accountNumber}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('iBan')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600' }}>{orderData.bankInfo?.iban}</Typography>
            </Box>
            <Divider sx={{ mt: 4, mb: 2.5 }} />
            {orderData.paymentStatus === 3 && (
                <Alert severity="error" sx={{ mb: 2, fontSize: 14 }}>{orderData?.rejectionReason}</Alert>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('reciptFile')}</Typography>
                {bankFilesData?.orignialUrl ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link href={bankFilesData?.orignialUrl} target='_blank' rel="noreferrer">
                            <Typography variant='h5' component='span' sx={{ fontWeight: '600', mr: 1.25 }}>{t('reciptFileData')}{bankFilesData?.fileExtension && `.${bankFilesData?.fileExtension}`}</Typography>
                        </Link>
                        <Box
                            component='label'
                            htmlFor="bank-file-2"
                            sx={{ 
                                fontFamily: 'Poppins',
                            }}
                        >
                            {/* @ts-ignore */}
                            <Input id="bank-file-2" type="file" sx={{ display: 'none' }} onChange={handleFile} disabled={![1,3].includes(orderData.paymentStatus)} />
                            <LoadingButton
                                color='secondary'
                                variant='contained'
                                sx={{ minWidth: 0, p: 0.5, borderRadius: 2 }}
                                component='span'
                                loading={bankFilesStatus === LOADING}
                                disabled={![1,3].includes(orderData.paymentStatus)}
                            >
                                <Image src={EditIcon} width={15} height={15} alt='edit' />
                            </LoadingButton>
                        </Box>
                        
                    </Box>
                ) : (
                    <Box
                        component='label'
                        htmlFor="bank-file"
                        sx={{ 
                            fontFamily: 'Poppins',
                        }}
                    >
                        {/* @ts-ignore */}
                        <Input id="bank-file" type="file" sx={{ display: 'none' }} onChange={handleFile} disabled={![1,3].includes(orderData.paymentStatus)} />
                        <LoadingButton
                            variant='contained'
                            component='span'
                            loading={bankFilesStatus === LOADING}
                            disabled={![1,3].includes(orderData.paymentStatus)}
                        >
                            {t('attatchReceiptFile')}
                        </LoadingButton>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default BankPayment