export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const startLoading = () => {
  return {
    type: START_LOADING,
    payload: true,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
    payload: false,
  };
};
