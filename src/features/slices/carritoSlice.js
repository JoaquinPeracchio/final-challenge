import { createSlice } from "@reduxjs/toolkit";

const initialState = [


]

export const carritoSlice = createSlice({
    name:'carrito',
    initialState,
    reducers:{
        AddCarrito : (state,action) =>{ 
            const repeat =   state.find(item => item.id === action.payload.id)  
               if(repeat){
                repeat.quantity += 1
               }else{
                   state.push(action.payload)          

               }
        },
        DeleteProduct : (state,action) =>{
         const remove =   state.find(item => item.id === action.payload)
         state.slice(state.indexOf(remove),1)

        },
        UpdateCarrito : (state,action)=>{
            const update = state.find(item => item.id ===action.payload.id)
            if(action.payload.quantity!=0){
                update.quantity = action.payload.quantity
               

            }
        },
        ClearCarrito : (state) =>{
            state.splice(0,state.length)
          
        }

    }
})

export const { AddCarrito,DeleteProduct,UpdateCarrito,ClearCarrito} = carritoSlice.actions
export default carritoSlice.reducer





