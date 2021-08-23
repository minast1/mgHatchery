import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useStore } from '../../lib/sessionStore';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'
import Copyright from '../../components/Copyright';
import Main from '../../components/Main';
import Invoice from '../../components/Invoice';
import { Card, CardContent } from '@material-ui/core';
import { AuthSession } from '@supabase/supabase-js'
import { InvoiceItem} from '../../lib/supabaseStore';
import { PDFViewer } from '@react-pdf/renderer';
import logo from '../../public/logo.png'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
   // height: '100vh'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
   // paddingTop: theme.spacing(4),
    //paddingBottom: theme.spacing(4),
  },
  searchForm: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 300 
    },
    width: 500,
    border: '1px solid lightgray',
    borderRadius : 5
  },
  iconButton: { padding: 10 },
  input: {
  
    "& input:focus $searchForm": {
             border: '1px solid yellow'
       },
    marginLeft: theme.spacing(1),
    flex: 1 ,
  }
}));

type Inv = {
   id: number
    address: string
    invoice_id: string
    amount: number
    date: string
    name: string
    phone: number
    Item: InvoiceItem[]  
}
export default function Dashboard() {
  const classes = useStyles();
  const session = useStore(state =>  state.Usession )
  const router = useRouter()
   const [invoice, setInvoice] = React.useState<Inv[]>()  
  const params = router.query
  //console.log(params);
  const fetchInvoice = async () => {
      //fetch the invoice with id = params
      //set it to state
  }
   
  return session ? (
    <div className={classes.root}>
      <Invoice/>
    </div>
  ) : null
}


   