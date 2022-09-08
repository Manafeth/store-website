import React, { FC } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { shipmentsProvidersData } from '../../../../types/cart';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';

interface Props {
    title:string;
    id:number;
    handleClick?: () => void;
    selectedId:any;
    data:shipmentsProvidersData;
  }

const ShippingCard: FC<Props> = ({ title, id, selectedId, handleClick, data }) => {
  return (
    <ButtonBase
    onClick={handleClick}
    >
    <Card sx={{width:'420px', display:id === selectedId ? 'red': null, mb:3}}>
    <CardActionArea>
      <CardContent>
        <Box sx={{display:'flex', gap:'20px'}}>
        <Avatar src={data.imageFilePath?.orignialUrl || ''} alt='category' sx={{ width: '60px', height: '33px', borderRadius: '2px' }}>
                C
        </Avatar>
            <Typography>{data.name}</Typography>
        </Box>
      
      </CardContent>
    </CardActionArea>
  </Card>
    </ButtonBase>
  )
}

export default ShippingCard