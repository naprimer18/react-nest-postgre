// Redux
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// reducers
import { ErrorInterceptorModal } from "./ErrorInterceptorModal/reducer";
import { auth } from "./Auth/reducer";
// Sagas
import rootSaga from "./sagas";

//utils
import { loadState } from "../utils/sessionStorage";
// import { throttle } from 'lodash';
import { Loading } from "./Loading/reducer";
import { Tasks } from "./Tasks/reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    ErrorInterceptorModal,
    auth,
    Loading,
    Tasks,
  },
  middleware: [sagaMiddleware],
  preloadedState: loadState(),
});

sagaMiddleware.run(rootSaga);

// store.subscribe(
//   throttle(() => {
//     saveState({
//       workspaces: {
//         workspacesCollection: [],
//         currentWorkspace: store.getState().workspaces.currentWorkspace,
//       },
//       projects: {
//         projectsCollection: [],
//         editableProject: store.getState().projects.editableProject,
//       },
//     });
//   }, 1000)
// );

export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
