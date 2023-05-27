import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todoListAPI} from "../api/todoList-api";

export default {
    title: 'API'
}

const setting = {
    withCredentials: true
}

const baseURL = 'https://social-network.samuraijs.com/api/1.1/todo-lists';

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todoListAPI.getTDAPI()
            .then((data) => {
                setState(data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.creatTDAPI()
            .then((data) => {
                setState(data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.deleteTDAPI()
            .then((data) => {
                setState(data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.updateTDAPI()
            .then((data) => {
                setState(data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

