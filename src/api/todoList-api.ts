import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

export const todoListAPI = {
    getTDAPI() {
        return instance.get<TodoListApiType[]>('todo-lists')
    },
    creatTDAPI(title: string) {
        return instance.post<ResponseType<{item: TodoListApiType}>>(`todo-lists`, {title})
    },
    deleteTDAPI(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTDAPI(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    },
    // TASKS
    getTaskAPI(todolistId: string) {
        return instance.get<TaskApiType>(`todo-lists/${todolistId}/tasks?count=10&page=1`)
    },
    createTaskAPI(todolistId: string, title: string) {
        return instance.post<ResponseType<{item: ItemTaskType}>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTaskAPI(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTaskApi(todolistId: string, taskId: string, title: string) {
        return instance.put<ResponseType<{item: ItemTaskType}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}

type TodoListApiType = {
    id: string
    title: string
    addedDate: Date
    order: number
}

type ResponseType<T = {}> = {
    fieldsErrors: []
    resultCode: number
    messages: []
    data: T
}

type TaskApiType = {
    error: boolean
    items: ItemTaskType[]
    totalCount: number
}

type ItemTaskType = {
    addedDate: Date
    deadline: null
    description: null
    id: string
    order: number
    priority: number
    startDate: null
    status: number
    title: string
    todoListId: string
}
