import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "http://localhost:5000/users"

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get(Api);
    return response.data;
})

export const addUser = createAsyncThunk("users/addUser", async (user) => {
    const response = await axios.post(Api, user);
    return response.data;
})

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    await axios.delete(`${Api}/${id}`);
    return id;
})

export const updateUser = createAsyncThunk("users/updateUser", async ({ id, user }) => {
    const response = await axios.put(`${Api}/${id}`, user);
    return response.data;
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
        status: false,
        currentuser: null
    },

    reducers: {

        logout: (state) => {
            state.status = false;
            state.users = [];
            state.currentuser = null;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
                state.error = null;
                state.status = false
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.loading = false;
                state.error = null;
                state.status = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
                state.loading = false;
                state.error = null;
                state.status = false
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload
                }
                state.loading = false;
                state.error = null;
                state.status = true
            })
    }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;