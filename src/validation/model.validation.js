import { modelService } from "../services";
import Joi from 'joi'

const userSchema = Joi.object({
    name: Joi.string().required().label('name').messages({
        'date.base': 'name must be a string',
        'string.pattern.base': 'name that contain numbers or special characters',
        "any.required": "error due to input data missing name"
    }),
    rouge1: Joi.number()
        .min(0)
        .max(1)
        .required()
        .label('rouge1')
        .messages({
            "number.base": "rouge1 must be a number",
            "number.integer": "rouge1 must be an integer",
            "number.min": "rouge1 greater than the 0",
            "number.max": "rouge1 is less or equal the 1",
            "any.required": "error due to input data missing rouge1"
        }),
    rouge2: Joi.number()
        .min(0)
        .max(1)
        .required()
        .label('rouge2')
        .messages({
            "number.base": "rouge2 must be a number",
            "number.integer": "rouge2 must be an integer",
            "number.min": "rouge2 greater than the 0",
            "number.max": "rouge2 is less or equal the 1",
            "any.required": "error due to input data missing rouge2"
        }),
    rougeL: Joi.number()
        .min(0)
        .max(1)
        .required()
        .label('rougeL')
        .messages({
            "number.base": "rougeL must be a number",
            "number.integer": "rougeL must be an integer",
            "number.min": "rougeL greater than the 0",
            "number.max": "rougeL is less or equal the 1",
            "any.required": "error due to input data missing rougeL"
        }),
})

export const modelValidation = (req, res, next) => {
    try {
        const { error, value } = userSchema.validate(req.body)
        if (error) {
            return res.status(422).send({
                success: false,
                msg: error.stack,
            })
        }

        next()
    } catch (err) {
        return res.status(500).send({
            position: 'userUpdateValidation function at updateUserValidation schema',
            msg: 'Error from the server',
        })
    }
}



export const checkDuplicateModel = async (req, res, next) => {
    const name = req.body.name.replace(/\s/g, '');
    try {
        if (await modelService.getModel(name)) {
            return res.status(409).json({
                success: false,
                message: 'Model already exists'
            });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
