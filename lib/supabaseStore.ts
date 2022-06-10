import { Item, Status } from '@prisma/client';
import create from 'zustand'
import createContext from 'zustand/context'



export let { Provider: ZustandProvider, useStore } = createContext<supabaseStoreState>();


export type CustomInvoice = {
    id: number
    address: string
    invoice_id: string
    amount: number
    status: Status
    date: string| Date
    name: string
    email:string 
    phone: string | number
    Item: Item[]
}


export interface supabaseStoreState {

    data: CustomInvoice[] 
    setData: (item: CustomInvoice[]) => void
    updateData: (invoice: CustomInvoice) => void
    deleteData: (id: number) => void 
    updateInvoiceStatus: (to:CustomInvoice) => void 
    IPData: CustomInvoice[] // INvoice page data
    setIPData: (item:CustomInvoice[]) => void
}



export const dataStore = () =>
create<supabaseStoreState>((set, get) => ({
        data: [],
        setData: (item) => set(state => ({data: item})),
    updateData: (invoice) => set(state => ({ data: [invoice,...state.data] })),
    deleteData: (id) => {
        const currentData = get().data;
        const updatedData = currentData.filter((item: CustomInvoice) => item.id != id);
        set({ data: updatedData });
    },
    IPData: [],
    updateInvoiceStatus: (to) => {
        const currentData = get().data;
        const updatedData = currentData.map(obj => {
            return (obj.id === to.id) ? { ...obj, amount: to.amount, status: to.status } : obj
        });
        set({ data: updatedData });
        //update the amount and the status
    },
    setIPData: (item) => set(state => ({IPData: [...item]}) )

    //find a way to override the dataa in  the store
    }))