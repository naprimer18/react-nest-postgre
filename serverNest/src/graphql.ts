
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Note {
    id?: Nullable<string>;
    message?: Nullable<string>;
    userId?: Nullable<string>;
}

export interface IQuery {
    getNotes?: Nullable<Nullable<Note>[]>;
    getNotesById?: Nullable<Note>;
    getUsers: User[];
    getUsersById?: Nullable<User>;
}

export interface IMutation {
    createNote?: Nullable<Note>;
    updateNote?: Nullable<Note>;
    deleteNote?: Nullable<string>;
    createUser?: Nullable<User>;
    updateUser?: Nullable<User>;
    deleteUser?: Nullable<string>;
}

export interface User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    notes?: Nullable<Nullable<Note>[]>;
}

type Nullable<T> = T | null;
