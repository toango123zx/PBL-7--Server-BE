import { AxiosInterceptors } from '../../utils/axios.interceptor'

export async function getUsingVersion() {
    try {
        const response = await AxiosInterceptors.get('/')
        return response.data
    } catch {
        return false
    }
}

export async function changeUsingVersion() {}

export async function getAllVersion() {
    try {
        const response = await AxiosInterceptors.get('/version/all')
        return response.data
    } catch {
        return false
    }
}

export async function reloadVersion() {}

export async function getSummary(text) {
    try {
        const response = await AxiosInterceptors.post('/playground', { text })
        return response.data
    } catch {
        return false
    }
}
