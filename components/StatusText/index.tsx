import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  title: string;
  color: string;

}

const StatusText: FC<Props> = ({ title, color }) => {
  const {lang} = useTranslation('common');
  return (
  <Typography
    component="span"
    sx={{
      'color': color,
      'fontWeight': 'bold',
      'fontSize': '12px',
      'fontFamily': lang === 'en' ? 'Urbanist' : ''
    }}
  >
    {title}
  </Typography>
);}

export default StatusText;
