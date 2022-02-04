import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import moment from 'moment';
import * as React from 'react';
import { useEffect } from 'react';

import Filter from './filter';

interface Dish {
  name: string;
  price: number;
}

interface Data {
  id: string;
  status: string;
  customerName: string;
  riderName: string;
  orderAddress: string;
  merchantName: string;
  merchantAddress: string;
  dishes: Dish[];
  totalPrice: number;
  updateTime: string;
}

function createData(
  id: string,
  status: string,
  customerName: string,
  riderName: string,
  orderAddress: string,
  merchantName: string,
  merchantAddress: string,
  dishes: Dish[],
  totalPrice: number,
  updateTime: string,
) {
  return {
    id,
    status,
    customerName,
    riderName,
    orderAddress,
    merchantName,
    merchantAddress,
    dishes,
    totalPrice,
    updateTime,
  };
}

const rows = [
  createData(
    '1',
    'Created',
    'John',
    'Rider1',
    '123 ABC',
    'ABC',
    '123 XYZ',
    [
      { name: 'Fried Chicken', price: 100000 },
      { name: 'Fried Chicken', price: 100000 },
    ],
    100000,
    '17-01-2016 08:44:30',
  ),
  createData(
    '2',
    'Accept',
    'Chris',
    'Rider2',
    '123 ABC',
    'ABC',
    '123 XYZ',
    [
      { name: 'Fried Chicken', price: 100000 },
      { name: 'Fried Chicken', price: 100000 },
    ],
    100000,
    '17-01-2016 08:44:29',
  ),
  createData(
    '3',
    'DriverAssigned',
    'Ryan',
    'Rider3',
    '123 ABC',
    'ABC',
    '123 XYZ',
    [
      { name: 'Fried Chicken', price: 100000 },
      { name: 'Fried Chicken', price: 100000 },
    ],
    100000,
    '17-01-2016 08:44:29',
  ),
  createData(
    '4',
    'Delivering',
    'John',
    'Rider1',
    '123 ABC',
    'ABC',
    '123 XYZ',
    [
      { name: 'Fried Chicken', price: 100000 },
      { name: 'Fried Chicken', price: 100000 },
    ],
    100000,
    '17-01-2016 08:44:29',
  ),
  createData(
    '5',
    'Delivering',
    'David',
    'Rider1',
    '123 ABC',
    'ABC',
    '123 XYZ',
    [
      { name: 'Fried Chicken', price: 100000 },
      { name: 'Fried Chicken', price: 100000 },
    ],
    100000,
    '17-09-2016 08:44:29',
  ),
  createData(
    '6',
    'Delivering',
    'Ron',
    'Rider1',
    '123 ABC',
    'ABC',
    '123 XYZ',
    [
      { name: 'Fried Chicken', price: 100000 },
      { name: 'Fried Chicken', price: 100000 },
    ],
    100000,
    '17-01-2016 08:44:29',
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';
type Status =
  | 'Created'
  | 'Accepted'
  | 'DriverAssigned'
  | 'Delivering'
  | 'Done'
  | 'Canceled';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  // eslint-disable-next-line no-unused-vars
  a: { [key in Key]: number | string },
  // eslint-disable-next-line no-unused-vars
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'Order ID',
  },
  {
    id: 'customerName',
    numeric: false,
    disablePadding: true,
    label: 'Customer Name',
  },
  {
    id: 'riderName',
    numeric: false,
    disablePadding: false,
    label: 'Rider',
  },
  {
    id: 'orderAddress',
    numeric: false,
    disablePadding: false,
    label: 'Order Address',
  },
  {
    id: 'merchantName',
    numeric: false,
    disablePadding: false,
    label: 'Merchant Name',
  },
  {
    id: 'merchantAddress',
    numeric: false,
    disablePadding: false,
    label: 'Merchant Address',
  },
  {
    id: 'dishes',
    numeric: false,
    disablePadding: false,
    label: 'Order',
  },
  {
    id: 'totalPrice',
    numeric: true,
    disablePadding: false,
    label: 'Total (VNĐ)',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Delivery Status',
  },
  {
    id: 'updateTime',
    numeric: true,
    disablePadding: false,
    label: 'Update Time',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  // eslint-disable-next-line no-unused-vars
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  // eslint-disable-next-line no-unused-vars
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div">
          Orders
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderData, setOrderData] = React.useState(rows);
  const [filterData, setFilterData] = React.useState({});

  useEffect(() => {
    // console.log(new Date("2013/09/05 15:34:00"));
    // const interval = setInterval(() => {
    //   setTimer(new Date());
    // }, 1000);
    // return () => clearInterval(interval);
    // if (Object.keys(filterData).length > 0) {
    //   console.log(filterData);
    //   // console.log(orderData);
    //
    //   const filtedData = rows.filter((data) => {
    //     for (let key in filterData) {
    //       if (key === 'updatedTime') {
    //         console.log('update', data);
    //       } else {
    //         if (data[key] === undefined || data[key] !== filterData[key]) return false;
    //       }
    //     }
    //     return true;
    //   });
    //
    //   console.log(filtedData);
    //
    //   setOrderData(filtedData);
    // } else {
    //   setOrderData(rows);
    // }
  }, []);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = orderData.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const renderStatus = (status: Status) => {
    let statusColor = 'default';
    switch (status) {
      case 'Created':
        statusColor = 'primary';
        break;
      case 'Accepted':
        statusColor = 'secondary';
        break;
      case 'Delivering':
        statusColor = 'warning';
        break;
      default:
        statusColor = 'default';
    }
    return <Chip label={status} color={statusColor} />;
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const handleFilterChange = (data: React.SetStateAction<{}>) => {
    setFilterData(data);
    console.log('handle change filter', filterData);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const applyFilter = () => {
    if (Object.keys(filterData).length > 0) {
      const filteredData = rows.filter((data) => {
        for (let key in filterData) {
          if (key === 'updatedTime') {
            let currentTime = moment('2013-09-05 15:34:00', 'YYYY-MM-DD HH:mm:ss').unix();
            console.log('current', currentTime);
          } else {
            if (data[key] === undefined || data[key] !== filterData[key]) return false;
          }
        }
        return true;
      });
      setOrderData(filteredData);
    } else {
      setOrderData(rows);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Filter data={filterData} onFilterChange={handleFilterChange} />
        <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="contained" onClick={applyFilter}>
            Apply
          </Button>
        </Box>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orderData.length}
            />
            <TableBody>
              {orderData
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.customerName}</TableCell>
                      <TableCell align="left">{row.riderName}</TableCell>
                      <TableCell align="left">{row.orderAddress}</TableCell>
                      <TableCell align="left">{row.merchantName}</TableCell>
                      <TableCell align="left">{row.merchantAddress}</TableCell>
                      <TableCell align="left">
                        {row.dishes.map((dish: Dish, index: number) => (
                          <div key={index}>
                            {' '}
                            {index + 1} - {dish.name}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell align="center">
                        {numberWithCommas(row.totalPrice)}
                      </TableCell>
                      <TableCell align="center">{renderStatus(row.status)}</TableCell>
                      <TableCell align="right">{row.updateTime}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orderData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
