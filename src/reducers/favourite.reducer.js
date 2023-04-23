import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        favouriteToLocal: JSON.parse(localStorage.getItem("favourite")) || []
    },
    reducers: {
        addToFavourite(state, { payload }) {
            const favouriteId = state.favouriteToLocal.find(el => el.id === payload.id)
            if(favouriteId){
                return
            }
            else{state.favouriteToLocal.push(payload)}
        },
        removeFromFavourite(state, { payload }) {
            state.favouriteToLocal = state.favouriteToLocal.filter(el => el.id !== payload.id)
        },
    }
})

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer