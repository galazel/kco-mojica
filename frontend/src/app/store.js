import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlicer"; 


export default configureStore({
    reducer: {
        cart: cartReducer
    }
})