import { modelService } from "../services"

export const createModel = async (req, res, next) => {
    const name = req.body.name.replace(/\s/g, '');
    const {rouge1, rouge2, rougeL } = req.body
    try {
        await modelService.createModel(name, rouge1, rouge2, rougeL)
        return res.status(200).json({
            success: true,
            message: 'Model created successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }

}