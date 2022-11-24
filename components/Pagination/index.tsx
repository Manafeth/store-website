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
  onChange: (_:ChangeEvent<unknown>, page: number) => void
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
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <button
                  type='button'
                  style={{
                    fontWeight: 'bold',
                    width: matches ? '28px' : '46px',
                    height: '74px',
                    backgroundColor: selected ? '#000' : '#fff',
                    color: selected ? '#fff' : '#000',
                    borderLeft: 'none',
                    borderRight: 'none',
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
                    width: matches ? '70px' : '83px',
                    height: '74px',
                    fontWeight: selected ? 'bold' : undefined,
                    cursor: 'pointer'
                  }}
                  {...item}
                >
                  {type}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </Box>
  );
};
export default ProductPagination;
