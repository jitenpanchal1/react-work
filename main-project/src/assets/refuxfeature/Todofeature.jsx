import { createSlice, nanoid } from '@reduxjs/toolkit'



export const todoslice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addtodo: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        complete: false,
                    },
                };
            },
        },
    },
})


export const { } = todoslice.actions

export default todoslice.reducer