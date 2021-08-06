import { createStore } from "redux";
import { allReducers } from "./reducers";

export interface IState {
  isLoading: boolean;
}
export const initialState: IState = {
  isLoading: false,
};

export const store = createStore(allReducers, initialState);
