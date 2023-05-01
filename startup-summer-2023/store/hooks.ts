import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "./store";
import {
  setBranch,
  setMaxSalary,
  setMinSalary,
  setPage,
  setVacancy,
} from "./reducers/appReducer";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
  setBranch,
  setMaxSalary,
  setMinSalary,
  setPage,
  setVacancy,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};