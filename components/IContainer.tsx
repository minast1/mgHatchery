import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import { invoiceState, obj, useInvoiceStore } from '../lib/invoiceStore';



const IContainer = ({ productItem , toggleSnack}: { productItem: obj , toggleSnack: () => void}) => {
    const setItems = useInvoiceStore(state => state.setItems);
    const [itemAdded, setItemAdded] = useState<boolean>(false)
   
  return (
    
        <Grid container  spacing={2} alignItems="center"> 
               
                <Grid item xs={6}>
                   <TextField
                    fullWidth
                    size="small"
                label="Description"
                name="description"
                    onChange={(event) => { productItem = { ...productItem, description: event.target.value } }}
                required
                variant="outlined"
              />
                </Grid>
                <Grid item xs={1}>
                   <TextField
                    fullWidth
                    size="small"
                label="Quantity"
                name="quantity"
                 onChange={(event) => { productItem = { ...productItem, quantity: Number(event.target.value) } }}
                required
                type="number"
                variant="outlined"
              />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    size="small"
                fullWidth
                label="Rate"
                name="rate"
                 onChange={(event) => { productItem = { ...productItem, rate: Number(event.target.value) } }}
                required
                type="number"
                variant="outlined"
          />
          
                </Grid>
                <Grid item xs={3}>
                <Button size="small"
                    variant="contained"
                    color="primary"
                    disabled={itemAdded ? true : false}
                    onClick={() => {
                      if (Object.entries(productItem).length === 3) {
                        setItems(productItem);
                        setItemAdded(true)
                      } else {
                       toggleSnack()
                        
                      //console.log('please fill the form accordingly!');
                     }
                   
                  }}>{itemAdded ? 'Item Added' : 'Add Item'}</Button>
                </Grid>
      </Grid>
      
    )
}

export default IContainer
