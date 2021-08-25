import { useState, useEffect } from 'react';
import { invoiceState, obj, useInvoiceStore } from '../lib/invoiceStore';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core';
import IContainer from './IContainer';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { InvoiceItem, Invoice } from '../lib/supabaseStore';
import { supabase } from '../lib/supabaseClient';



function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Generator = () => {

  const [itemCount, setItemCount] = useState<number>(0);
  const [itemContainer, setContainer] = useState<obj[]>([]);
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  const [formData, setFormData] = useState<Invoice | {}>({} as Invoice);
  const Items = useInvoiceStore(state => state.items);
  const resetItems = useInvoiceStore(state => state.resetItems);




  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {


    setOpen(false);
  };


  //console.log(formData);
  useEffect(() => {
    setContainer(Array.from({ length: itemCount }, () => ({} as obj)))
  }, [itemCount]);

  const createInvoiceWithItems = async () => {

    const { data: Invoice, error } = await supabase
      .from('Invoice')
      .insert([{...formData}]).single();
    if(error)  console.log(error);
    //Then add the items to the created invoice
    if (Invoice) {
      
      Items.forEach(async (item) => {
        const Itemamount = item.rate * item.quantity
        const { data: Item, error } = await supabase
          .from('Item')
          .insert([{ ...item, invoiceId: Invoice.id, amount: Itemamount }])
         if(error) console.log(error);
      })

    }
    setFormData({})
    resetItems()
  }
  return (
    <form
      autoComplete="off"
    >

      <Card>
        <CardHeader
          subheader="Generate invoice with the following details"
          title="Invoice"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify a new invoice id"
                label="Invoice Id"
                name="id"
                onChange={(event) => { setFormData({ ...formData, invoice_id: event.target.value }) }}
                required

                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                id="date"
                label="Date"
                type="date"
                onChange={(event) => { setFormData({ ...formData, date: event.target.value }) }}
                defaultValue="2021-05-24"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Customer Name"
                name="name"
                onChange={(event) => { setFormData({ ...formData, name: event.target.value }) }}
                required
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={(event) => { setFormData({ ...formData, address: event.target.value }) }}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone"
                name="telephone"
                onChange={(event) => { setFormData({ ...formData, phone: event.target.value }) }}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Amount"
                name="amount"
                onChange={(event) => { setFormData({ ...formData, amount: Number(event.target.value) }) }}
                required
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardHeader
          subheader="Toggle to select number of items to add"
          title={<TextField

            label="Items Count"
            style={{ marginTop: 10 }}
            size="small"
            name="itemCount"
            onChange={(event) => {
              setItemCount(Number(event.target.value))
            }}
            required
            type="number"
            value={itemCount}
            variant="outlined"
          />}

        />
        <Divider />

        <CardContent>
          {
            itemContainer && itemContainer.map((el, index) => (

              (<IContainer key={index} productItem={el} toggleSnack={handleClick} />)
            ))
          }
        </CardContent>
        <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Item fields cannot be blank!
            Please fill the form accordingly
          </Alert>
        </Snackbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            onClick={(event) => {
              event.preventDefault();
              createInvoiceWithItems()
            }}
            disabled={Object.entries(formData).length !== 6 ? true : false}
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default Generator;