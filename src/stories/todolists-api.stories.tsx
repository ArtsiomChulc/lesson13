import React, {useEffect, useState} from 'react'
import axios from "axios";

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
        axios.get(baseURL, setting)
            .then((res) => {
                    setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post(baseURL, {title: "REDUX"}, setting)
            .then((res) => {
                    setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const todolistId = "b964e1ee-34ec-4a67-ae92-3196479ec1ee"
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.delete(`${baseURL}/${todolistId}`, setting)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const todolistId = "e71c754c-9bca-4021-b898-e5704f59d7d2"
    const [state, setState] = useState<any>(null)
    const title = 'REACT';
    useEffect(() => {
        axios.put(`${baseURL}/${todolistId}`, {title}, setting)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

