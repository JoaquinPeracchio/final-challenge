import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

export const userProductsSlice = createSlice({
    name: 'userProducts',
    initialState,
    reducers: {
        InitialProducts: (state, action) => {
            const repeat = state.find(item => item._id === action.payload._id)
            if (!repeat) {
                state.push(action.payload)
            }
            // state.push(action.payload)
        },
        NewProduct: (state, action) => {
            state.push(action.payload)
            console.log(state)
        },
        DeleteProduct: (state, action) => {
            const remove = state.find(item => item._id === action.payload)
            if (remove) {
                state.splice(state.indexOf(remove), 1)
            }
        },
        UpdateCarrito: (state, action) => {
            const update = state.find(item => item.id === action.payload.id)
            if (action.payload.quantity != 0) {
                update.quantity = action.payload.quantity
            }
        }
    }
})


export const { InitialProducts, NewProduct, DeleteProduct, UpdateCarrito, ClearCarrito } = userProductsSlice.actions

export default userProductsSlice.reducer





