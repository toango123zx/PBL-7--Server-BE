import { AIService } from '../services'
import { playgroundUtils } from '../utils'
import { AxiosInterceptors } from '../utils/axios.interceptor'

export const getAllModelVersions = async (req, res) => {
    const versions = await AIService.model.getAllVersion()
    if (!versions)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })

    return res.status(200).json({
        success: true,
        data: versions,
    })
}

export const getUsingModelVersion = async (req, res) => {
    const version = await AIService.model.getUsingVersion()
    if (!version)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })

    return res.status(200).json({
        success: true,
        data: version,
    })
}

export const changeUsingVersion = async (req, res) => {
    const { version } = req.body

    const response = await AxiosInterceptors.post('/model_version', { version })

    if (response.success)
        return res.status(200).json({
            success: true,
            message: 'version changed successfully',
        })
    return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    })
}

export const usePlayground = async (req, res) => {
    const { text } = req.body

    const [valid, message] = playgroundUtils.validateInput(text)
    if (!valid) return res.status(400).json({ success: false, message: message })

    const data = await AIService.model.getSummary(text)

    if (!data)
        return res
            .status(500)
            .json({ success: false, message: 'Internal Server Error' })

    return res.status(200).json({ success: true, data: data })
}
