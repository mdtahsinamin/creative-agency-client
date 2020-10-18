import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { AgencyUser } from '../../../../App';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import CustomerList from './CustomerList';
import './ServiceList.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const ServiceList = () => {

  const classes = useStyles();
  
  const [loginUser , setLoginUser] = useContext(AgencyUser);

  const [allCustomer,setAllCustomer] = useState([]);
  
   useEffect(()=>{
       
       async function loadData() {
            
           const request = await fetch('http://localhost:5200/allCustomer')

           return request;
       }

       loadData().then(response => response.json())
       .then(data =>  setAllCustomer(data));      
   },[])
   

   const handleUpdate =(id,updatedValue)=>{
          
      const updateValue = {id,updatedValue};

      fetch(`http://localhost:5200/status/:${id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(updateValue)
      }).then(response => response.json)
      .then(data =>{
         console.log('updated');
      })
   }
    return (
        <section className="container-fluid row">
            <div>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>
            <div className="col-md-9 p-4 pl-5 order-place">

              <div className='pl-3'>

              <TableContainer component={Paper}>
             <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="center">Email ID</StyledTableCell>
                <StyledTableCell align="center">Service</StyledTableCell>
                <StyledTableCell align="center">Project Details</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead> 
            <TableBody>
               {
                 allCustomer.length === 0 ? <CircularProgress color="secondary"/> : 
                 allCustomer.map(customer=> <CustomerList customer={customer} key={customer._id} handleUpdate={handleUpdate}></CustomerList>
                )
               }
              </TableBody>  
               </Table>
          </TableContainer>
              </div>

            </div>
        </section>
    );
};

export default ServiceList;

/*
 <h5 className="text-brand mt-2">Service List</h5>

              { loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}

*/