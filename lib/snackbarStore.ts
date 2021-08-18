import React from 'react';
import create from 'zustand'



export interface snackbarState {
    open: boolean
    setOpen: () => void
    handleClick: () => void
    handleClose: (event?: React.SyntheticEvent, reason?: string) => void
}



export const snackbarStore =  create<snackbarState>((set,get) => ({
    open: false,
    setOpen: () => set(state => ({ open: !state.open })),
    handleClick: () => set(state => ({open: true})),
    handleClose: (event?, reason?) => {
        if (reason === 'clickaway') {
            return
        }
        set(state => ({open : false}))
    }
    
}))