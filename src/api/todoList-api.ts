import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.1/todo-lists';
const setting = {
    withCredentials: true
}
export const todoListAPI = {
    getTDAPI() {
        return axios.get(baseURL, setting)
            .then((res) => res.data)
    },
    creatTDAPI() {
        return axios.post(baseURL, {title: "REDUX"}, setting)
            .then((res) => res.data)
    },
    deleteTDAPI() {
        const todolistId = "0835ea59-943b-432c-8955-70805c4f8f4a"
        return axios.delete(`${baseURL}/${todolistId}`, setting)
            .then((res) => res.data)
    },
    updateTDAPI() {
        const todolistId = "0835ea59-943b-432c-8955-70805c4f8f4a";
        const title = 'REACT';
        return axios.put(`${baseURL}/${todolistId}`, {title}, setting)
            .then((res) => res.data)
    }
}