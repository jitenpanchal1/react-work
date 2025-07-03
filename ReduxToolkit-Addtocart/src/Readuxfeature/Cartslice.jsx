import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Add_to_cart",
    initialState: {
        cart: []
    },

    reducers: {

        addtocart: (state, action) => {
            const item = action.payload
            const check = state.cart.find(product => product.id === item.id)
            if (!check) {
                state.cart.push({ ...item })
            }
        },

        add: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        qty: item.qty + 1,
                        price: item.price + item.baseprice
                    }
                }
                return item
            })
        },

        minus: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.qty > 1 && item.id === action.payload) {
                    return {
                        ...item,
                        qty: item.qty - 1,
                        price: item.price - item.baseprice
                    }
                }
                return item
            })
        },

        remove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addtocart, add, minus, remove } = cartSlice.actions
export default cartSlice.reducer