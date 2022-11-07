import { axiosInstance } from "../apiConfing/instance";
import { ITask } from "./models";

export const getTasks = async () => {
  return await axiosInstance.get("/tasks/getAllTasks");
};

export const addTask = async (params: string) => {
  return await axiosInstance.post("/tasks/addTask", { name: params });
};

export const deleteTask = async (params: number) => {
  return await axiosInstance.delete("/tasks/deleteTask", {
    data: { id: params },
  });
};

export const editTask = async (params: ITask) => {
  return await axiosInstance.put("/tasks/editTask", params);
};
