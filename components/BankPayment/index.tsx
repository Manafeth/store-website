import React, { ChangeEvent, FC, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import { OrderData } from '../../types/cart';
import { useCart } from '../../contexts/CartContext';
import EditIcon from '../../assets/images/icons/edit-icon.svg';
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton';
import { LOADING } from '../../constants';
import { useTranslation } from 'next-i18next';

interface Props {
    orderData: OrderData
}

const BankPayment: FC<Props> = ({ orderData }) => {
    const [t] = useTranslation();
    const { fetchBankFiles, createBankFiles, bankFilesData, bankFilesStatus } = useCart();

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
            <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '30px', fontWeight: 'bold', m: 0 }}>{t('checkout:payConfirmYourPayment')}</Typography>
            <Typography sx={{ fontSize: '17px', lineHeight: '150%', m: 0 }}>{t('checkout:payemntDescription')}</Typography>
            <Divider sx={{ mt: 2, mb: 1.25 }} />
            <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 'bold', mt: 0, mb: 2.5 }}>{t('checkout:paymentDetail')}:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('checkout:bankName')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600' }}>{orderData.bankInfo?.bankName}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('checkout:holderName')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600'}}>{orderData.bankInfo?.holderName}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.75 }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('checkout:accountNumber')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600' }}>{orderData.bankInfo?.accountNumber}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('checkout:iBan')}</Typography>
                <Typography variant='h5' component='span' sx={{ fontWeight: '600' }}>{orderData.bankInfo?.iban}</Typography>
            </Box>
            <Divider sx={{ mt: 4, mb: 2.5 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h5' component='span' sx={{ color: 'text.secondary' }}>{t('checkout:reciptFile')}</Typography>
                {bankFilesData?.orignialUrl ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link href={bankFilesData?.orignialUrl} target='_blank' rel="noreferrer">
                            <Typography variant='h5' component='span' sx={{ fontWeight: '600', mr: 1.25 }}>{t('checkout:reciptFileData')}{bankFilesData?.fileExtension && `.${bankFilesData?.fileExtension}`}</Typography>
                        </Link>
                        <Box
                            component='label'
                            htmlFor="bank-file-2"
                            sx={{ 
                                fontFamily: 'Poppins',
                            }}
                        >
                            {/* @ts-ignore */}
                            <Input id="bank-file-2" type="file" sx={{ display: 'none' }} onChange={handleFile} />
                            <LoadingButton color='secondary' variant='contained' sx={{ minWidth: 0, p: 0.5, borderRadius: 2 }} component='span' loading={bankFilesStatus === LOADING}>
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
                        <Input id="bank-file" type="file" sx={{ display: 'none' }} onChange={handleFile} />
                        <LoadingButton
                            variant='contained'
                            component='span'
                            loading={bankFilesStatus === LOADING}
                        >
                            {t('checkout:attatchReceiptFile')}
                        </LoadingButton>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default BankPayment