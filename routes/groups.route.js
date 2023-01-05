const { Router } = require('express');

const { generalMdlwr, groupMdlwr} = require('../middlewares');
const {groupsController} = require('../controllers');
const {newGroupValidator, updateGroupValidator}= require('../validators/group.validator');

const groupsRoute= Router();

groupsRoute.get('/', groupsController.getAllGroups);

groupsRoute.post(
    '/',
    generalMdlwr.checkIfBodyIsValid(newGroupValidator),
    groupMdlwr.checkIfNameIsUnique,
    groupsController.createGroup );

groupsRoute.put(
    '/:groupId',
    generalMdlwr.checkIfBodyIsValid(updateGroupValidator),
    generalMdlwr.checkIfIdIsValid('groupId'),
    groupMdlwr.checkIfGroupIsPresent(),
    groupMdlwr.checkIfNameIsUnique,
    groupsController.updateGroupByID );

groupsRoute.delete(
    '/:groupId',
    generalMdlwr.checkIfIdIsValid('groupId'),
    groupMdlwr.checkIfGroupIsPresent(),
    groupMdlwr.checkIfGroupIsEmpty,
    groupsController.deleteGroupById );


module.exports = groupsRoute;
