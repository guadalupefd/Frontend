import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-production-2c60.up.railway.app"
});

export const REGISTER_USER = "/users/register"
export const LOGIN_USER = "/users/login"
export const FIND_USER = "/users/findUser"

export const REGISTER_CONSULTANT = "/consultor/register"
export const LOGIN_CONSULTANT = "/consultor/login"
export const FIND_CONSULTANT = "/consultor/findConsultor"

export const service = {
    registerUser: async (username, mail, password, token) => await api.post(REGISTER_USER, {username, mail, password, token}),
    loginUser: async (mail, password) => await api.post(LOGIN_USER, {mail, password}),
    findUser: async (mail) => await api.post(FIND_USER, {mail}),
    registerConsultant: async (formData) =>
        await api.post(REGISTER_CONSULTANT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
    loginConsultant: async (mail, password) => await api.post(LOGIN_CONSULTANT, {mail, password}),
    findConsultant: async (mail) => await api.post(FIND_CONSULTANT, {mail}),
    getConsultantImage: async (id) => await api.get(`/consultor/${id}/image`, {responseType: 'blob'}),
}