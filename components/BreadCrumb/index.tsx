import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ArrowRight from '../../assets/images/icons/arrow-right.png';
import useTranslation from 'next-translate/useTranslation';
import { ProductData } from '../../types/products';
import paths from '../../constants/paths';
import Link from 'next/link';

interface Props {
  productDetials: ProductData,
}

const Breadcrumb: FC<Props> = ({productDetials}) => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
  }
  const {t} = useTranslation('common');
  const pages = [
    {page: t('home'), link: paths.home},
    {page: t('allCategories'), link: paths.categories},
  ];

  return (
    <Box role='presentation' mb={4.25}>
      <Breadcrumbs
        separator={<Image src={ArrowRight} alt='Arrow right' />}
        aria-label='breadcrumb'
      >
        {pages.map(({page, link}) => (
          <Link key={page} href={link}>
            <MuiLink underline='hover' color='inherit'>
              {page}
            </MuiLink>
          </Link>
        ))}
        {productDetials.category && <Typography color='text.primary'>{productDetials.category}</Typography>}
        <Typography color='text.primary'>{productDetials.name}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
