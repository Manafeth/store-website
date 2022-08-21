import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import ArrowRight from '../../../assets/images/icons/arrow-right.png';
import { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  data: {
    id: number;
    name: string;
    link?: string;
  };
}
const FilterMenuItem: FC<Props> = ({ data }) => {
  const router = useRouter();
  
  const listButton = (
    <ListItemButton
        sx={{
          fontSize:'14px',
          fontWeight:'700',
          color:'grey.2200',
        }}
      >
        <ListItemText primary={data.name} sx={{ opacity: 1, 
         fontSize:'14px',
          fontWeight:'bold',
          color:'grey.2200', }} />
      </ListItemButton>
  )
  return (
    data.link ? (
      <Link href={data.link}>
        {listButton}
      </Link>
    ) : (
      listButton
    )
    
  );
};

export default FilterMenuItem;