const { statusCodes } = require('../constants');
const { groupService} = require('../services');

module.exports = {
    createGroup: async (req, res, next) => {
        try {
            const group = await groupService.createGroup(req.body);

            res.status(statusCodes.CREATE).json(group);
        } catch (e) {
            next(e);
        }
    },
    getAllGroups: async (req, res, next) => {
        try {
            const users = await groupService.getAllGroups();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    updateGroupByID: async (req, res, next) => {
        try {
            const { groupId } = req.params;

            const user = await groupService.updateGroupByID(groupId, req.body);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },
    deleteGroupById: async (req, res, next) => {
        try{

            const { groupId } = req.params;

            await groupService.deleteGroupById(groupId);

            res.sendStatus(statusCodes.NO_CONTENT);

        } catch (e) {
            next(e);
        }
    },
};
