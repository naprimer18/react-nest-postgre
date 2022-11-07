import { IAction } from "../models";

import { ADD_MODAL, REMOVE_MODAL } from "./actions";
import { IErrorInterceptorModal } from "./models";

const initialState: IErrorInterceptorModal = {
  modalContent: "",
};

export const ErrorInterceptorModal = (
  state = initialState,
  action: IAction
) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MODAL: {
      return {
        ...state,
        modalContent: payload,
      };
    }
    case REMOVE_MODAL: {
      return { modalContent: "" };
    }
    default: {
      return state;
    }
  }
};
