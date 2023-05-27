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
