import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, Grid, IconButton, InputBase } from '@material-ui/core';
import InvoiceTable from './InvoiceTable';
import SearchIcon from '@material-ui/icons/Search';
import Generator from './Generator';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  
  searchForm: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 300 
    },
    width: 500,
    height: 42,
    border: '1px solid darkgray',
    borderRadius: 5,
    marginBottom: 20 
  },
  iconButton: { padding: 10 },
  input: {
    "& input:hover $searchForm": {
       border: '1px solid black'
    },
    "& input:focus $searchForm": {
             border: '1px solid yellow'
       },
    marginLeft: theme.spacing(1),
    flex: 1 ,
  }
}));

const Main = () => {
  const classes = useStyles();
  const [invoice, addInvoice] = useState<boolean>(false)
 // console.log(invoice);
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
              <Box component="form" className={classes.searchForm}>
                    <IconButton className={classes.iconButton} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      className={classes.input}
                    placeholder="Search Invoices"/>
                  </Box>
                  <InvoiceTable/>
                </CardContent>
              </Card>
              
            </Grid>
             </Grid>
    )
}

export default Main
