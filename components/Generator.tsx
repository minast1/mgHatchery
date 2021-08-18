import { useState, useEffect} from 'react';
import { invoiceState, obj, useInvoiceStore } from '../lib/invoiceStore';
import shallow from 'zustand/shallow';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, TextField } from '@material-ui/core';
import IContainer from './IContainer';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';



function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Generator = () => {
  const { id, firstname, lastname, location, telephone, date, items, setId, setDate,
  setFirstname, setLastname, setLocation, setTelephone, setItems} = useInvoiceStore<invoiceState>(state =>
  ({
    id: state.id,
    firstname: state.firstname,
    lastname: state.lastname,
    location: state.location,
    telephone: state.telephone,
    date: state.date,
    items: state.items,
    setDate: state.setDate,
    setFirstname: state.setFirstname,
    setLocation: state.setLocation,
    setLastname: state.setLastname,
    setItems: state.setItems,
    setId: state.setId,
    setTelephone : state.setTelephone
  }), shallow
  )

  const [itemCount, setItemCount] = useState<number>(0);
  const [itemContainer, setContainer] = useState<obj[]>([]);
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
   

    setOpen(false);
  };
   

 useEffect(() => {
   setContainer(Array.from({length : itemCount}, () => ({} as obj)))
 }, [itemCount]);
  
  
  return (
    <form
      autoComplete="off"
      noValidate
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
                onChange={(event) => {setId(event.target.value)}}
                required
                value={id}
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
           defaultValue="2017-05-24"
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
                label="Customer Firstname"
                name="firstname"
                onChange={(event) => { setFirstname(event.target.value) }}
                required
                value={firstname}
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
                label="Customer Lastname"
                name="lastname"
                onChange={(event) => {setLastname(event.target.value)}}
                value={lastname}
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
                label="Location"
                name="location"
                onChange={(event) => {setLocation(event.target.value)}}
                required
                value={location}
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
                label="Contact"
                name="telephone"
                onChange={(event) => {setTelephone(event?.target.value)}}
                required
                type="number"
                value={telephone}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>

         <CardHeader
          subheader="Select number of items to add"
            title="Items"
          action={
              <TextField
                fullWidth
              label="Items Count"
              style={{ marginTop: 20}}
              size="small"
                name="itemCount"
              onChange={(event) => {
                setItemCount(Number(event.target.value))
              }}
                required
                type="number"
                value={itemCount}
                variant="outlined"
              />
          }
        />
        <Divider />
      
        <CardContent>
          {
            itemContainer && itemContainer.map((el, index) => (
              
              (<IContainer key={index} productItem={el} toggleSnack={handleClick}/>)
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