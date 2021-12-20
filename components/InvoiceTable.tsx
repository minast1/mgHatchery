import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableBody, TableFooter, TablePagination } from '@material-ui/core';
import { dataStore } from '../lib/supabaseStore';
import Row from './Row';


export default function CollapsibleTable() {

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const data = dataStore(state => state.data);
  const setData = dataStore(state => state.setData);
  const updateData = dataStore(state => state.updateData);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

 

  React.useEffect(() => {

    //const mySubscription = supabase.from('Item').on('*', () => fetchInvoices()).subscribe()
   // return () => { supabase.removeSubscription(mySubscription) }
  }, []);
  //console.log(data);
  
  return (
    <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>

            <TableCell align="left">CUST. NAME</TableCell>
            
            <TableCell align="left">AMOUNT</TableCell>
             <TableCell align="left">CUST.CONTACT</TableCell>
            <TableCell align="left">TRANSACTION STATUS</TableCell>
            <TableCell align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
           {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
              <Row key={row.id} invoiceItem={row} />
          ))}
           
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPage={rowsPerPage}
              count={data.length}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
