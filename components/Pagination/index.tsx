import React, { ChangeEvent, FC } from 'react';
import Box from '@mui/material/Box';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});


interface Props {
  totalPages: number,
  page: number,
  onChange: (_: ChangeEvent<unknown>, page: number) => void
}

const ProductPagination: FC<Props> = ({ totalPages, page, onChange }) => {
  const { items } = usePagination({
    count: totalPages,
    page,
    onChange
  });
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 3,
      }}
    >
      <nav>
        <List sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 1.5, border: '1px solid #BDBDBD', overflow: 'hidden' }}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = <span style={{ borderTop: '1px solid #F3F3F3', borderBottom: '1px solid #F3F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '100%' }}>…</span>;
            } else if (type === 'page') {
              children = (
                <button
                  type='button'
                  style={{
                    fontWeight: 'bold',
                    width: matches ? '28px' : '46px',
                    height: '74px',
                    backgroundColor: selected ? '#1995AD' : '#fff',
                    color: selected ? '#fff' : '#323940',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button
                  type='button'
                  style={{
                    border: 'none',
                    width: matches ? '70px' : '83px',
                    height: '74px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: item.disabled ? '#C6C6C6' : '#323940',
                    backgroundColor: item.disabled ? '#F3F3F3' : '#fff',
                  }}
                  {...item}
                >
                  {type}
                </button>
              );
            }

            return <li key={index} style={{ display: 'flex', alignItems: 'streatch', justifyContent: 'center' }}>{children}</li>;
          })}
        </List>
      </nav>
    </Box>
  );
};
export default ProductPagination;
