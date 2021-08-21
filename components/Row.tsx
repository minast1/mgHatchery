import { IconButton, TableBody, TableCell, TableRow, Button, Chip, Collapse, Box, Table, TableHead, Grid} from '@material-ui/core'
import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DoneIcon from '@material-ui/icons/Done';
import { Invoice, InvoiceItem } from '../lib/supabaseStore';
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
});



function Row({ invoiceItem }: { invoiceItem: Invoice }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [balance, setBalance] = React.useState(0);
  const [amts, setArray] = React.useState<number[]>([]);

  function getBalance(invoice: Invoice): number {
  let arrayOfAmounts: number[] = [0];
  //const { Item , amount } = invoice;
    invoice.Item.forEach(({ amount }) => {
       arrayOfAmounts = [...arrayOfAmounts, amount]
    
    })
     setArray(arrayOfAmounts)
  const reducer = (accumulator:number, currentValue : number) => accumulator + currentValue;
  const total = arrayOfAmounts.reduce(reducer)
  const balance:number = total - invoice.amount
  return balance
  }
  
  React.useEffect(() => {
    const bal = getBalance(invoiceItem)
    setBalance(bal)
  }, []);

  ///console.log(amts);
  return (
   <TableBody> 
                  <TableRow className={classes.root}> 
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
                   
                    <TableCell>{ invoiceItem.date}</TableCell>
                    <TableCell>{ invoiceItem.name}</TableCell>
                 <TableCell>{invoiceItem.phone}</TableCell>
        <TableCell>{invoiceItem.amount}GH</TableCell>
        <TableCell align="center">
          {
            
            balance === 0 ?
              <Chip
            style={{backgroundColor:'green'}}
        size="small"
            label="Transaction Complete"
            color="secondary"
            icon={<DoneIcon />}
          /> :  <Chip
            style={{backgroundColor:'red'}}
        size="small"
            label="Pending Balance"
            color="secondary"
            icon={<ErrorOutlineOutlinedIcon />}
          />
          }
        </TableCell>
        <TableCell align="right" style={{borderBottom : '1px solid lightgray'}}>
          <Grid container>
            <Grid item xs={6} sm={12} md={6}>
<Button variant="contained" size="small" color="primary"><PrintIcon/></Button>
            </Grid>
            <Grid item xs={6} sm={12} md={6}>
 <Button variant="contained" size="small" color="secondary" style={{backgroundColor:'red'}}><DeleteIcon/></Button>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
      
     
                  <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} bgcolor="lightgray">
            
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={6}>Description</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total Amount($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 {invoiceItem.Item?.map((el, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" colSpan={6}>
                          {el.description}
                      </TableCell>
                     <TableCell>{`${el.rate}GH`}</TableCell>
                     <TableCell align="right">{el.quantity }</TableCell>
                      <TableCell align="right">
                        {`${el.amount}GH`}
                      </TableCell>
                    </TableRow>
               ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
                </TableRow>
          
                  </TableBody>
  )
}

export default Row
