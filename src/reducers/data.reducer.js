import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../Helpers/sendRequest";

const initialState = {
    data: []
}

export const dataFetch = createAsyncThunk("data/fetch", async () => {
    const response = await sendRequest("./API/products.json")
    return response
})

const dataSlice = createSlice({
    name: "data",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
            state.data = payload
        })
    }
})
export default dataSlice.reducer
