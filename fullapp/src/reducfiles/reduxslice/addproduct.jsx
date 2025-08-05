import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "http://localhost:3000/products";

export const fetproduct = createAsyncThunk("product/fetchuser", async () => {
    const res = await axios.get(Api);
    return res.data;
})

export const addproduct = createAsyncThunk("product/addproduct", async (product) => {
    const res = await axios.post(Api, product);
    return res.data;
})

export const deletproduct = createAsyncThunk("product/deletpeoduct", async (id) => {
    const res = await axios.delete(`${Api}/${id}`);
    return id;
})

export const updateproduct = createAsyncThunk("product/updateproduct", async ({ id, product }) => {
    const res = await axios.put(`${Api}/${id}`, product);
    return res.data;
})

const ProducrSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
        Loading: false,
        error: null,
    },

    reducers: {
        plus: (state, action) => {
            const check = state.items.find((item) => item.id === action.payload)
            if (check) {
                check.qty += 1
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetproduct.fulfilled, (state) => {
                state.Loading = false;
                state.error = null;
            })

            .addCase(addproduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.Loading = false;
                state.error = null;
            })

            .addCase(deletproduct.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
                state.Loading = false;
                state.error = null;
            })

            .addCase(updateproduct.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload
                }
                state.Loading = false;
                state.error = null;
            })
    }
})

export const { plus } = ProducrSlice.actions
export default ProducrSlice.reducer;