import { GET_TASKS } from "./actions";
import { IInitialState } from "./models";

const initialState: IInitialState = {
  collection: [],
};

export const Tasks = (store = initialState, action: any) => {
  switch (action.type) {
    case GET_TASKS: {
      return { ...store, collection: action.payload };
    }
    default: {
      return store;
    }
  }
};
