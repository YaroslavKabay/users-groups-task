const {ApiError} = require('../errors');
const {groupService} = require('../services');
const {statusCodes} = require('../constants');


module.exports = {

    checkIfNameIsUnique: async (req, res, next) => {
        try {
            const { name } = req.body;
            const { groupId } = req.params;

            const nameChecker = await groupService.getOneByParams({ name, _id: { $ne: groupId } });

            if (nameChecker) {
                return next(new ApiError('Group with this name already exist', statusCodes.CONFLICT));
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    checkIfGroupIsPresent: (from = 'params', filedName = 'groupId') => async function(req, res, next) {
        try {
            const filedToSearch = req[from][filedName];

            const groupChecker = await groupService.getOneById( filedToSearch );

            if (!groupChecker) {
                return next(new ApiError('Group not found', statusCodes.NOT_FOUND));
            }

            req.group = groupChecker;
            next();

        } catch (e) {
            next(e);
        }
    },

    checkIfGroupIsEmpty: async (req, res, next) => {
        try {
            const { groupId } = req.params;

            const usersChecker = await groupService.getOneByParams( {_id: groupId, users: {$exists: true, $ne: []}});

            if (usersChecker) {
                return next(new ApiError('Group is not empty. Please remove users first', statusCodes.CONFLICT));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

};
