import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Image from 'next/image';
import ArrowRight from '../../assets/images/icons/arrow-right.png';

const Breadcrumb = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs
        separator={<Image src={ArrowRight} alt='Arrow right' />}
        aria-label='breadcrumb'
      >
        <Link underline='hover' color='inherit' href='/'>
          Home
        </Link>
        <Link
          underline='hover'
          color='inherit'
          href='/material-ui/getting-started/installation/'
        >
          All categories
        </Link>
        <Link
          underline='hover'
          color='inherit'
          href='/material-ui/getting-started/installation/'
        >
          Category name
        </Link>
        <Typography color='text.primary'>Modern yellow sofa</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
