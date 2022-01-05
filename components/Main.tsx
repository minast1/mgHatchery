import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, Grid} from '@material-ui/core';
import InvoiceTable from './InvoiceTable';
import SearchIcon from '@material-ui/icons/Search';
import Generator from './Generator';
import Paper from '@material-ui/core/Paper'
import { useState, useEffect } from 'react';
import SearchBar from 'material-ui-search-bar';
import { dataStore } from '../lib/supabaseStore';
//import { supabase } from '../lib/supabaseClient';


const useStyles = makeStyles((theme) => ({

  iconButton: { padding: 10 },
  input: {
    
    marginLeft: theme.spacing(1),
    flex: 1 ,
  },
  searchForm: {
   // padding: '2px 4px',
   // display: 'flex',
   // alignItems: 'center',
    '&:hover, &:focus': {
       border:'1px solid blue'
    },
    [theme.breakpoints.down('md')]: {
      width: 300,
     ///
    },
    width: 500,
    marginBottom: 20,
  },
  focused: {},
  paper: {
     display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '120px',
      height: '110px',
      padding: '1rem',
      textAlign: 'center',
      borderBottom: '1px solid rgb(184, 184, 184)',
      //border-radius: 4px,
      backgroundColor: 'white',
  },
  p: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    fontSize: '27px',
     lineHeight: '10px',
   // padding: '0px 25px 10px 25px',
    cursor: 'pointer',
    color: 'white'
  }
  
}));


const Main = () => {
  const classes = useStyles();
  const [invoice, addInvoice] = useState<boolean>(false);
  const [searchData, changeData] = useState<string>('');
  const [partial, setPartial] = useState<number>(0);
  const [unpaid, setUnpaid] = useState<number>(0);
  const [hasBalance, setHasBalance] = useState<number>(0);
  const originalData = dataStore(state => state.data);
  const updateData = dataStore(state => state.updateData);
  //const copyOfOriginalData:Invoice[] = Array.from([...originalData])
  
  const getPartiallyPaidInvoices = () => {
    const partial = originalData?.filter(({ status }) => status === 'PARTIAL_PAYMENT');
    setPartial(partial.length);
  }

   const getUnpaidInvoices = () => {
    const partial = originalData?.filter(({ status }) => status === 'UNPAID');
    setUnpaid(partial.length);
   }
  
   const getInvoiceWithBalance = () => {
    const partial = originalData?.filter(({ status }) => status === 'BALANCE');
    setHasBalance(partial.length);
  }

 


  useEffect(() => {
    getPartiallyPaidInvoices();
    getUnpaidInvoices();
    getInvoiceWithBalance();
      
  }, [originalData]);

  const queryInvoiceData = async (queryText:string) => {
        
   /* let { data: Invoice } = await supabase
      .from('Invoice')
      .select(`
         id, date, invoice_id, name, address, phone, amount,
         Item (
         description, quantity, rate, amount)`)
      .textSearch('name', `${queryText}`); */
    //if (Invoice) updateData(Invoice);

    //update the table data with results
  }

  const resetTableToOriginalState = () => {
   changeData("");
    //console.log({ 'onReset': copyOfOriginalData });
       //updateData(copyOfOriginalData)
  }

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={3}>
            <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#1976d2', color: 'white'}}>
              <div>
                <p className={ classes.p}>{dataStore.getState().data.length} </p>
                 <h2 style={{color: 'white'}}>Total Invoices</h2>
              </div>
             </Paper>
          </Grid>
          <Grid item xs={3}>
             <Paper elevation={3} className={classes.paper} style={{ backgroundColor:'#ffa726', color: 'black'}}>
              <div>
                <p className={ classes.p}>{partial} </p>
                 <h2 style={{color: 'white'}}>Partially Paid Invoices</h2>
              </div>
             </Paper>
          </Grid>
          <Grid item xs={3}>
             <Paper elevation={3} className={classes.paper} style={{ backgroundColor:'#43a047', color: 'black'}}>
              <div>
                <p className={ classes.p}>{hasBalance} </p>
                 <h2 style={{color: 'white'}}>OverPaid Balances</h2>
              </div>
             </Paper>
          </Grid>
           <Grid item xs={3}>
             <Paper elevation={3} className={classes.paper} style={{ backgroundColor:'#d50000', color: 'black'}}>
              <div>
                <p className={ classes.p}>{unpaid} </p>
                 <h2 style={{color: 'white'}}>Unpaid Invoices</h2>
              </div>
             </Paper>
          </Grid>
        </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" onClick={() => addInvoice(!invoice)}>add invoice</Button>
              </Box>
            </Grid>
           
        {
           invoice && <Grid item>
          <Generator />
        </Grid>}
        
            <Grid item xs={12}>
              <Card>
            <CardContent>
              <SearchBar
                className={classes.searchForm}
                value={searchData}
                onChange={(newValue) => queryInvoiceData(newValue)}
                onCancelSearch={() =>  resetTableToOriginalState()}
              />
                  <InvoiceTable/>
                </CardContent>
              </Card>
              
            </Grid>
             </Grid>
    )
}

export default Main
