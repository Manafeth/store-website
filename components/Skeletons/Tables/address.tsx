import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';

const AddressTabelSkeleton = () => (
  <>
    <TableCell align="center" sx={{ whiteSpace: 'nowrap', color: 'text.secondary', fontWeight: 'bold' }}>
      <Skeleton height={20} width={100} style={{ margin: '5px', top: '15px' }} inline />
    </TableCell>
    <TableCell align="center" sx={{ whiteSpace: 'nowrap', color: 'text.secondary', fontWeight: 'bold', borderRadius: '10px' }}>
      <Box sx={{ display: 'flex' }}>
        <Skeleton height={20} width={20} style={{ margin: '5px', top: '15px' }} inline />
        <Skeleton height={20} width={20} style={{ margin: '5px', top: '15px' }} inline />
      </Box>
    </TableCell>
  </>
);

export default AddressTabelSkeleton;
