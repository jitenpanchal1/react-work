import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        complete: false
                    },
                };
            },
        },

        deleteTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload);
        },

        toggletodo(state, action) {
            const find = state.find(todo => todo.id === action.payload);
            if (find) find.complete = !find.complete;
        },

        editTodo(state, action) {
            const { id, newtext } = action.payload;
            const find = state.find(todo => todo.id === id);
            if (find) find.text = newtext;
        }
    }
})

export const { addTodo, deleteTodo, toggletodo, editTodo } = todoslice.actions;
export default todoslice.reducer;