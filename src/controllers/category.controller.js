import { categoryService } from '../services'

export const getCategoriesBySourceId = async (req, res, next) => {
    const { sourceId } = req.query
    if (!sourceId)
        return res.status(400).json({
            success: false,
            message: 'missing source id',
        })

    try {
        const categories = await categoryService.getCategoriesBySourceId(sourceId)

        return res.status(200).json({
            success: true,
            data: categories,
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
