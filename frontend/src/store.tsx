import { createStore } from "redux";
import { allReducers } from "./reducers";

export interface IUser {
  email: string;
}

export interface IState {
  isLoading: boolean;
  user: IUser | undefined;
}
export const initialState: IState = {
  isLoading: false,
  user: undefined,
};

export const store = createStore(allReducers, initialState);
