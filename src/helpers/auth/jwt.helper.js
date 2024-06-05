import jwt from 'jsonwebtoken'

import { jwtConfig } from '../../config';

export const createSignInToken = (payload) => {
    const __token = jwt.sign(payload, jwtConfig.jwtSecretAccessKey, {
        expiresIn: jwtConfig.expiresInAccessKey
    });

    return {
        __token,
    };
};

export const verifyToken = (token) => {
    return jwt.verify(token, jwtConfig.jwtSecretAccessKey, (e, __user) => {
        return {
            data: __user,
            error: e,
        };
    });
};