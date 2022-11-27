import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import { CategoryData } from '../../types/categories';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import CategoryEmptyState from '../CategoryEmptyState';
import CategoryCard from '../CategoryCard';
import { useCommon } from '../../contexts/CommonContext';
import CategoryWithoutImageCard from '../CategoryWithoutImageCard';
interface Props {
    categories: { categoriesWithImages: CategoryData[], categoriesWithoutImages: CategoryData[] },
    title: string
    sx?: {[key: string]: any},
    showAll?: string,
    seeAllButtonLink?: string,
    seeAllButtonText?: string,
    id?: string
}

const CategoriesSection: FC<Props> = ({ categories, title, sx, showAll, seeAllButtonLink, seeAllButtonText, id }) => {
  const { t } = useTranslation('common');
  const { storeInfo } = useCommon();
  
  return (
    <Box component='section' sx={{ ...(sx || {}) }} id={id || ''}>
       <Container maxWidth={false} sx={{ px: {xs: 2, lg: 7.5} }} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 6 }}>
            <Typography variant='h5' component='h2' sx={{ fontWeight: 600, letterSpacing: '0.2px' }}>
              {t(title)}
            </Typography>
            {showAll && (
              <Link href={showAll}>
                <MuiLink sx={{ fontWeight: 700 }}>
                  {t('showAll')}
                </MuiLink>
              </Link>
            )}
          </Box>
            {(categories?.categoriesWithImages?.length > 0 || categories?.categoriesWithoutImages?.length > 0) ? (
              <>
                <Grid container spacing={{xs: 2, lg: 3.75}} rowSpacing={1.25}>
                  {categories?.categoriesWithImages.map((item) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                          <CategoryCard data={item} />
                        </Grid>
                      )
                  })}
                </Grid>
                <Grid container spacing={{xs: 2, lg: 3.75}} rowSpacing={1.25}>
                    {categories?.categoriesWithoutImages.map((item) => {
                        return (
                          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <CategoryWithoutImageCard data={item} />
                          </Grid>
                        )
                    })}
                </Grid>
              </>
            ) : (
              <Grid container spacing={{xs: 2, lg: 3.75}} rowSpacing={1.25}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CategoryEmptyState />
                </Grid>
              </Grid>
            )}
          {seeAllButtonLink && (
            <Box sx={{ textAlign: 'center', pt: 3 }}>
              <Link href={seeAllButtonLink}>
                <Button variant='contained' sx={{ minWidth: 240, borderRadius: 3,backgroundColor: storeInfo.buttonColor ,color: storeInfo.buttonTitelColor}}>
                  {seeAllButtonText && t(seeAllButtonText)}
                </Button>
              </Link>
            </Box>
          )}
        </Container>
    </Box>
  )
}

export default CategoriesSection