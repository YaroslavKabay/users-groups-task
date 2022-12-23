const { statusCodes } = require('../constants');
const {userService, tokenService} = require('../services');

module.exports={

    createUser: async (req, res, next) => {
        try{
            // const hashPassword = await tokenService.hashPassword(req.body.password);
            // const user = await userService.createUser({...req.body, password: hashPassword});
            const user = await userService.createUser(req.body);

            res.status(statusCodes.CREATE).json(user);

        } catch (e) {
            next(e);
        }
    },

    // getAllUsers: async (req, res, next) => {
    //     try {
    //         const users = await userService.getAllUsers();
    //
    //         res.json(users);
    //     } catch (e) {
    //         next(e);
    //     }
    // },
    //
    // getUserByID: (req, res, next) => {
    //     try {
    //         const { user } = req;
    //
    //         res.json(user);
    //     } catch (e) {
    //         next(e);
    //     }
    // },

    // deleteUserById: async (req, res, next) => {
    //     try{
    //
    //         const { userId } = req.params;
    //
    //
    //         await userService.deleteUserById(userId);
    //
    //
    //         res.sendStatus(statusCodes.NO_CONTENT);
    //
    //     } catch (e) {
    //         next(e);
    //     }
    // },
    //
    // updateUserByID: async (req, res, next) => {
    //     try {
    //         const { userId } = req.params;
    //
    //         const user = await userService.updateUserByID(userId, req.body);
    //
    //         res.json(user);
    //     } catch (e) {
    //         next(e);
    //     }
    // },
};