const Joi = require('joi');

const { EMAIL } = require('../constants/regex.enum');
const { ApiError } = require('../errors');
const { BAD_REQUEST } = require('../constants/statusCode.enum');

const usernameValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();

const emailValidator = Joi.string().regex(EMAIL)
    .lowercase()
    .trim()
    .error(new ApiError('Email not valid', BAD_REQUEST));

const groupValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();


const newUserValidator = Joi.object({
    username: usernameValidator.required(),
    email: emailValidator.required(),
    group: groupValidator.required(),
});

const updateUserValidator = Joi.object({
    username: usernameValidator,
    email: emailValidator,
    group: groupValidator

});

module.exports = {
    newUserValidator,
    updateUserValidator,
};
