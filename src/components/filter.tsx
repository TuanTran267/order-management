import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function Filter(props: {
  data: any;
  onFilterChange: () => void;
}) {
  let filterData = props.data;

  const handleChange = (type: string, event: any) => {
    if (event.target.value !== '') {
      filterData[type] = event.target.value;
      props.onFilterChange(filterData);
    } else {
      delete filterData[type];
    }
  };

  return (
    <Paper>
      <Typography variant="h6">Filters</Typography>

      <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <TextField
          id="orderID"
          label="Order ID"
          variant="outlined"
          style={{ marginRight: 10 }}
          onChange={(e) => {
            handleChange('id', e);
          }}
        />
        <FormControl
          sx={{ m: 1, minWidth: 200 }}
          style={{ margin: 0, marginRight: 10, textAlign: 'left' }}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-label"
            label="Status"
            onChange={(e) => {
              handleChange('status', e);
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Created'}>Created</MenuItem>
            <MenuItem value={'Accepted'}>Accepted</MenuItem>
            <MenuItem value={'DriverAssigned'}>DriverAssigned</MenuItem>
            <MenuItem value={'Delivering'}>Delivering</MenuItem>
            <MenuItem value={'Done'}>Done</MenuItem>
            <MenuItem value={'Canceled'}>Canceled</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="customerName"
          label="Customer Name"
          variant="outlined"
          onChange={(e) => {
            handleChange('customerName', e);
          }}
          style={{ marginRight: 10 }}
        />

        <TextField
          id="riderName"
          label="Rider Name"
          variant="outlined"
          onChange={(e) => {
            handleChange('riderName', e);
          }}
          style={{ marginRight: 10 }}
        />

        <TextField
          id="merchantName"
          label="Merchant Name"
          variant="outlined"
          onChange={(e) => {
            handleChange('merchantName', e);
          }}
          style={{ marginRight: 10 }}
        />

        <FormControl
          sx={{ m: 1, minWidth: 200 }}
          style={{ margin: 0, marginRight: 10, textAlign: 'left' }}>
          <InputLabel id="time-label">Updated Time</InputLabel>
          <Select
            labelId="time-label"
            id="time-label"
            label="Updated Time"
            onChange={(e) => {
              handleChange('updateTime', e);
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'5'}>last 5 mins</MenuItem>
            <MenuItem value={'10'}>last 10 mins</MenuItem>
            <MenuItem value={'15'}>last 15 mins</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}
