const { Router } = require('express');

// const {authMdlwr, commonMdlwr, userMdlwr} = require('../middlewares');
const {userController} = require('../controllers');
// const {newUserValidator,updateUserValidator}= require('../validators/user.validators');

const userRouter = Router();

userRouter.post(
    '/',
    // commonMdlwr.checkIfBodyIsValid(newUserValidator),
    // userMdlwr.checkIfUserEmailIsUniq,
    userController.createUser
);

userRouter.get('/', userController.getAllUsers);

userRouter.put(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    //     commonMdlwr.checkIfBodyIsValid(updateUserValidator),
    //     authMdlwr.checkIsAccessToken,
    //     userMdlwr.checkIfUserPresent(),
    //     userMdlwr.checkIfUserEmailIsUniq,
    userController.updateUserByID );




userRouter.delete(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    userController.deleteUserById );

// userRouter.put(
//     '/:userId',
//     // commonMdlwr.checkIfIdIsValid('userId'),
//     //     // commonMdlwr.checkIfBodyIsValid(updateUserValidator),
//     //     // authMdlwr.checkIsAccessToken,
//     //     // userMdlwr.checkIfUserPresent(),
//     //     // userMdlwr.checkIfUserEmailIsUniq,
//     //     // userController.updateUserByID );


module.exports = userRouter;
