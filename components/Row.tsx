import { IconButton, TableBody, TableCell, TableRow, Button, Chip, Collapse, Box, Table, TableHead, Grid, Typography } from '@material-ui/core'
import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DoneIcon from '@material-ui/icons/Done';
import { dataStore, CustomInvoice, InvoiceItem } from '../lib/supabaseStore';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },

  },
  /* delete: {
    // "&:hover": { backgroundColor: "red" },
     //"&:focus": { backgroundColor: "red" }}*/
});



function Row({ invoiceItem }: { invoiceItem: CustomInvoice }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [balance, setBalance] = React.useState(0);
  const [amts, setArray] = React.useState<number[]>([]);
  const updateData = dataStore(state => state.updateData);


  function getBalance(invoice: CustomInvoice): number {
    let arrayOfAmounts: number[] = [0];
    //const { Item , amount } = invoice;
    invoice.Item.forEach(({ amount }) => {
      arrayOfAmounts = [...arrayOfAmounts, amount]

    })
    setArray(arrayOfAmounts)
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    const total = arrayOfAmounts.reduce(reducer)
    const balance: number = total - invoice.amount
    return balance
  }

  function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
  }

  React.useEffect(() => {
    const bal = getBalance(invoiceItem)
    setBalance(bal)
  }, []);

  const deleteInvoiceWithItems = async (invoiceId: number) => {
           //delete invoice
  }
  ///console.log(amts);
  return (
    <React.Fragment>
      <TableRow className={classes.root} hover>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {invoiceItem.name}
        </TableCell>

        <TableCell align="left">₵ {ccyFormat(invoiceItem.amount)}</TableCell>
        <TableCell align="left">{invoiceItem.phone}</TableCell>
        <TableCell align="left">{
          balance === 0 ?
            <Chip
              style={{ backgroundColor: 'green' }}
              size="small"
              label="Transaction Complete"
              color="secondary"
              icon={<DoneIcon />}
            /> : <Chip
              style={{ backgroundColor: 'red' }}
              size="small"
              label="Pending Balance"
              color="secondary"
              icon={<ErrorOutlineOutlinedIcon />}
            />
        }</TableCell>
        <TableCell align="left">{
          <Grid container>
            <Grid item xs={6} sm={12} md={6}>
              <IconButton
                href={`/Dashboard/${encodeURIComponent(invoiceItem.id)}`}
                aria-label="print"
                size="small"
                onClick={(event) => {

                }}
                color="primary"
              >
                <PrintIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} sm={12} md={6}>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={(event) => deleteInvoiceWithItems(invoiceItem.id)}
                style={{ color: 'red' }}
              >
                <DeleteIcon />
              </IconButton>

            </Grid>
          </Grid>
        }</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} bgcolor="#f5f5f5">
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', paddingLeft: 15 }} gutterBottom component="div">
                {`Tansaction date: ${invoiceItem.date}`}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoiceItem.Item.map((itemRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {itemRow.description}
                      </TableCell>
                      <TableCell>₵ {ccyFormat(itemRow.rate)}</TableCell>
                      <TableCell align="right">{itemRow.quantity}</TableCell>
                      <TableCell align="right">
                        ₵ {ccyFormat(itemRow.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default Row
