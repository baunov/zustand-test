import {create} from 'zustand'
import {CounterSlice, createCounterSlice} from "./createCounterSlice.ts";
import {createInputSlice, InputSlice} from "./createInputSlice.ts";

type StoreState = CounterSlice & InputSlice;

export const useAppStore = create<StoreState>()((...a) => ({
    ...createCounterSlice(...a),
    ...createInputSlice(...a),
}));
