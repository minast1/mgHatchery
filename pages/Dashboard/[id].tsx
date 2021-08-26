import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import { useStore } from '../../lib/sessionStore';
import { useRouter } from 'next/router'
import Invoice from '../../components/Invoice';
import { dataStore, InvoiceItem} from '../../lib/supabaseStore';
import { supabase } from '../../lib/supabaseClient';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
   // height: '100vh'
  },
}));

export type Inv = {
   id: number
    address: string
    invoice_id: string
    amount: number
    date: string
    name: string
    phone: number
    Item: InvoiceItem[]  
}
export default function Dashboard({data}:{data:Inv[]}) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Invoice invoiceData={ data[0]}/>
    </div>
  ) 
}

type Paths = {
  params: {
    id:string
  }
}[]
export const getStaticPaths:GetStaticPaths = async () => {
     
      let { data: Invoice} = await supabase
  .from('Invoice')
  .select('*')

  const paths = Invoice?.map((item) => ({
  params: {id : item.id.toString()}
})) as Paths

  return {paths, fallback:'blocking' }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
   
    //console.log(context.params?.id);
  const { data:Invoice } = await supabase
      .from('Invoice')
      .select(`
   id, date, invoice_id, name, address, phone, amount,
   Item (
      description, quantity, rate, amount)`).eq('id', params?.id);
      //set it to state
  return {
    props: {
      protected: true,
      data: Invoice
    },
    revalidate: 2
  }
}
  
  
   