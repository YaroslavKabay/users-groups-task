const { Router } = require('express');

const {generalMdlwr, userMdlwr, groupMdlwr} = require('../middlewares');
const {userController} = require('../controllers');
const {newUserValidator,updateUserValidator}= require('../validators/user.validators');

const userRouter = Router();

userRouter.post(
    '/',
    generalMdlwr.checkIfBodyIsValid(newUserValidator),
    // userMdlwr.checkIfValuesAreUnique,
    generalMdlwr.checkIfIdIsValid('group','body'),
    groupMdlwr.checkIfGroupIsPresent('body'),
    userController.createUser
);

userRouter.get('/', userController.getAllUsers);

userRouter.put(
    '/:userId',
    generalMdlwr.checkIfIdIsValid('userId'),
    generalMdlwr.checkIfBodyIsValid(updateUserValidator),
    userMdlwr.checkIfUserPresent(),
    userMdlwr.checkIfValuesAreUnique,
    userController.updateUserByID );

userRouter.delete(
    '/:userId',
    generalMdlwr.checkIfIdIsValid('userId'),
    userMdlwr.checkIfUserPresent(),
    userController.deleteUserById );


module.exports = userRouter;
