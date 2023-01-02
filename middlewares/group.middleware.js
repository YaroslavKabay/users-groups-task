const {ApiError} = require('../errors');
const {userService, groupService} = require('../services');
const {statusCodes} = require('../constants');
const {User} = require('../dataBase');


module.exports = {

    // checkIfValuesAreUnique: async (req, res, next) => {
    //     try {
    //         const { email, username } = req.body;
    //         const { userId } = req.params;
    //
    //         const emailChecker = await userService.getOneByParams({ email,  _id: { $ne: userId } });
    //         const usernameChecker = await userService.getOneByParams({ username,  _id: { $ne: userId } });
    //
    //         if (emailChecker) {
    //             return next(new ApiError('User with this email already exist', statusCodes.CONFLICT));
    //         }
    //         if (usernameChecker) {
    //             return next(new ApiError('User with this username already exist', statusCodes.CONFLICT));
    //         }
    //
    //         next();
    //     } catch (e) {
    //         next(e);
    //     }
    // },

    checkIfGroupIsPresent: (from = 'params') => async function(req, res, next) {
        try {
            const { group } = req[from];
            // console.log(req.body);

            const groupChecker = await groupService.getOneById(group);

            if (!groupChecker) {
                return next(new ApiError('Group not found', statusCodes.NOT_FOUND));
            }

            req.group = groupChecker;
            next();
        } catch (e) {
            next(e);
        }
    },
    //
    // getUserDynamicaly: (from = 'body', filedName = 'userId', dbField = filedName) => async function(req, res, next) {
    //     try {
    //         const filedToSearch = req[from][filedName];
    //
    //         const user = await User.findOne({ [dbField]: filedToSearch });
    //
    //         if (!user) {
    //             return next(new ApiError('User not found', statusCodes.NOT_FOUND));
    //         }
    //
    //         req.user = user;
    //         next();
    //     } catch (e) {
    //         next(e);
    //     }
    // }
};