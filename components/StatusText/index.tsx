import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
  title: string;
  color: string;

}

const StatusText: FC<Props> = ({ title, color }) => (
  <Typography
    component="span"
    sx={{
      'color': color,
      'fontWeight': 'bold',
      'p': '9px 28px',
      'fontSize': '12px',
    }}
  >
    {title}
  </Typography>
);

export default StatusText;
