import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feactures/rodoSlice';
export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})