 import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { authStore } from '../lib/authStore';
import { IFormInput, registerSchema } from '../lib/constants';
import { signIn } from 'next-auth/client';
import { Controller, FormProvider,SubmitHandler,useForm } from "react-hook-form";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ResponseData} from '../pages/api/auth/signUp'
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image'

export type RegisterFormInput = {
  email: string 
  password: string 
  passwordConfirm: string
  callbackUrl? : string
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(3),
        
         //border : '1px solid darkgray', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       // backgroundColor : theme.palette.grey[100]
  },
  avatar: {
    objectFit: 'cover',
    borderRadius : 80
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
    error : {
    color : 'red',
    fontSize : '11px'
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const { register, control, handleSubmit, formState: { errors }, reset, getValues } = useForm<RegisterFormInput>({
  resolver: yupResolver(registerSchema)
}) ;
  const setAuthView = authStore(state => state.setAuthView);
  const loading = authStore(state => state.loading);
  const error = authStore(state => state.error);
  
  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    //console.log(data);
    authStore.setState({ loading: true });
    const response = await fetch(`/api/auth/signUp`, {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
     const newUser: ResponseData = await response.json();
    if (!response.ok) {
      authStore.setState({ error: newUser.message })
      return; 
    }

    // If the response has a status of 200, sign the new user in 
     
    signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/Dashboard/`
    });
    reset();
     authStore.setState({loading: false });
  }
   
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} elevation={5}>

       <Image width={120} height={60} className={classes.avatar} src="/mgLogo2.jpg" alt="mghatchery"/>

        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          method="post"
           noValidate
           autoComplete="off"
        >
          
          <Controller
            name="email"
            control={control}
            render={({ field: {  value } }) =>
              
             <TextField
            variant="outlined"
                margin="normal"
              {...register("email")}
            required
                error={!!errors.email}
                helperText={errors.email?.message}
            fullWidth
             defaultValue={value}
            //onChange={onChange}
            id="email"
            label="Email Address"
           // autoComplete="email"
            autoFocus
          />
          }
          />
         
          <Controller
            name="password"
            control={control}
            render={({ field: { value } }) =>
              
              <TextField
            variant="outlined"
                margin="normal"
                  {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
            defaultValue={value}
            required
           // onChange={onChange}
            fullWidth
            label="Password"
            type="password"
            id="password"
           // autoComplete="current-password"
          />
          
          }
          />
          
            <Controller
            name="passwordConfirm"
            control={control}
            render={({ field: {value } }) =>
              
              <TextField
            variant="outlined"
                margin="normal"
                {...register("passwordConfirm")}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
            defaultValue={value}
            required
           // onChange={onChange}
            fullWidth
            label="Password Confirmation"
            type="password"
            id="password"
           // autoComplete="current-password"
          />
          
          }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >{
              loading ? <CircularProgress color="inherit" size={20} /> :
                "SignUp"
          }
            
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            <Grid item>
                          <Link href="#" variant="body2" component="button" onClick={(e) => {
                              e.preventDefault();
                              setAuthView('sign_in')
              }}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}