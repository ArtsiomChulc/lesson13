import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todoListAPI} from "../api/todoList-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todoListAPI.getTDAPI()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const title = 'REDUX';
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.creatTDAPI(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const todolistId = "08ef8797-97f5-4454-bfaa-6019240c7d62"
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.deleteTDAPI(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const todolistId = "74a7657d-4a2d-4dde-b925-c83aa1048394";
    const title = 'REACT';
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.updateTDAPI(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

