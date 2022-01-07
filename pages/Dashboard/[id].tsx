import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { useStore } from '../../lib/sessionStore';
import { useRouter } from 'next/router'
//import Invoice from '../../components/Invoice';
import { CustomInvoice, dataStore, useStore} from '../../lib/supabaseStore';
import { useSession } from "next-auth/client"
import Loading from '../../components/Loading';
import Unauthorized from '../../components/Unauthorized';
import { GetStaticProps, GetStaticPaths } from 'next'
import { Invoice } from '@prisma/client';
import InvoicePage from '../../components/InvoicePage';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
   // height: '100vh'
  },
}));


export default function Dashboard({invoice}: {invoice: CustomInvoice}) {
  const classes = useStyles();
  const [session, loading] = useSession();

   const state = useStore();

  //console.log(invoice);
//React.useEffect(() => {
    //fetch the invoice data from the api 
 // if (!router.isReady) return;
 // const { id } = router.query;
  //(async () => {
  // const invoice = await fetchInvoice(`/api/invoices/${id}`);
   // setCurrentInvoice(invoice);
  //})()
  
     
  // const selectedInvoice = dataStore.getState().data.find(item => item.id === id as unknown as number);
   // selectedInvoice && setCurrentInvoice(selectedInvoice)
  
   // data && dataStore.setState({data : data.reverse()});
  //}, [router.isReady]);
  //console.log(data);
  if (loading) return (
    <Loading/> 
  )

  if (!loading && !session) return <Unauthorized />
  
  if(!loading && session) return (

    <div className={classes.root}>
      <InvoicePage invoiceData={invoice} />
    </div>
  ) 
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/invoices`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
    }
  });
  const invoices = await res.json();

  const paths = invoices.map((invoice: Invoice) => ({
    params : {id : invoice.id.toString()}
  }))

  return {paths, fallback: true}
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/invoices/${params.id as string}`, {
     headers: {
      Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
    }
  })
  const invoice = await res.json();
  return {
    props : {invoice}
  }
}


  