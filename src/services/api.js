import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export const REGISTER_USER = "/users/register"
export const LOGIN_USER = "/users/login"
export const service = {
    register: async (username, mail, token) => await api.post(REGISTER_USER, {username, mail, token}),
    login: async (mail, token) => await api.post(LOGIN_USER, {mail, token})
}