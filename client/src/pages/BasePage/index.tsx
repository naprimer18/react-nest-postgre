import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addTaskAction,
  deleteTaskAction,
  getTasksAction,
  editTaskAction,
} from "../../store/Tasks/actions";
import { ITask } from "../../store/Tasks/models";

//styles
import style from "./styles/index.module.scss";

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

const GET_TASKS = gql`
  query GET_T {
    getAllTasks {
      name
      id
    }
  }
`;

const ADD_TASKS = gql`
  mutation ADD_T($name: String!) {
    addTask(name: $name) {
      id
      name
    }
  }
`;

const DELETE_TASK = gql`
  mutation REMOVE_T($id: Float!) {
    removeTask(id: $id) {
      name
    }
  }
`;

const EDIT_TASK = gql`
  mutation EDIT_T($id: Float!, $name: String!) {
    editTask(id: $id, name: $name) {
      name
    }
  }
`;

export const BasePage = () => {
  const { data, refetch } = useQuery(GET_TASKS);
  const [addTask] = useMutation(ADD_TASKS);
  const [removeTask] = useMutation(DELETE_TASK);
  const [editTask] = useMutation(EDIT_TASK);

  const tasksCollection = useSelector(
    (store: RootState) => store.Tasks.collection
  );
  const [currentTask, setCurrentTask] = useState("");
  const [editableTask, setEditableTask] = useState<{
    name: string,
    id: number,
  }>({
    name: "",
    id: 0,
  });

  const onAddMessage = async () => {
    await addTask({ variables: { name: currentTask } });
    await refetch();
    setCurrentTask("");
  };

  const onDeleteTask = async (itemId: number) => {
    await removeTask({ variables: { id: itemId } });
    await refetch();
  };

  const onEditTask = async () => {
    setEditableTask({ id: 0, name: "" });
    await editTask({
      variables: { id: editableTask.id, name: editableTask.name },
    });
    await refetch();
  };

  const refreshCurrentMessage = (e: any) => {
    setCurrentTask(e.target.value);
  };

  return (
    <div>
      <div className={style.addTaskcontainer}>
        <input
          className={style.taskName}
          placeholder="Your task"
          value={currentTask}
          onChange={refreshCurrentMessage}
        />
        <button className={style.addTaskButton} onClick={onAddMessage}>
          Add
        </button>
      </div>
      {data?.getAllTasks.length
        ? data.getAllTasks.map((item: ITask) => (
            <div key={item.id} className={style.taskListContainer}>
              <button
                className={style.deleteTaskButton}
                onClick={() => onDeleteTask(item.id)}
              >
                X
              </button>
              <button
                className={style.deleteTaskButton}
                onClick={() =>
                  setEditableTask({ name: item.name, id: item.id })
                }
              >
                edit
              </button>
              {item.id === editableTask.id ? (
                <>
                  <input
                    value={editableTask.name}
                    onChange={e =>
                      setEditableTask({ ...editableTask, name: e.target.value })
                    }
                  />
                  <button
                    className={style.deleteTaskButton}
                    onClick={onEditTask}
                  >
                    save
                  </button>
                </>
              ) : (
                <div className={style.taskListItem}>{item.name}</div>
              )}
            </div>
          ))
        : null}
    </div>
  );
};
