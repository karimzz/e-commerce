import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../Slice/productSlice";
import cartSlice from "../Slice/cartSlice";

const store = configureStore({
    reducer :{
        productSlice , 
        cartSlice
        
    }
})

export default store ; 