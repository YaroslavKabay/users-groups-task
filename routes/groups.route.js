const { Router } = require('express');

// const {positionMdlwr, generalMdlwr} = require('../middlewares');
const {groupsController} = require('../controllers');
// const {updatePositionValidator,newPositionValidator}= require('../validators/position.validator');

const groupsRoute= Router();

groupsRoute.get('/', groupsController.getAllGroups);

groupsRoute.post(
    '/',
    // generalMdlwr.checkIfBodyIsValid(newPositionValidator),
    groupsController.createGroup );

groupsRoute.put(
    '/:groupId',
    // generalMdlwr.checkIfBodyIsValid(updatePositionValidator),
    // generalMdlwr.checkIfIdIsValid('positionId'),
    // positionMdlwr.checkIfPositionPresent(),
    groupsController.updateGroupByID );


groupsRoute.delete(
    '/:groupId',
    // generalMdlwr.checkIfIdIsValid('positionId'),
    // positionMdlwr.checkIfPositionPresent(),
    groupsController.deleteGroupById );




module.exports = groupsRoute;