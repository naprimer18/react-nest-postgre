//actions
import { START_LOADING, STOP_LOADING } from "./actions";

//models
import { IAction } from "../models";
import { ILoading } from "./models";

export const initialState: ILoading = {
  loadingProccess: false,
};

export const Loading = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case START_LOADING: {
      return {
        ...state,
        loadingProccess: payload,
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loadingProccess: payload,
      };
    }
    default: {
      return state;
    }
  }
};
