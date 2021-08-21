import { FormEvent } from 'react'
import create from 'zustand'
import { supabase } from './supabaseClient';
import createContext from 'zustand/context'
import { AuthSession } from '@supabase/supabase-js'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export type obj = { description: string; rate: number; quantity: number; amount?: number }


export interface invoiceState {
   
    items: { description: string, rate: number, quantity: number, }[] | []
    setItems: (goods: obj) => void
    resetItems: () => void

}

export const useInvoiceStore =  create<invoiceState>((set, get) => ({
   
    items: [],
    setItems: (goods) => set(state => ({ items: [...state.items, goods] })),
    resetItems: () => set(state => ({items: []}))

})) 
