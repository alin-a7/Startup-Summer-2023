import { createSlice } from "@reduxjs/toolkit";
import { InitialState, Vacancy } from "../types";

const ISSERVER = typeof window === "undefined";
const isVacancies = !ISSERVER && !!localStorage.getItem("vacancies");

const initialState: InitialState = {
  page: 1,
  favouritesPage: 1,
  branch: "",
  vacancy: "",
  minSalary: undefined,
  maxSalary: undefined,
  favouritesVacancies: isVacancies
    ? JSON.parse(localStorage.getItem("vacancies") as string)
    : [],
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
    addVacancy(state, action: { payload: Vacancy }) {
      state.favouritesVacancies = [
        ...state.favouritesVacancies,
        action.payload,
      ];
    },
    deleteVacancy(state, action: { payload: Vacancy }) {
      state.favouritesVacancies = state.favouritesVacancies.filter(
        ({ id }) => id !== action.payload.id
      );
    },
    setFavouritesPage(state, action: { payload: number }) {
      state.favouritesPage = action.payload;
    },

  },
});

export const {
  setBranch,
  setMaxSalary,
  setMinSalary,
  setPage,
  setVacancy,
  addVacancy,
  deleteVacancy,
  setFavouritesPage,
} = appSlice.actions;

export default appSlice.reducer;
