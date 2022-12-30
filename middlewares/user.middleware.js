const {ApiError} = require('../errors');
const {userService} = require('../services');
const {statusCodes} = require('../constants');
const {User} = require('../dataBase');


module.exports = {

    checkIfValuesAreUnique: async (req, res, next) => {
        try {
            const { email, username } = req.body;
            const { userId } = req.params;

            const emailChecker = await userService.getOneByParams({ email,  _id: { $ne: userId } });
            const usernameChecker = await userService.getOneByParams({ username,  _id: { $ne: userId } });

            if (emailChecker) {
                return next(new ApiError('User with this email already exist', statusCodes.CONFLICT));
            }
            if (usernameChecker) {
                return next(new ApiError('User with this username already exist', statusCodes.CONFLICT));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfUserPresent: (from = 'params') => async function(req, res, next) {
        try {
            const { userId } = req[from];

            const user = await userService.getOneById(userId);

            if (!user) {
                return next(new ApiError('User not found', statusCodes.NOT_FOUND));
            }

            req.user = user; // ???
            next();
        } catch (e) {
            next(e);
        }
    },

    getUserDynamicaly: (from = 'body', filedName = 'userId', dbField = filedName) => async function(req, res, next) {
        try {
            const filedToSearch = req[from][filedName];

            const user = await User.findOne({ [dbField]: filedToSearch });

            if (!user) {
                return next(new ApiError('User not found', statusCodes.NOT_FOUND));
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    }
};