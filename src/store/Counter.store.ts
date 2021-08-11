import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "./store";

const counter = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.counter += action.payload;
        },
        decrement(state, action: PayloadAction<number>) {
            state.counter -= action.payload;
        }
    }
});

function sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function asyncIncrement(): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(2000);
        dispatch(increment(1));
    }
}

export function asyncDecrement(): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(2000);
        dispatch(decrement(2));
    }
}

export const {increment, decrement} = counter.actions;
export default counter.reducer;