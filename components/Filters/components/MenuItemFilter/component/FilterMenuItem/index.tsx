import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
  
  const listButton = (
    <ListItemButton
        sx={{
          fontSize:'14px',
          fontWeight:'700',
          color:'grey.2200',
        }}
      >
        {data.name}
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
