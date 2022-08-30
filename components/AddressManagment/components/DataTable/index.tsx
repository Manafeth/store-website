/* eslint-disable no-nested-ternary */
import React, { FC, ReactElement, useEffect, useRef, useState, ChangeEvent } from 'react';
// import Skeleton from 'react-loading-skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TableRowSkeletton from '../TableRowSkeletton';

interface Column {
  id: number;
  field: string;
  alignment?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
  // eslint-disable-next-line no-unused-vars
  render?: (data?: any, row?: any, field?: string) => ReactElement;
}

interface Props {
  columns: Column[];
  rowsData: any[];
  rowFields: Column[];
  keyField: string;
  // onAscendingSort?: () => void;
  // onDescendingSort?: () => void;
  // eslint-disable-next-line no-unused-vars
  onSearch?: (ev: ChangeEvent<HTMLInputElement>) => void;
  paginationProps?: {
    itemsPerPage?: number;
    // eslint-disable-next-line no-unused-vars
    setItemsPerPage?: (arg: number) => void;
    count?: number;
    page?: number;
    // eslint-disable-next-line no-unused-vars
    setPage?: (arg: number) => void;
  };
  loading?: boolean;
  tabelSkeleton?: ReactElement;
  noDataContent?: ReactElement;
}

const DataTable: FC<Props> = ({
  columns,
  rowsData,
  rowFields,
  keyField,
  // onAscendingSort,
  // onDescendingSort,
  onSearch,
  paginationProps,
  loading,
  tabelSkeleton,
  noDataContent,
}) => {
  const [inViewItems, setInViewItem] = useState({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const ref = useRef<null | HTMLTableElement>(null);
  function resolvePath(object: {}, field: string) {
    if (field)
      return field.split('.').reduce((acc: any, item: string) => (acc[item] !== undefined && acc[item] !== null ? acc[item] : ''), object);
    return object;
  }

  function checkInview(fieldName?: string, isInView?: any) {
    setInViewItem((prevState) => ({
      ...prevState,
      [fieldName || '']: isInView,
    }));
  }

  const observer = (fieldName?: string) => new IntersectionObserver(
    ([entry]) => checkInview(fieldName, entry.isIntersecting),
  );

  useEffect(() => {
    if (ref?.current) {
      // @ts-ignore
      ref.current?.querySelectorAll('tbody tr:first-of-type td').forEach((item: any) => {
        observer(item.id).observe(item);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, rowsData]);

  // @ts-ignore
  const showHiddenColumnsMenu = Object.keys(inViewItems).filter((item) => inViewItems[item] === false).length > 0;

  useEffect(() => {
    if (!showHiddenColumnsMenu)
      handleClose();
  }, [showHiddenColumnsMenu]);

  return (
    <TableContainer component={Paper} sx={{ borderRadius: '10px', overflow: 'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Table sx={{ minWidth: 0, borderRadius: '12px 12px 0px 0px', overflow: 'hidden' }} aria-label="simple table" ref={ref}>
          <TableHead sx={{ backgroundColor: 'grey.1000' }}>
            <TableRow sx={{ '& td, & th': { border: 0 } }}>
              {false && (
                <TableCell />
              )}
              {columns.map((column) => (
                <TableCell align={column.alignment || 'left'} key={column.id} sx={{ whiteSpace: 'nowrap', color: 'secondary.contrastText', fontWeight: 'bold' }}>{column.render ? column.render() : column.field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRowSkeletton tabelSkeleton={tabelSkeleton} />
            ) : (
              rowsData.map((row, index) => (
                <TableRow
                  key={row[keyField] || index}
                  sx={{ '& td, & th': { border: 0, py: 2 }, '&:nth-of-type(even)': { backgroundColor: '#F5F5FA66' } }}
                >
                  {false && (
                    <TableCell scope="row">
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {/* @ts-ignore */}
                        {Object.keys(inViewItems).filter((item) => !inViewItems[item]).map((key) => {
                          const rowField = rowFields.find((item) => item.field === key);
                          if (rowField) {
                            const column = columns.find((item) => item.id === rowField.id);
                            return (
                              <MenuItem key={key}>
                                <Box component="span" sx={{ mr: 2 }}>
                                  {column?.field}:
                                </Box>
                                {rowField.render ? rowField.render(resolvePath(row, rowField.field), row, rowField.field) : resolvePath(row, rowField.field)}
                              </MenuItem>
                            );
                          }
                          return null;
                        })}
                      </Menu>
                    </TableCell>
                  )}
                  {rowFields.map((item) => (
                    <TableCell scope="row" key={item.id} valign="middle" align={item.alignment || 'left'} sx={{ whiteSpace: 'nowrap', fontWeight: 'bold' }} id={item.field}>
                      {item.render ? item.render(resolvePath(row, item.field), row, item.field) : resolvePath(row, item.field)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {noDataContent && rowsData.length <= 0 && !loading && (
          <Paper sx={{ textAlign: 'center' }}>
            {noDataContent}
          </Paper>
        )}
      </Box>
    </TableContainer>
  );
};
export default DataTable;
