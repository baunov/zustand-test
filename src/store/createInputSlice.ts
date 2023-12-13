import { StateCreator } from "zustand";

export interface InputSlice {
    value: string;
    setValue: (val: string) => void;
}

export const createInputSlice: StateCreator<InputSlice> = (set) => ({
    value: '',
    setValue: (val: string) => set({value: val}),
})
