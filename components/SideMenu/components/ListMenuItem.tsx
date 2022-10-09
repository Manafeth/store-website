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
    onClick?: () => void;
  };
}
const ListMenuItem: FC<Props> = ({ data }) => {
  const router = useRouter();
  
  function handleClick() {
    if (data.onClick)
      data.onClick();
  }
  const listButton = (
    <ListItemButton
        sx={{
          backgroundColor: router.pathname === data.link ? 'grey.1600' : '',
          borderColor: 'primary.main',
          width: { md: '350px' },
          height: { xs: '50px', md: '67px' },
          borderRadius: '8px',
          marginBottom:'10px',
          px: router.pathname === data.link ? 2.5 : 0,
          '&:hover': {
            px:  2.5,
          }
        }}
        onClick={handleClick}
      >
        <ListItemText primary={data.name} sx={{ opacity: 1 }} />
        <Image src={ArrowRight} alt='Arrow right' />
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

export default ListMenuItem;
