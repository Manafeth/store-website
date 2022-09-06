import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ArrowRight from '../../assets/images/icons/arrow-right.png';
import { useTranslation } from 'react-i18next';
import { ProductData } from '../../types/products';
import paths from '../../constants/paths';

interface Props {
  productDetials: ProductData,
}

const Breadcrumb: FC<Props> = ({productDetials}) => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const [t] = useTranslation();
  const pages = [
    {page: t('common.home'), link: paths.home},
    {page: t('common.allCategories'), link: paths.categories},
  ];
  return (
    <Box role='presentation' onClick={handleClick} mb={4.25}>
      <Breadcrumbs
        separator={<Image src={ArrowRight} alt='Arrow right' />}
        aria-label='breadcrumb'
      >
         {pages.map(({page, link}) => (
        <Link underline='hover' color='inherit' key={page}  href={link}>
        {page}
        </Link>
        ))}
          <Typography color='text.primary'>{productDetials.category}</Typography>
        <Typography color='text.primary'>{productDetials.name}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
