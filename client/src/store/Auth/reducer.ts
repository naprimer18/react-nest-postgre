import { IAction } from "../models";
import { LOGIN, LOGOUT } from "./actions";

const initialState = true;

export const auth = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default: {
      return state;
    }
  }
};
