import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartToLocal: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        addToCart(state, { payload }) {
            const cartId = state.cartToLocal.find(el => el.id === payload.id)
            if (cartId) {
                alert(`${payload.name} has already added`)
            }
            else { state.cartToLocal.push(payload)
            }
           
        },
        removeFromCart(state, { payload }) {
            state.cartToLocal = state.cartToLocal.filter(el => el.id !== payload.id)
        },
        emptyCart(state) {
            state.cartToLocal = []
        }
    }
})
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer
            
          




