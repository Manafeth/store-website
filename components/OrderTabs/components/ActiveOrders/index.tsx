import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import carIcon from '../../../../assets/images/icons/car-icon.png';
import clockIcon from '../../../../assets/images/icons/clock-icon.png';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { activeOrderData } from '../../../../types/profile';
import moment from 'moment';
import { useTranslation } from "react-i18next";


interface Props {
  data: activeOrderData;
}

const ActiveOrders: FC<Props> = ({ data }) => {
  const [t] = useTranslation();
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h2' component='h1' sx={{ mb: 5 }}>
      {t('settings.noOrder')} : #{data.id}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px 20px',
          gap: '10px',
          width: '400px',
          height: '47px',
          backgroundColor: 'grey.1600',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Typography>{data.status}</Typography>
        {data.status === 5 ? (
          <Image src={carIcon} alt='car iocn' />
        ) : (
          <Image src={clockIcon} alt='clock iocn' width='24' height='24' />
        )}
      </Box>
      <Typography
        variant='h5'
        sx={{ mb: 2, fontWeight: '400', color: 'text.secondary' }}
      >
       {moment(data.createdAt).format('DD MMMM  YYYY hh:MM A')}
      </Typography>
      <Typography variant='h3' sx={{ mb: 5, fontWeight: '600' }}>
      {t('common.sar')} {data.total}
      </Typography>
      <Divider sx={{ mb: 3 }} />
    </Box>
  );
};

export default ActiveOrders;
