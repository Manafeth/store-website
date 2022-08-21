import React, { FC } from 'react';
import Box from '@mui/material/Box';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

const ProductPagination = () => {
  const { items } = usePagination({
    count: 5,
  });

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
                    width: '46px',
                    height: '74px',
                    backgroundColor: selected ? '#000' : '#fff',
                    color: selected ? '#fff' : '#000',
                    borderLeft: 'none',
                    borderRight: 'none',
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
                    width: '83px',
                    height: '74px',
                    fontWeight: selected ? 'bold' : undefined,
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
