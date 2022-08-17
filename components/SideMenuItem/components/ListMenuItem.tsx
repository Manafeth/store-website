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
    link: string;
  };
}
const ListMenuItem: FC<Props> = ({ data }) => {
  const router = useRouter();
  return (
    <Link href={data.link}>
      <ListItemButton
        sx={{
          backgroundColor: router.pathname === data.link ? 'grey.1600' : '',
          borderColor: 'primary.main',
          width: '350px',
          height: '67px',
          borderRadius: '8px',
          px: router.pathname === data.link ? 2.5 : 0,
          '&:hover': {
            px:  2.5,
          }
        }}
      >
        <ListItemText primary={data.name} sx={{ opacity: 1 }} />
        <Image src={ArrowRight} alt='Arrow right' />
      </ListItemButton>
    </Link>
  );
};

export default ListMenuItem;
