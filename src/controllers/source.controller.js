import { sourceService } from '../services'

export const getAllSources = async (req, res, next) => {
    const sources = await sourceService.getAllSources()
    return res.status(200).json({
        success: true,
        data: sources,
    })
}
