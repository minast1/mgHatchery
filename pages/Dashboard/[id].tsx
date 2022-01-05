import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { useStore } from '../../lib/sessionStore';
import { useRouter } from 'next/router'
import Invoice from '../../components/Invoice';
import { CustomInvoice, dataStore, useStore} from '../../lib/supabaseStore';
import { useSession } from "next-auth/client"
import Loading from '../../components/Loading';
import Unauthorized from '../../components/Unauthorized';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
   // height: '100vh'
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [session, loading] = useSession();
  const router = useRouter()
   const state = useStore();
  const [currentInvoice, setCurrentInvoice] = React.useState<CustomInvoice | {}>({});


  
  const fetchInvoice = async (url:string) => {
    const res = await fetch(url);
    const response = await res.json();
    return response;
   }

  console.log(currentInvoice);
React.useEffect(() => {
    //fetch the invoice data from the api 
  if (!router.isReady) return;
  const { id } = router.query;
  (async () => {
   const invoice = await fetchInvoice(`/api/invoices/${id}`);
    setCurrentInvoice(invoice);
  })()
  
     
  // const selectedInvoice = dataStore.getState().data.find(item => item.id === id as unknown as number);
   // selectedInvoice && setCurrentInvoice(selectedInvoice)
  
   // data && dataStore.setState({data : data.reverse()});
  }, [router.isReady]);
  //console.log(data);
  if (loading) return (
    <Loading/> 
  )

  if (!loading && !session) return <Unauthorized />
  
  if(!loading && session) return (

    <div className={classes.root}>
      {/*<Invoice invoiceData={data && data[0]} /> */}
    </div>
  ) 
}


  