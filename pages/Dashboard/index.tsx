import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { GetStaticProps, GetStaticPropsContext } from 'next'
import Layout from '../../components/Layout';
import router  from 'next/router'
import Copyright from '../../components/Copyright';
import Main from '../../components/Main';
import { useSession } from "next-auth/client"
import { CustomInvoice, dataStore, useStore } from '../../lib/supabaseStore';
import Loading from '../../components/Loading';
import Unauthorized from '../../components/Unauthorized';
import prisma from '../../lib/prisma';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    borderRadius: 5
  },
  iconButton: { padding: 10 },
  input: {

    "& input:focus $searchForm": {
      border: '1px solid yellow'
    },
    marginLeft: theme.spacing(1),
    flex: 1,
  }
}));


export default function Dashboard({ data }: { data: CustomInvoice[] }/*Invoice[] | [] }*/) {
  const classes = useStyles();
 // const setData = dataStore(state => state.setData);
  const state = useStore()
  const [session, loading] = useSession();
     
  // fetch and revalidate data with swr save
 React.useEffect(() => {

    data && state.setData(data.reverse())  //  dataStore.setState({data : data.reverse()});
  }, []);
  //console.log(data);
  if (loading) return (
    <Loading/>
  )

  if (!loading && !session) return <Unauthorized />
  
  if(!loading && session) return (
    <div className={classes.root}>
      <Layout />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" style={{marginTop: 100}}>
         
         <Main /> 
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  ) 
    
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const invoices = await prisma.invoice.findMany({
    include: {
      Item: true
    }
     })
 /* let { data: Invoice, error } = await supabase
    .from('Invoice')
    .select(`
   id, date, invoice_id, name, address, phone, amount,
   Item (
      description, quantity, rate, amount)`).order('id', { ascending: false })

   */
  return {
    props: {
      data: JSON.parse(JSON.stringify(invoices))
    },
   // revalidate: 5
  }
} 

