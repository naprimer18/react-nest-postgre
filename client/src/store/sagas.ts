import { all, fork } from "redux-saga/effects";
import {
  addTaskWatcher,
  deleteTaskWatcher,
  getTasksWatcher,
  editTaskWatcher,
} from "./Tasks/sagas";

export default function* rootSaga() {
  yield all([
    fork(getTasksWatcher),
    fork(addTaskWatcher),
    fork(deleteTaskWatcher),
    fork(editTaskWatcher),
  ]);
}
