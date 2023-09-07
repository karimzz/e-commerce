
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loadding : false , 
    products : []  , 
    error : false
}


const cartSlice = createSlice({
    name : "cart" , 
    initialState , 
    reducers :{
        addToCart: (state , action)=>{
            
            const itemIndex = state.products.findIndex((item)=>item.id === action.payload.id) ; 
            
            if(itemIndex >= 0)
            {
                state.products[itemIndex].qun +=  1 ; 
            }else{
                state.products.push({...action.payload , qun: 1 })
            }
        } ,
        removeProduct : (state ,action)=>{
            console.log("Invoked Remove") ;
            const tempProduct = state.products.filter((element)=>{
                return element.id !== action.payload ;
            })
            state.products = tempProduct ; 
        }
    } , 
    
})


export default cartSlice.reducer ; 

export const {addToCart , removeProduct}   = cartSlice.actions ; 

// export {addToCart } = cartSlice.actions ; 
