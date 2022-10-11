import { createSlice } from "@reduxjs/toolkit";

const initialState = [


]

export const carritoSlice = createSlice({
    name: 'carrito',
    initialState,

    reducers:{
        AddCarrito : (state,action) =>{ 
            const repeat =   state.find(item => item.title === action.payload.title)  
               if(repeat){
                repeat.quantity += 1
               }else{
                   state.push(action.payload)          

               }

        },
        DeleteProduct: (state, action) => {
            const remove = state.find(item => item.id === action.payload.id)
            state.pop(remove)

        },
        UpdateCarrito: (state, action) => {
            const update = state.find(item => item.id === action.payload.id)
            update.quantity = action.payload.quantity
            update.price = update.price * action.payload.quantity
        },

        ClearCarrito: (state) => {
            [...state] === []

        }

    }
})

export const { AddCarrito, DeleteProduct } = carritoSlice.actions
export default carritoSlice.reducer



