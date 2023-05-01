import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";

const initialState: InitialState = {
  page: 1,
  branch: "",
  vacancy: "",
  minSalary: undefined,
  maxSalary: undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setPage(state, action: { payload: number }) {
      state.page = action.payload;
    },
    setBranch(state, action: { payload: string }) {
      state.branch = action.payload;
    },
    setVacancy(state, action: { payload: string }) {
      state.vacancy = action.payload;
    },
    setMinSalary(state, action: { payload: number }) {
      state.minSalary = action.payload;
    },
    setMaxSalary(state, action: { payload: number }) {
      state.maxSalary = action.payload;
    },
  },
});

export const { setBranch, setMaxSalary, setMinSalary, setPage, setVacancy } =
  appSlice.actions;
  
export default appSlice.reducer;
