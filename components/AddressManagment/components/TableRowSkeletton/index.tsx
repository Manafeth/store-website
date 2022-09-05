import React, { FC } from 'react';
import TableRow from '@mui/material/TableRow';

interface Props {
  tabelSkeleton: any;
}

const TableRowSkeletton: FC<Props> = ({ tabelSkeleton }) => (
  <>
    {
      [1, 2, 3].map((item) => (
        <TableRow
          sx={{ '& td, & th': { border: 0, py: 3 } }}
          key={item}
        >
          {tabelSkeleton}
        </TableRow>
      ))
    }
  </>
);

export default TableRowSkeletton;
