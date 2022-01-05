import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Item } from '@prisma/client';


const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 14
  },
  balancefont: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

function ccyFormat(num: number) {
  return `${num?.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}


function subtotal(items: Item[]) {
  return items?.map(({ amount }) => Number(amount)).reduce((accumulator, currentValue) => accumulator + currentValue);
}
  

export default function SpanningTable({invoiceItems, amount}: {invoiceItems:Item[], amount:number}) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="spanning table">

        <TableHead>
          <TableRow>
            <TableCell>ITEM DESCRIPTION</TableCell>
            <TableCell align="right">RATE</TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">AMOUNT(₵)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceItems?.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">₵ {row.rate}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">₵ {row.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} align="right" classes={{ root: classes.font }}>TOTAL</TableCell>
            <TableCell align="right">₵ {subtotal(invoiceItems)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" classes={{ root: classes.font }} style={{ borderBottomColor: '#42a5f5' }}>PAID</TableCell>
            <TableCell align="right" style={{ borderBottomColor: '#42a5f5' }}>₵ {amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} align="right" classes={{ root: classes.balancefont }}>BALANCE DUE GH</TableCell>

            <TableCell align="right" classes={{ root: classes.balancefont }}>₵ {subtotal(invoiceItems) -amount}</TableCell>
          </TableRow>
        </TableBody>

      </Table>
    </TableContainer>
  );
}
