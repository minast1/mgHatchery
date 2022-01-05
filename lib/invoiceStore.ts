import { FormEvent } from 'react'
import create from 'zustand'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Item } from '@prisma/client';



export interface invoiceState {
   
    items: Item[]
    setItems: (goods:Item) => void
    resetItems: () => void

}

export const useInvoiceStore =  create<invoiceState>((set, get) => ({
   
    items: [],
    setItems: (goods) => set(state => ({ items: [...state.items, goods] })),
    resetItems: () => set(state => ({items: []}))

})) 
