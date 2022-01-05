import React,{ useState, useEffect} from 'react';
import { useInvoiceStore } from '../lib/invoiceStore';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core';
import IContainer from './IContainer';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {  CustomInvoice, dataStore, useStore } from '../lib/supabaseStore';
import { useForm, Controller,SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { InvoiceSchema } from '../lib/constants';
import { Item } from '@prisma/client';
import CircularProgress from '@material-ui/core/CircularProgress';





interface IFormInput {
  name: string;
  phone: string;
  address: string
  amount: number
  invoice_id: string
  //items?: Item[]
  date: Date | string
}


function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}  

const Generator = () => {
  const { control, handleSubmit,reset, register, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(InvoiceSchema) 
  });
  const state = useStore();
  const data = state.data //dataStore(state => state.data);
   const mounted = React.useRef(false);
  const [itemCount, setItemCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [itemContainer, setContainer] = useState<Item[]>([]);
  const Items = useInvoiceStore(state => state.items);
  const [invId, setInvId]  = useState<string>("")
  const resetItems = useInvoiceStore(state => state.resetItems);
  let today = new Date().toLocaleDateString();


console.log(invId);

   React.useEffect(() => {
        mounted.current = true; // Will set it to true on mount ...
        return () => { mounted.current = false; }; // ... and to false on unmount
  }, []);

   React.useEffect(() => {
      if (mounted.current) {
         let arrOfIds: number[] = data.map(({ id }) => id);
    const maxId: number = Math.max(...arrOfIds) + 1;
  
    const nextId = maxId === -Infinity ? 'INV000' : `INV000${maxId}`
         setInvId(nextId)
      }
        return () => {setInvId("")}
  }, [data])
  
  const postData = async (url: string, data: Partial<CustomInvoice>):Promise<CustomInvoice> => {
       const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
       });
    const res = await response.json();
    return res;
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
   // console.log(data);
    data.invoice_id = invId; 
    setLoading(true);
    const body = { ...data, Item: Items }
    const response =  await postData('/api/invoices', body);
      state.updateData(response)  //dataStore.getState().updateData(res);
    setLoading(false);
    reset({ name: '', phone: '', address: '', amount: 0 });
    setItemCount(0);
      useInvoiceStore.getState().resetItems();
    

  }


  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {


    setOpen(false);
  };


  
  useEffect(() => {
    setContainer(Array.from({ length: itemCount }, () => ({} as Item)));
    return () => {setContainer([])}
  }, [itemCount]);

  
  return (
    <form
      autoComplete="off"
       noValidate
        onSubmit={handleSubmit(onSubmit)}
    >

      <Card>
        <CardHeader
          subheader="Generate New Invoice with the following details"
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
              <Controller
                name="invoice_id"
               defaultValue={invId}
                control={control}
              render={({field : {value, onChange}}) => 
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                   InputLabelProps={{
                      shrink: true,
                   }}
                  fullWidth
                  defaultValue={invId}
                  helperText="Invoice id will be generated automatically"
                label="Invoice Id"
                  placeholder={invId}
                variant="outlined"
              />
            }
              />
             
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                name="date"
                //defaultValue={today as Date} 
                control={control}
                render={({ field: { value, onChange} }) =>
                  <TextField
                    id="date"
                    {...register("date")}
                    label="Date"
                    type="date"
                    error={!!errors.date}
                  //  onChange={(event)=> setFormData({...formData, date: event.target.value})}
                    placeholder={today}
                    helperText={errors.date?.message}
                   // defaultValue={`${today}`}//"2021-05-24"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
              }
                
              />
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) =>
                  <TextField
                    fullWidth
                     {...register("name")}
                    label="Customer Name"
                    //onChange={onChange}
                   // defaultValue={value}
                     // onChange={(event)=> setFormData({...formData, name: event.target.value})}
                    error={!!errors.name}
                     helperText={errors.name?.message}
                    required
                    variant="outlined"
                  />
                }
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                name="address"
                control={control}
                render={({ field: { value, onChange } }) =>
                  <TextField
                    fullWidth
                    {...register("address")}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    label="Address"
                     // onChange={(event)=> setFormData({...formData, address: event.target.value})}
                    //onChange={onChange}
                    //defaultValue={value}
                    required
                    variant="outlined"
                  />
                }
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                name="phone"
                control={control}
                render={({ field: { value, onChange } }) =>
                  <TextField
                    fullWidth
                    {...register("phone")}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    label="Phone"
                   //   onChange={(event)=> setFormData({...formData, phone: event.target.value})}
                    //defaultValue={value}
                    required
                    variant="outlined"
                  />
                }
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Controller
                name="amount"
                control={control}
                 defaultValue={0}
                render={({ field: { value, onChange } }) =>
                  <TextField
                    fullWidth
                   // defaultValue={value}
                    {...register("amount")}
                    error={!!errors.amount}
                    helperText={errors.amount?.message}
                    label="Amount"
                     // onChange={(event)=> setFormData({...formData, amount: event.target.value})}
                    required
                    type="number"
                    variant="outlined"
                  />
                }
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

              ( <IContainer key={index} productItem={el}  toggleSnack={handleClick} />)
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
            type="submit"
            variant="contained"
          >
            {
              loading ? <CircularProgress color="inherit" size={20} /> :
                "Save details"
          }
        
          </Button>
        </Box>
      </Card>
    </form>
  )
}

export default Generator;