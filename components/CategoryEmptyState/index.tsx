import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import emptyState from '../../assets/images/category-empyty-state.png'
import Image from 'next/image';
interface Props {
    height?: number | string
}

const CategoryEmptyState: FC<Props> = ({ height }) => {
    const {t} = useTranslation('common');
  return (
    <Box
        sx={{
            position: 'relative',
            cursor: 'pointer',
        }}
    >
        <Box sx={{ width: '100%', height: height || 300, borderRadius: 3, backgroundColor: 'grey.2400', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={emptyState} alt='category empty state' width={120} height={130} />
        </Box>
        <Box
            pt={2}
            display='flex'
            flexDirection='column'
        >
            <Typography
                variant='h4'
                sx={{ fontWeight: '600', letterSpacing: '0.2px', mb: 1.75 }}
            >
                {t('categoryName')}
            </Typography>
            <Typography
                variant='h5'
                component='span'
                sx={{ fontWeight: 500, fontSize: 12, lineHeight: '16px', letterSpacing: '0.2px', opacity: 0.5 }}
            >
                {0} {t('items')}
            </Typography>
        </Box>
    </Box>
  )
}

export default CategoryEmptyState;