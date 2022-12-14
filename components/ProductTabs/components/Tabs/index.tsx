import React, { FC, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
  activeTab: number;
  // eslint-disable-next-line no-unused-vars
  handleTabs: (ev: MouseEvent<HTMLButtonElement>) => void;
}

const Tabs: FC<Props> = ({ activeTab, handleTabs }) => {
  const sharedStyle = {
    mr: 3,
    fontSize: '14px',
    fontWeight: '600',
    minWidth: 170,
    minHieght: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '100%', sm: 'auto' },
    mb: { xs: 3, sm: 0 },
    backgroundColor: 'transparent',
    borderRadius: '0px',
  };
  const tabStyle = {
    ...sharedStyle,
    '&, &:hover': {
      backgroundColor: 'transparent',
      color: 'primary.main',
      borderBottom: '2px solid #262D33',
    },
    '&:hover': {
      opacity: 0.9,
    },
  };

  return (
    <Box sx={{ pb: 4, display: 'flex', justifyContent: 'center' }}>
      <Button
        variant='text'
        color='secondary'
        sx={activeTab === 1 ? tabStyle : sharedStyle}
        value={1}
        onClick={handleTabs}
      >
        Description
      </Button>
      <Button
        variant='text'
        color='secondary'
        sx={activeTab === 2 ? tabStyle : sharedStyle}
        value={2}
        onClick={handleTabs}
      >
        Additional Information
      </Button>
      <Button
        variant='text'
        color='secondary'
        sx={activeTab === 3 ? tabStyle : sharedStyle}
        value={3}
        onClick={handleTabs}
      >
        Reviews(0)
      </Button>
    </Box>
  );
};

export default Tabs;
