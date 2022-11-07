export const ADD_MODAL = "ADD_MODAL";
export const REMOVE_MODAL = "REMOVE_MODAL";

export const addModal = (payload: string) => ({
  type: ADD_MODAL,
  payload,
});

export const removeModal = () => ({
  type: REMOVE_MODAL,
});
