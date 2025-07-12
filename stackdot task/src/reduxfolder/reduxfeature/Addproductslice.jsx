import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const AddproductSlice = createSlice({
    name: 'addproduct',
    initialState,
    reducers: {

        Add: (state, action) => {
            const item = action.payload
            if (item) {
                state.product.push({ ...item })
            } else {
                console.log("not Added")
            }
            return item
        }
    }
})

export const { Add } = AddproductSlice.actions
export default AddproductSlice.reducer