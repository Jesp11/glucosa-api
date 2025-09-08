'use strict';
const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const changeStatusSchema = Joi.object({
    status: Joi.boolean().required(),
});

const deleteUserSchema = Joi.object({
    id: Joi.string().length(26).required()
});

module.exports = {
    loginSchema,
    createUserSchema,
    changeStatusSchema,
    deleteUserSchema
};
