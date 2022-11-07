import { put, call, takeEvery } from "redux-saga/effects";
import {
  ADD_TASK_ASYNC,
  DELETE_TASK_ASYNC,
  EDIT_TASK_ASYNC,
  GET_TASKS,
  GET_TASKS_ASYNC,
} from "./actions";

import { getTasks, addTask, deleteTask, editTask } from "./services";

export function* getTasksWorker(): Generator {
  try {
    const response = yield call(getTasks);
    yield put({ type: GET_TASKS, payload: response });
  } catch (e) {
    console.log(e);
  }
}

export function* getTasksWatcher(): Generator {
  yield takeEvery(GET_TASKS_ASYNC, getTasksWorker);
}

export function* addTaskWorker(params: any): Generator {
  try {
    yield call(addTask, params.payload);
    yield call(getTasksWorker);
  } catch (e) {
    console.log(e);
  }
}

export function* addTaskWatcher(): Generator {
  yield takeEvery(ADD_TASK_ASYNC, addTaskWorker);
}

export function* editTaskWorker(params: any): Generator {
  try {
    yield call(editTask, params.payload);
    yield call(getTasksWorker);
  } catch (e) {
    console.log(e);
  }
}

export function* editTaskWatcher(): Generator {
  yield takeEvery(EDIT_TASK_ASYNC, editTaskWorker);
}

export function* deleteTaskWorker(params: any): Generator {
  try {
    yield call(deleteTask, params.payload);
    yield call(getTasksWorker);
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTaskWatcher(): Generator {
  yield takeEvery(DELETE_TASK_ASYNC, deleteTaskWorker);
}
