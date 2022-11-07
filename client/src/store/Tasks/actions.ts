export const GET_TASKS = "GET_TASKS";
export const GET_TASKS_ASYNC = "GET_TASKS_ASYNC";

export const EDIT_TASK = "EDIT_TASK";
export const EDIT_TASK_ASYNC = "EDIT_TASK_ASYNC";

export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_ASYNC = "DELETE_TASK_ASYNC";

export const ADD_TASK = "ADD_TASK";
export const ADD_TASK_ASYNC = "ADD_TASK_ASYNC";

export const addTaskAction = (payload: any) => ({
  type: ADD_TASK_ASYNC,
  payload,
});

export const editTaskAction = (payload: any) => ({
  type: EDIT_TASK_ASYNC,
  payload,
});

export const deleteTaskAction = (payload: any) => ({
  type: DELETE_TASK_ASYNC,
  payload,
});

export const getTasksAction = () => ({
  type: GET_TASKS_ASYNC,
});
