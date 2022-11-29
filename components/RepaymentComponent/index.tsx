import React, { FC, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import useTranslation from 'next-translate/useTranslation';
import { useCart } from '../../contexts/CartContext';
import { useCommon } from '../../contexts/CommonContext';
import { LOADING, SUCCESS } from '../../constants';
import LoadingButton from '@mui/lab/LoadingButton';

interface Props {

}

const RepaymentComponent: FC<Props> = () => {
    const {t, lang} = useTranslation('checkout');
    const { paymnetData, orderData, createPayment, paymentStatus, fetchOrderDetails } = useCart();
    const { storeInfo } = useCommon();
    const [paymentProviderId, setPaymentProvider] = useState(0);

    function handleSelect(id: number) {
        setPaymentProvider(id)
    }

    function handlePayment() {
        createPayment({ orderId: orderData.id, paymentProviderId })
    }

    useEffect(() => {
      if (paymentStatus === SUCCESS) {
        fetchOrderDetails(orderData.id);
      }
    }, [paymentStatus])
    
    return (
        <Box>
           <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '30px', fontWeight: 'bold', m: 0 }}>{t('payConfirmYourPayment')}</Typography>
            <Typography sx={{ fontSize: '17px', lineHeight: '150%', m: 0 }}>{t('payemntProvidersDescription')}</Typography>
            <Divider sx={{ mt: 2, mb: 5.125 }} />
            <Typography variant='h4' sx={{ fontWeight: 'bold', m: 0, mb: 2 }}>{t('availablePaymentMethods')}</Typography>
            <Grid container spacing={{ xs: 2, lg: 2.25 }} rowSpacing={2}>
                {paymnetData.map((item) => {
                    return (
                        <Grid item xs={12} md={6} key={item.id}>
                            <Box
                                onClick={function () {
                                    handleSelect(item.id)
                                }}
                            >
                                <Card sx={{width: '100%', backgroundColor: item.id === paymentProviderId ? '#F3F3F3': null}}>
                                    <CardActionArea>
                                        <CardContent sx={{ p: 1.5, pl: 1 }}>
                                            <Box sx={{ display:'flex' }}>
                                                <Avatar src={item.imageFilePath?.orignialUrl || ''} alt='category' sx={{ width: '32px', height: '26px', borderRadius: '2px', mr: 2 }}>
                                                    pp
                                                </Avatar>
                                                <Typography sx={{  whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', fontSize: 16, lineHeight: '24px', fontWeight: 'bold', fontFamily: lang === 'en' ? 'Urbanist' : '' }}>{item.name}</Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
            <Divider sx={{ mt: 6, mb: 5.125 }} />
            <LoadingButton
                variant='contained'
                onClick={handlePayment}
                loading={paymentStatus === LOADING}
                sx={{
                    backgroundColor: storeInfo.buttonColor, color:storeInfo.buttonTitelColor,
                    minWidth: 180,
                    "&:hover": {
                        backgroundColor: "primary.hover",
                    }
                }}
                disabled={!paymentProviderId}
            >
                 {t('repaymentConfirmation', { price: orderData.totalCost })}
            </LoadingButton>
        </Box>
    )
}

export default RepaymentComponent