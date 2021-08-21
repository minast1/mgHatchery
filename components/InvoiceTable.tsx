import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {  TableFooter, TablePagination } from '@material-ui/core';
import { dataStore } from '../lib/supabaseStore';
import Row from './Row';
import { supabase } from '../lib/supabaseClient';


  export default function CollapsibleTable() {
 
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const data = dataStore(state => state.data);
    const setData = dataStore(state => state.setData);
     const updateData = dataStore(state => state.updateData);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
 
   const fetchInvoices = async () =>{
       const { data: Invoice } = await supabase
         .from('Invoice')
         .select(`
         id, date, invoice_id, name, address, phone, amount,
         Item (
         description, quantity, rate, amount)`).order('id',{ascending:false});
       
        if(Invoice) updateData(Invoice)
   }
    
   React.useEffect(() => {
    
     const mySubscription = supabase.from('Item').on('*', () => fetchInvoices()).subscribe()
     return () => { supabase.removeSubscription(mySubscription) }
   }, []);
  // console.log(data);
   
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>ITEMS</TableCell>
            
            <TableCell align="left">DATE</TableCell>
            <TableCell align="left">CUST. NAME</TableCell>
            <TableCell align="left">CONTACT</TableCell>
            <TableCell align="left">AMOUNT</TableCell>
             <TableCell align="center">STATUS</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        
          {
            data.map(el => (
              <Row key={el.id} invoiceItem={ el }/>
             ))
          }
        <TableFooter>
          <TableRow>
             <TablePagination
        rowsPerPage={rowsPerPage}
        count={data.length}
        page={page}
        onPageChange={ handleChangePage}
      />
          </TableRow>
      </TableFooter>
      </Table>
     
    </TableContainer>
  );
}
