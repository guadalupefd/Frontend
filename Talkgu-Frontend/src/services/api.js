import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export const REGISTER_USER = "/users/register"
export const service = {
    register: async (username, mail, token) => await api.post(REGISTER_USER, {username, mail, token})
}