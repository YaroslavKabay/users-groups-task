const { Router } = require('express');

const { generalMdlwr} = require('../middlewares');
const {groupsController} = require('../controllers');
const {newGroupValidator, updateGroupValidator}= require('../validators/group.validator');

const groupsRoute= Router();

groupsRoute.get('/', groupsController.getAllGroups);

groupsRoute.post(
    '/',
    generalMdlwr.checkIfBodyIsValid(newGroupValidator),
    generalMdlwr.checkIfIdIsValid('users','body'),
    groupsController.createGroup );

groupsRoute.put(
    '/:groupId',
    generalMdlwr.checkIfBodyIsValid(updateGroupValidator),
    generalMdlwr.checkIfIdIsValid('groupId'),
    // positionMdlwr.checkIfPositionPresent(),
    groupsController.updateGroupByID );


groupsRoute.delete(
    '/:groupId',
    // generalMdlwr.checkIfIdIsValid('positionId'),
    // positionMdlwr.checkIfPositionPresent(),
    groupsController.deleteGroupById );




module.exports = groupsRoute;