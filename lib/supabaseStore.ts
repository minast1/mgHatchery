import React from 'react';
import create from 'zustand'



export type InvoiceItem = {
    amount: number
    description: string
    quantity: number
    rate: number
}

export type Invoice = {
    id: number
    address: string
    invoice_id: string
    amount: number
    date: string
    name: string
    phone: string | number
    Item: InvoiceItem[]
}



export interface supabaseStoreState {
    data: Invoice[] 
    setData: (item: Invoice[]) => void
    updateData: (items: Invoice[]) => void
    IPData: Invoice[] // INvoice page data
    setIPData: (item:Invoice[]) => void
}



export const dataStore = create<supabaseStoreState>((set, get) => ({
    data: [],
    setData: (item) => set(state => ({ data: [...state.data, ...item] })),
    updateData: (items) => set(state => ({ data: [...items] })),
    IPData: [],
    setIPData: (item) => set(state => ({IPData: [...item]}) )

    //find a way to override the dataa in  the store
}))