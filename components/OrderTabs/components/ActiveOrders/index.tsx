import React, { FC } from 'react';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import carIcon from '../../../../assets/images/icons/car-icon.png';
import clockIcon from '../../../../assets/images/icons/clock-icon.png';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { activeOrderData } from '../../../../types/profile';
import moment from 'moment';
import StatusText from '../../../StatusText';
import { orderStatusEnums } from '../../../../constants/statuses';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import paths from '../../../../constants/paths';


interface Props {
  data: activeOrderData;
}

const ActiveOrders: FC<Props> = ({ data }) => {
  const {t:CT} = useTranslation('common');
  const {t:ST} = useTranslation('settings');
 const orderStatus = orderStatusEnums.find((item) => +item.value === data.status);
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h2' component='h1' sx={{ mb: 1.5 }}>
      {ST('noOrder')} : <Link href={paths.orderDetails(data.id)}><MuiLink>#{data.id}</MuiLink></Link>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px',
          gap: '10px',
          maxWidth: '400px',
          height: '47px',
          backgroundColor: 'grey.1600',
          justifyContent: 'space-between',
          mb: 1.5,
        }}
      >
        <StatusText
          title={CT(orderStatus?.label || '')}
          color={orderStatus?.color || ''}
        />
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
      <Typography variant='h2' sx={{ mb: 2, fontWeight: '600' }}>
      {CT('sar')} {data.total}
      </Typography>
      <Divider sx={{ mb: 2, maxWidth:'400px' }} />
    </Box>
  );
};

export default ActiveOrders;
