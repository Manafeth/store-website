import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import ArrowRight from '../../../assets/images/icons/arrow-right.png';
import { FC, useState } from 'react';
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
    <ListItem
      disablePadding
      sx={{
        backgroundColor: router.pathname === data.link ? 'grey.1600' : '',
        borderColor: 'primary.main',
        width: '350px',
        height: '67px',
        borderRadius: '8px',
      }}
      key={data.id}
    >
        <Link href={data.link}>
      <ListItemButton disableRipple>
        <ListItemText primary={data.name} sx={{ opacity: 1 }} />
          <Image src={ArrowRight} alt='Arrow right' />
      </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default ListMenuItem;
