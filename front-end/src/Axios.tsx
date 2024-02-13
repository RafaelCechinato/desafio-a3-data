import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

export const getAll = async (route: string) => {
    try {
        const response = await await api.get(route).then((resp) =>{
            return resp.data;
        }).catch(() => {
            return []
        });
        return response;
    } catch (error) {
        console.error(`Error get data on route ${route}:`, error);
        return [];
    }
}

export const post = async (route: string, data: any) => {
    try {
        const response = await api.post(route,data).then((resp) =>{
            return resp.data;
        }).catch(() => {
            return "erro"
        });
        return response;
        
    } catch (error) {
        console.error(`Error posting data on route ${route}:`, error);
        return "erro"
    }
}

export const put = async (route: string, data: any) => {
    try {
        const response = await api.put(route,data).then((resp) =>{
            return resp.data;
        }).catch(() => {
            return "erro"
        });
        return response;
        
    } catch (error) {
        console.error(`Error posting data on route ${route}:`, error);
        return "erro"
    }
}

export const deleteItem = async (route: string) => {
    try {
        const response = await api.delete(route).then((resp) =>{
            return resp.data;
        }).catch(() => {
            return "erro"
        });
        return response;
        
    } catch (error) {
        console.error(`Error posting data on route ${route}:`, error);
        return "erro"
    }
}