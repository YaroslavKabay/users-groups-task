const { Router } = require('express');

const {generalMdlwr, userMdlwr} = require('../middlewares');
const {userController} = require('../controllers');
const {newUserValidator,updateUserValidator}= require('../validators/user.validators');

const userRouter = Router();

userRouter.post(
    '/',
    generalMdlwr.checkIfBodyIsValid(newUserValidator),
    userMdlwr.checkIfValuesAreUnique,
    generalMdlwr.checkIfIdIsValid('group','body'),
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
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    userController.deleteUserById );



module.exports = userRouter;
