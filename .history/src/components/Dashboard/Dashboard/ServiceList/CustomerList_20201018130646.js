import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));


const CustomerList = ({customer,handleUpdate}) => {
    
    const classes = useStyles();
     
    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
         setStatus(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
   
   
        
    return (
        <StyledTableRow key={customer._id}>
        <StyledTableCell component="th" scope="row">
          {customer.name}
        </StyledTableCell>
        <StyledTableCell align="right">{customer.email}</StyledTableCell>
        <StyledTableCell align="right">{customer.course}</StyledTableCell>
        <StyledTableCell align="right">{customer.projectDetails}</StyledTableCell>
        <StyledTableCell align="right">

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          onChange={handleChange}
          onClick={(e)=>console.log(e.target.value)}
        >
          <MenuItem value="">
             <em>(defaultValue) {customer.status==='true'?"Done":"Pending"}</em>
          </MenuItem>
          <MenuItem value={false}>Pending</MenuItem>
          <MenuItem value={true}>Done</MenuItem>
        </Select>
      </FormControl>
        </StyledTableCell>
      </StyledTableRow>
    );
};

export default CustomerList;