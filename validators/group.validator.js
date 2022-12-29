const Joi = require('joi');

const nameValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();
const descriptionValidator = Joi.string().alphanum()
    .min(1)
    .max(1200);
const usersValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();

const newGroupValidator = Joi.object({
    name: nameValidator.required(),
    description: descriptionValidator,
    users: usersValidator

});
const updateGroupValidator = Joi.object({
    name: nameValidator,
    description: descriptionValidator,
    users: usersValidator,

});

module.exports = {
    newGroupValidator,
    updateGroupValidator,
};