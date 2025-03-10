import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export const REGISTER_USER = "/users/register"
export const LOGIN_USER = "/users/login"

export const REGISTER_CONSULANT = "/consultor/register"
export const LOGIN_CONSULANT = "/consultor/login"

export const service = {
    registerUser: async (username, mail, token) => await api.post(REGISTER_USER, {username, mail, token}),
    loginUser: async (mail, token) => await api.post(LOGIN_USER, {mail, token}),
    registerConsultant: async (username, mail, token) => await api.post(REGISTER_CONSULANT, {username, mail, token}),
    loginConsultant: async (mail, token) => await api.post(LOGIN_CONSULANT, {mail, token}),
}