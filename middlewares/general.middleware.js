const {isObjectIdOrHexString} = require('mongoose')

const {ApiError} = require('../errors');
const { statusCodes } = require('../constants');

module.exports = {
    checkIfIdIsValid: (fieldName, from='params') =>  (req, res, next) => {
        try {
            // console.log(req[from][fieldName]);
            // console.log(req.query);
            if (!isObjectIdOrHexString(req[from][fieldName])) {
                return next(new ApiError('Not valid ID', statusCodes.BAD_REQUEST))
            }

            next();

        } catch (e) {
            next(e);
        }
    },
    // checkIfIdIsValid: (fieldName, from='params') => async (req, res, next) => {
    //     try {
    //         if (!isObjectIdOrHexString(req[from][fieldName])) {
    //             return next(new ApiError('Not valid ID', statusCodes.BAD_REQUEST))
    //
    //         }
    //
    //         next();
    //
    //     } catch (e) {
    //         next(e);
    //     }
    // },


    checkIfBodyIsValid : (validatorType) => (req,res,next) => {
        try {

            const validate = validatorType.validate(req.body);

            if(validate.error){

                return next(new ApiError(validate.error.message, statusCodes.BAD_REQUEST));
            }
            req.body = validate.value;

            next();

        }catch (e) {
            next(e);
        }
    },
}