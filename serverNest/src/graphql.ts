
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface People {
    id?: Nullable<string>;
    name?: Nullable<string>;
    message?: Nullable<string>;
    tasks?: Nullable<Nullable<Task>[]>;
}

export interface IQuery {
    getPeople: People[];
    getAllTasks: Task[];
}

export interface Task {
    id?: Nullable<string>;
    peopleId?: Nullable<string>;
    message?: Nullable<string>;
}

export interface IMutation {
    addTask?: Nullable<Task>;
    editTask?: Nullable<Task>;
    removeTask?: Nullable<Task>;
}

type Nullable<T> = T | null;
