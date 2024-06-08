import axios from 'axios'
import { AI_SERVICE_BASE_URL } from '../config/common.config'

export const AxiosInterceptors = axios.create({
    baseURL: AI_SERVICE_BASE_URL,
    timeout: 3000000,
})

AxiosInterceptors.interceptors.response.use(
    (response) => {
        return response.data
    },
    async function (error) {
        return Promise.reject(error)
    },
)
