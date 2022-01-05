 import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormHelperText, Paper } from '@material-ui/core';
import { Controller, FormProvider,SubmitHandler,useForm } from "react-hook-form";
import CircularProgress from '@material-ui/core/CircularProgress';
import { authStore } from '../lib/authStore';
import { IFormInput, loginSchema } from '../lib/constants';
import { signIn } from 'next-auth/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router'
import Alert from '@material-ui/lab/Alert'
import  Image  from 'next/image';


type MessageType = {
  message: string | React.ReactElement
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
        marginTop: theme.spacing(5),
        padding: theme.spacing(3),
        
         //border : '1px solid darkgray', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //backgroundColor : theme.palette.grey[100]
  },
  avatar: {
    borderRadius : 80,
    objectFit : 'cover'
    //backgroundColor: theme.palette.secondary.main,
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
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const {error} = useRouter().query;
  const { control, handleSubmit, reset, register, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema)
  });

  const setAuthView = authStore(state => state.setAuthView)
  const loading = authStore(state => state.loading)

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
       authStore.setState({ loading: true });
    data.callbackUrl =  `${process.env.NEXT_PUBLIC_URL}/Dashboard/`
      
    authStore.setState({ loading: true });
     signIn('credentials' , data  );
     reset();
     authStore.setState({loading: false });

    // console.log(data)

  }
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} elevation={5}>
       <Image width={120} height={60} className={classes.avatar} src="/mgLogo2.jpg" alt="mghatchery"/>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          method='post'
          action='/api/auth/callback/credentials'
          noValidate
           autoComplete="off">
          
          <Controller
            name="email"
            control={control}
            render={({ field: {value} }) =>
              
              <TextField
            variant="outlined"
                margin="normal"
                {...register("email")}
                //value={value}
            required
            error={!!errors.email}
            // onChange={onChange}
                fullWidth
                helperText={errors.email?.message}
                defaultValue={value}
                id="email"
                label="Email Address"
            //autoComplete="email"
            autoFocus
          />
          }
          />
          
          
          <Controller
            name="password"
            control={control}
            render={({ field: {value } }) => 
             
              <TextField
            variant="outlined"
                margin="normal"
                {...register("password")}
            required
            error={!!errors.password}
              //  value={value}
                defaultValue={value}
           // onChange={onChange}
            fullWidth
                label="Password"
                helperText={errors.password?.message}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          }
          />
          
            {error && <Alert severity="error">{error}</Alert>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
         {
              loading ? <CircularProgress color="inherit" size={20} /> :
                "SignIn"
          }
            
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
                          <Link variant="body2" component="button" onClick={(e) => {
                              e.preventDefault()
                              setAuthView('sign_up')
              }}>
                {"Don't have an account? Sign Up"}
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