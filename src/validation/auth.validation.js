import { userService } from '../services'

const Joi = require('joi')

const userSchema = Joi.object({
    username: Joi.string().required().label('username error').messages({
        'date.base': 'Username must be a string',
        'string.pattern.base': 'Username that contain numbers or special characters',
    }),
    password: Joi.string().required().label('password error').messages({
        'date.base': 'Password must be a string',
        'string.pattern.base': 'Password that contain numbers or special characters',
    }),
    name: Joi.string()
        .required()
        .pattern(/^[^\d~`!@#$%^&*()_+\-={[}\]|;:'",<.>?/]+$/)
        .label('name error')
        .messages({
            'date.base': 'Name must be a string',
            'string.pattern.base':
                'Names that contain numbers or special characters',
        }),
    email: Joi.string().email().required().label('email error').messages({
        'date.base': 'Email must be a string',
        'string.email': 'as sample: user1@gmail.com',
    }),
    gender: Joi.boolean()
        .required()
        .valid(0, 1, true, false)
        .label('gender error')
        .messages({
            'boolean.base': 'Gender must be true or false',
        }),

    dateOfBirth: Joi.date()
        .required()
        .max(new Date())
        .iso()
        .label('dateOfBirth error')
        .messages({
            'date.base':
                'dateOfBirth must be a valid date (maybe string format yy-mm-dd)',
            'date.format': 'Invalid date and as sample: yy-mm-dd',
            'date.max': 'dateOfBirth greater than the current date',
        }),
    role: Joi.string().valid('user', 'admin').label('role error').messages({
        'date.base': 'Role must be a string',
        'string.pattern.base': 'Roles that contain numbers or special characters',
    }),
})

export const userRegisterValidation = (req, res, next) => {
    try {
        const { error, value } = userSchema.validate(req.body)
        if (error) {
            return res.status(422).send({
                position: error.details[0].context.label,
                msg: error.stack,
            })
        }

        req.updateInfoUser = value
    } catch (err) {
        return res.status(500).send({
            position: 'userUpdateValidation function at updateUserValidation schema',
            msg: 'Error from the server',
        })
    }
    next()
}

export const checkDuplicateUser = async (req, res, next) => {
    const __user = await userService.getUser(
        undefined,
        req.body.username.replace(/\s/g, ''),
        req.body.email.replace(/\s/g, ''),
    )
    console.log('🚀 ~ checkDuplicateUser ~ __user:', __user)

    if (__user) {
        return res.status(409).json({
            position: 'username or email',
            msg: 'already exist',
        })
    }

    next()
}
