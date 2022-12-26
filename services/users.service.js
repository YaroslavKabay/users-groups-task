const User = require('../dataBase/User');

module.exports = {
    createUser(userObject){
        return User.create(userObject);
    },

    getAllUsers: () => User.find(),

    updateUserByID(userId, newUserObject) {
        return User.findOneAndUpdate({ _id: userId }, newUserObject, { new: true });
    },

    deleteUserById(userId){
        return User.deleteOne({_id:userId});
    },

    getOneByParams(filter){
        return User.findOne(filter);
    },
    //
    // getOneById(id){
    //     return User.findById(id).select(['+cars'])
    //         .populate('cars');
    // },
    //
    //

};