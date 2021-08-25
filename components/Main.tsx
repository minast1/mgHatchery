import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, Grid} from '@material-ui/core';
import InvoiceTable from './InvoiceTable';
import SearchIcon from '@material-ui/icons/Search';
import Generator from './Generator';
import { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import { dataStore, Invoice } from '../lib/supabaseStore';
import { supabase } from '../lib/supabaseClient';


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
    //height: 42,
   // border: '1px solid darkgray',
   // borderRadius: 5,
    marginBottom: 20,
  },
  focused: {}
  
}));


const Main = () => {
  const classes = useStyles();
  const [invoice, addInvoice] = useState<boolean>(false);
  const [searchData, changeData] = useState<string>('')
  const originalData = dataStore(state => state.data);
  const updateData = dataStore(state => state.updateData);
  //const copyOfOriginalData:Invoice[] = Array.from([...originalData])
 

  const queryInvoiceData = async (queryText:string) => {
        
    let { data: Invoice } = await supabase
      .from('Invoice')
      .select(`
         id, date, invoice_id, name, address, phone, amount,
         Item (
         description, quantity, rate, amount)`)
      .textSearch('name', `${queryText}`);
    if (Invoice) updateData(Invoice);

    //update the table data with results
  }

  const resetTableToOriginalState = () => {
   changeData("");
    //console.log({ 'onReset': copyOfOriginalData });
       //updateData(copyOfOriginalData)
  }

    return (
         <Grid container spacing={3}>
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
