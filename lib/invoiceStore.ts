import { FormEvent } from 'react'
import create from 'zustand'
import { supabase } from './supabaseClient';
import createContext from 'zustand/context'
import { AuthSession } from '@supabase/supabase-js'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export type obj = {description: string; rate: number;quantity:number}
export interface invoiceState {
    id: string,
    date: MaterialUiPickersDate ,
     name: string,
    telephone: string | number
    address: string
    items: { description: string, rate: number, quantity: number, }[] | []
    setId: (id: string) => void
    setDate: (date: MaterialUiPickersDate) => void
    setName: (name: string) => void
    setTelephone: (phone: string) => void
    setAddress: (address: string) => void
    setItems: (goods: obj) => void

}

export const useInvoiceStore =  create<invoiceState>((set, get) => ({
    id: '',
    date: null,
    name: '',
    telephone: '',
    address: '',
    items: [],
    setId: (id) => set(state => ({ id: id })),
    setDate: (date) => {
        if (typeof date === "string") {
              set(state => ({ date: new Date(date) }))
        }
      
    },
    setName: (name) => set(state => ({ name : name })),
    setAddress: (address) => set(state => ({ address : address})),
    setTelephone: (phone) => set(state => ({telephone : phone})),
    setItems: (goods) => set(state => ({ items: [...state.items, goods] })),
    

})) 

