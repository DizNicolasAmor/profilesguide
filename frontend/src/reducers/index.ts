import { initialState, IState } from "../store";
import { IAction, TYPES } from "../actions/index";

export const allReducers = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: IAction<any>
): IState => {
  switch (action.type) {
    case TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
