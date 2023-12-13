import { StateCreator } from "zustand";

export interface CounterSlice {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
    count: 0,
    increment: () => set(({count}) => ({count: count + 1})),
    decrement: () => set(({count}) => ({count: count - 1})),
})
