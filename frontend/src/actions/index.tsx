import { Action } from "redux";

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
}

export const TYPES = {
  SET_IS_LOADING: "SET_IS_LOADING",
};

export const updateProducts = (isLoading: boolean): IAction<boolean> => ({
  type: TYPES.SET_IS_LOADING,
  payload: isLoading,
});
