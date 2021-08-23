import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Divider, Grid, InputBase, TextField, Typography } from '@material-ui/core';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import 'date-fns'
import logo from '../public/MGlogo.jpg'
import Image from 'next/image';
import SpanningTable from './SpanningTable';

const useStyles = makeStyles((theme) => ({
  divider: {
    background: 'black',
    height: 1
  }
}));

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: '#E4E4E4',
    padding: 30
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,

  },
  secondColumn: {
    flexDirection: 'column',
    paddingLeft: 50,
    flexGrow: 1
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});

const Invoice = () => {
  const classes = useStyles()
  const today = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:1:54'));
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  //console.log(logo);
  return (

    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" mt={5}>
            <Box pr={4}>
              <Image src={logo} alt="logo" width={200} height={190} layout="intrinsic" />
            </Box>
            <Box flexDirection="column" flexGrow={1} >
              <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold', paddingBottom: 15 }}>
                MG - HATCHERY
              </Typography>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
                BN080742012
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: '1px' }}>
                P.O.BOX MD 176, MADINA - ACCRA
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: '1px' }}>
                GPS:GM-003-0515
                AGBOTUI AVE. MADINA
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: '1px' }}>
                0302507486, 0266245495
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: '1px' }}>
                mgventures1@outlook.com
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ paddingBottom: 10, letterSpacing: '1px' }}>
                INVOICE
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: 10, letterSpacing: '1px' }}>
                INVOOO4
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
                DATE
              </Typography>
              <Typography variant="body2">
                02/03/2021
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold', letterSpacing: '1px' }} >
                DUE
              </Typography>
              <Typography variant="body2" gutterBottom>
                On Reciept
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold', letterSpacing: '1px' }} >
                BALANCE DUE
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: 30 }}>
                GHC 0.00
              </Typography>
            </Box>
          </Box>
          <Divider classes={{ root: classes.divider }} />
        </Grid>
        <Grid item xs={12} container direction="column">
          <Grid item xs={4} style={{ paddingTop: 20 }}>
            <Typography gutterBottom variant="body2" style={{ fontWeight: 'bold', letterSpacing: '1px', paddingBottom: 10 }} >BILL TO</Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold', letterSpacing: '1px' }} gutterBottom> NII ANANG</Typography>
            <Typography variant="body2" gutterBottom style={{ letterSpacing: '1px' }}>
              Amanfro
            </Typography>
            <Typography variant="body2" gutterBottom style={{ letterSpacing: '1px' }}>
              Accra
            </Typography>
            <Typography variant="body2" gutterBottom style={{ letterSpacing: '1px' }}>
              0543307585
            </Typography>
          </Grid>
          <Divider variant="fullWidth" light style={{ height: 1, background: ' darkgray' }} />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 20 }}>
          <SpanningTable />
        </Grid>
        <Grid item style={{ height: 100 }}></Grid>
      </Grid>
    </Container>
  )
}

export default Invoice
