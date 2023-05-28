import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todoListAPI} from "../api/todoList-api";

export default {
    title: 'API-tasks'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskCount, setTaskCount] = useState<any>(null)
    const todolistId = '504fb2e0-6f7a-4042-b1f1-40d87ef8dea5'
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todoListAPI.getTaskAPI(todolistId)
            .then((res) => {
                setState(res.data.items)
                setTaskCount(res.data.totalCount)
            })
    }, [])
    return <div>
        <p>Количество тасок: {JSON.stringify(taskCount)}</p>
        <span>{JSON.stringify(state)}</span>
    </div>
}
export const CreateTask = () => {
    const title = 'Buy a pack of newspapers';
    const todolistId = '504fb2e0-6f7a-4042-b1f1-40d87ef8dea5'
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.createTaskAPI(todolistId, title)
            .then((res) => {
                setState(res.data.data.item)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const todolistId = "504fb2e0-6f7a-4042-b1f1-40d87ef8dea5"
    const taskId = "f46d9715-ce1d-4df0-80eb-f054cce9de5c"
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.deleteTaskAPI(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const todolistId = "504fb2e0-6f7a-4042-b1f1-40d87ef8dea5";
    const taskId = "7f37135a-45c4-494c-84d6-b6790b128e81"
    const title = 'REACT';
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.updateTaskApi(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

