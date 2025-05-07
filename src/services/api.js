import axios from "axios";
import { routes } from "./routes";
import { data } from "react-router-dom";

export const api = axios.create({
    baseURL: "https://backend-production-2c60.up.railway.app"
});

export const service = {
    registerUser: async (username, mail, password, token) => await api.post(routes.REGISTER_USER, {username, mail, password, token}),
    loginUser: async (mail, password) => await api.post(routes.LOGIN_USER, {mail, password}),
    findUser: async (mail) => await api.post(routes.FIND_USER, {mail}),
    
    registerConsultant: async (formData) =>
        await api.post(routes.REGISTER_CONSULTANT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
    loginConsultant: async (mail, password) => await api.post(routes.LOGIN_CONSULTANT, {mail, password}),
    findConsultant: async (mail) => await api.post(routes.FIND_CONSULTANT, {mail}),
    getConsultantImage: async (id) => await api.get(`/consultor/${id}/image`, {responseType: 'blob'}),
    
    registerDonation: async (unitPrice) => await api.post(routes.REGISTER_DONATION, {unitPrice}),
    
    uploadDiary: async (formData) => 
        await api.post(routes.UPLOAD_DIARY, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
    
    changeEmotion: async (userId,emotion) => await api.post(routes.CHANGE_EMOTION, {userId,emotion}),
    uploadEmotionalImage: async (formData) => 
        await api.post(routes.UPLOAD_IMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
    getEmotionalExercises: async (emotion) => await api.get(`${routes.GET_EXERCISES}/${emotion}`)    
         
}