import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export const REGISTER_USER = "/users/register"
export const LOGIN_USER = "/users/login"

export const REGISTER_CONSULTANT = "/consultor/register"
export const LOGIN_CONSULTANT = "/consultor/login"

export const service = {
    registerUser: async (username, mail, password, token) => await api.post(REGISTER_USER, {username, mail, password, token}),
    loginUser: async (mail, password) => await api.post(LOGIN_USER, {mail, password}),
    registerConsultant: async (username, mail, password, token) => await api.post(REGISTER_CONSULTANT, {username, mail, password, token}),
    loginConsultant: async (mail, password) => await api.post(LOGIN_CONSULTANT, {mail, password}),
}