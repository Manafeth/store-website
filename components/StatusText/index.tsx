import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

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
      'fontSize': '12px',
      'fontFamily': 'Urbanist'
    }}
  >
    {title}
  </Typography>
);

export default StatusText;
