const Joi = require('joi');

const nameValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();
const descriptionValidator = Joi.string().alphanum()
    .min(1)
    .max(1200);


const newGroupValidator = Joi.object({
    name: nameValidator.required(),
    description: descriptionValidator,

});
const updateGroupValidator = Joi.object({
    name: nameValidator,
    description: descriptionValidator,

});

module.exports = {
    newGroupValidator,
    updateGroupValidator,
};
