import {createSlice} from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            const item = state.items.find((item) => item.name === action.payload.name);
            if (item) ++item.quantity;
            else state.items.push(action.payload);
            console.log(
                "State as plain object:",
                JSON.parse(JSON.stringify(state.items))
            );
        },
        addQuantity(state, action) {
            if (state.items[action.payload].quantity === state.items[action.payload].stocks)
                state.items[action.payload].quantity = state.items[action.payload].stocks;
            else
                ++state.items[action.payload].quantity
        },
        reduceQuantity(state, action) {
            if (state.items[action.payload].quantity === 0)
                state.items[action.payload].quantity = 0;
            else
            --state.items[action.payload].quantity
        },
        getQuantity(state, action) {
            if(state.items.size > 0)
                return state.items[action.payload].quantity;
        }
    },
});

export const {addToCart, addQuantity, reduceQuantity, getQuantity} = cartSlice.actions;
export default cartSlice.reducer;
