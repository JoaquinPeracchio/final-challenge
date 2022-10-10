import { createSlice } from "@reduxjs/toolkit";

const initialState = [


]

export const carritoSlice = createSlice({
    name:'carrito',
    initialState,
    reducers:{
        AddCarrito : (state,action) =>{       
            state.push(action.payload)          
        },
        DeleteProduct : (state,action) =>{
         const remove =   state.find(item => item.id === action.payload.id)
         state.pop(remove)

        }
    }
})

export const { AddCarrito} = carritoSlice.actions
export default carritoSlice.reducer



