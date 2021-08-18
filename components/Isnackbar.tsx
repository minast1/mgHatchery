import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { snackbarStore } from '../lib/snackbarStore';




function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Isnackbar = () => {
     const {handleClose, open} = snackbarStore(state => ({open : state.open, handleClose : state.handleClose}))

    return (
        <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Item fields cannot be blank!
          Please fill the form accordingly
        </Alert>
      </Snackbar>
    )
}

export default Isnackbar
