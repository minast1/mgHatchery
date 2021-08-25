import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import { invoiceState, obj, useInvoiceStore } from '../lib/invoiceStore';



const IContainer = ({ productItem , toggleSnack}: { productItem: obj , toggleSnack: () => void}) => {
    const setItems = useInvoiceStore(state => state.setItems);
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const [rate, setRate] = useState<number>(0)
  const [amount, setmAmount] = useState<number>()
  //MAKE CONTROLLED INPUTS
   
    //  console.log({description: description, rate: rate, quantitiy: quantity});
  return (
    
        <Grid container  spacing={2} alignItems="center"> 
               
              <Grid item xs={6} sm={6}>
                   <TextField
                    fullWidth
                    size="small"
                label="Description"
          name="description"
          value={description}
                    onChange={(event) => setDescription(event.target.value)}
                required
                variant="outlined"
              />
                </Grid>
                <Grid item xs={6} sm={1}>
                   <TextField
                    fullWidth
                    size="small"
                label="Quantity"
                   name="quantity"
                   value={quantity}
                 onChange={(event) =>  setQuantity(Number(event.target.value))}
                required
                type="number"
                variant="outlined"
              />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <TextField
                    size="small"
                fullWidth
                label="Rate"
                name="rate"
                 onChange={(event) =>  setRate(Number(event.target.value))}
                required
                type="number"
                variant="outlined"
          />
          
                </Grid>
                <Grid item xs={6} sm={3}>
                <Button size="small"
                    variant="contained"
                    color="primary"
                    disabled={itemAdded ? true : false}
          onClick={() => {
           
                      if (description === '' || quantity === 0 || rate === 0 ) {
                         toggleSnack()
                      } else {
                         
                         productItem = {
                       ...productItem,
                        description: description,
                       quantity: quantity,
                        rate: rate,
                         }
                        //console.log(productItem);
                         setItems(productItem);
                        setItemAdded(true)
                      //console.log('please fill the form accordingly!');
                     }
                   
                  }}>{itemAdded ? 'Item Added' : 'Add Item'}</Button>
                </Grid>
      </Grid>
      
    )
}

export default IContainer
