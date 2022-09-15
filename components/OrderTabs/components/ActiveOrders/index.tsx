import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import carIcon from '../../../../assets/images/icons/car-icon.png';
import clockIcon from '../../../../assets/images/icons/clock-icon.png';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import { activeOrderData } from '../../../../types/profile';
import moment from 'moment';
import StatusText from '../../../StatusText';
import { orderStatusEnums } from '../../../../constants/statuses';
import { useTranslation } from 'next-i18next';


interface Props {
  data: activeOrderData;
}

const ActiveOrders: FC<Props> = ({ data }) => {
  const [t, i18n] = useTranslation();
  function renderOrderStatus(fieldValue: number) {
    // eslint-disable-next-line default-case
    switch (fieldValue) {
      case 1:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[0].labelAr : orderStatusEnums[0].label}
          color="buttons.blueDarker"
        />;
      case 2:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[1].labelAr : orderStatusEnums[1].label}
          color="warning.main"
        />;
      case 3:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[2].labelAr : orderStatusEnums[2].label}
          color="buttons.readyDarker"
        />;
      case 4:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[3].labelAr : orderStatusEnums[3].label}
          color="buttons.shippedDarker"
        />;

      case 5:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[4].labelAr : orderStatusEnums[4].label}
          color="success.main"
        />;
      case 6:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[5].labelAr : orderStatusEnums[5].label}
          color="buttons.cancelledDarker"
        />;
      case 7:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[6].labelAr : orderStatusEnums[6].label}
          color="buttons.cancelledDarker"
        />;

      case 8:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[7].labelAr : orderStatusEnums[7].label}
          color="warning.main"
        />;

      case 9:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[8].labelAr : orderStatusEnums[8].label}
          color="primary.main"
        />;
    }
  }
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
      {t('settings:noOrder')} : #{data.id}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px',
          gap: '10px',
          width: '400px',
          height: '47px',
          backgroundColor: 'grey.1600',
          justifyContent: 'space-between',
          mb: 1.5,
        }}
      >
        {/* <Typography>{data.status}</Typography> */}
        <Typography> {renderOrderStatus(data.status)}</Typography>
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
      {t('common:sar')} {data.total}
      </Typography>
      <Divider sx={{ mb: 2, width:'400px' }} />
    </Box>
  );
};

export default ActiveOrders;
