// const Joi = require('joi');
//
// const { EMAIL, PASSWORD } = require('../constants/regex.enum');
// const { ApiError } = require('../errors');
// const { BAD_REQUEST } = require('../constants/statusCode.enum');
//
// const nameValidator = Joi.string().alphanum()
//     .min(2)
//     .max(35)
//     .trim();
// const ageValidator = Joi.number().integer()
//     .min(1)
//     .max(120);
// const emailValidator = Joi.string().regex(EMAIL)
//     .lowercase()
//     .trim()
//     .error(new ApiError('Email not valid', BAD_REQUEST));
// const passwordValidator = Joi.string().regex(PASSWORD)
//     .error(new ApiError('Password not valid', BAD_REQUEST));
//
// const newUserValidator = Joi.object({
//     name: nameValidator.required(),
//     age: ageValidator,
//     email: emailValidator.required(),
//     password: passwordValidator.required(),
//     // girls: Joi.array().items(Joi.string()).when('age', { is: 26, then: Joi.required() })
// });
//
// const updateUserValidator = Joi.object({
//     name: nameValidator,
//     age: ageValidator,
//     email: emailValidator,
//
// });




// module.exports = {
//     newUserValidator,
//     updateUserValidator,
// };