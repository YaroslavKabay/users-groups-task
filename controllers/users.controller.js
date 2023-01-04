const { statusCodes } = require('../constants');
const {userService,groupService} = require('../services');

module.exports={

    createUser: async (req, res, next) => {
        try{

            const { _id, users } = req.group;

            const user = await userService.createUser({ ...req.body, group: _id });

            await groupService.updateGroupByID(_id, { users: [ ...users, user._id ] });

            res.status(statusCodes.CREATE).json(user);

        } catch (e) {
            next(e);
        }
    },
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    updateUserByID: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const user = await userService.updateUserByID(userId, req.body);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },
    deleteUserById: async (req, res, next) => {
        try{
            const {  _id: userId, group } = req.user;

            await groupService.deleteUserFromGroupByID(group._id, userId);

            await userService.deleteUserById(userId);

            res.sendStatus(statusCodes.NO_CONTENT);

        } catch (e) {
            next(e);
        }
    },

};