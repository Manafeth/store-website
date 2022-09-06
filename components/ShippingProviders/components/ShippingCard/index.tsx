import React, { FC } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

interface Props {
    title:string;
    id:number;
    handleClick?: () => void;
    selectedId:any;
  }

const ShippingCard: FC<Props> = ({ title, id, selectedId, handleClick }) => {
  return (
    <Box
    onClick={handleClick}
    >
    <Card sx={{width:'70%', display:id === selectedId ? 'red': null, mb:3}}>
    <CardActionArea>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    </Box>
  )
}

export default ShippingCard