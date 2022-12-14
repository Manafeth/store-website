import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useCommon } from '../../../contexts/CommonContext';

const PaymentProviders = () => {
    const { storeInfo } = useCommon()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: { xs: 5, md: 0 }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
        {storeInfo?.providers?.map((item, index) => (
            <Avatar src={item.imageFilePath?.thumbUrl || ''} alt='category' sx={{ width: '45px', height: 'auto', borderRadius: '0', mr: index < (storeInfo?.providers?.length - 1) ? 3 : 0, mt: 3 }} key={item.id}>
                p
            </Avatar>
        ))}
    </Box>
  )
}

export default PaymentProviders