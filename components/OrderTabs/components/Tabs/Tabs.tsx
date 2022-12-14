import React, { FC, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useTranslation from 'next-translate/useTranslation';
import { useCommon } from '../../../../contexts/CommonContext';


interface Props {
    activeTab: number,
    // eslint-disable-next-line no-unused-vars
    handleTabs: (ev: MouseEvent<HTMLButtonElement>) => void
}

const Tabs: FC<Props> = ({ activeTab, handleTabs }) => {
  const {t} = useTranslation('settings');
  const { storeInfo } = useCommon()
  const sharedStyle = {
    'mr': 3,
    'fontSize': { xs: '14px', md: '18px' },
    'minWidth': 170,
    'minHieght': 40,
    'justifyContent': 'center',
    'alignItems': 'center',
    'width': { xs: '100%', sm: 'auto' },
    'mb': { xs: 3, sm: 0 },
    'backgroundColor':'transparent',
    'borderRadius':'0px',
  };
  const tabStyle = {
    ...sharedStyle,
    '&, &:hover': {
      backgroundColor: 'transparent', color: 'grey.1800',
      borderBottom:'2px solid #262D33',
      display: 'inline-block',
      width: 'auto',
      margin: 'auto',
    },
    '&:hover': {
      opacity: 0.9,
    },
  };

  return (
    <Box sx={{ pb: 4 , display:'flex'}}>
      <Button
        variant="text"
        color="primary"
        sx={activeTab === 1 ? tabStyle : sharedStyle}
        value={1}
        onClick={handleTabs}
      >
      {t('activeOrders')}
      </Button>
      <Button
        variant="text"
        color="primary"
        sx={activeTab === 2 ? tabStyle : sharedStyle}
        value={2}
        onClick={handleTabs}
      >

      {t('histriory')}
      </Button>
     
    </Box>
  );
};

export default Tabs;
