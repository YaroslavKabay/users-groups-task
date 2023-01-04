const {Group} = require('../dataBase');
const User = require("../dataBase/User");

module.exports = {
    createGroup(userObject) {
        return Group.create(userObject);
    },

    getAllGroups: () => Group.find(),

    updateGroupByID(groupId, newUserObject) {
        return Group.findOneAndUpdate({ _id: groupId }, newUserObject, { new: true });
    },
    // getOne(id) {
    //     return Group.findById(id);
    // }, ////

    deleteUserFromGroupByID(groupId, userId) {
        return Group.updateOne({ _id: groupId },
            {$pull:{
                users : userId
                }}
        );
    },

    deleteGroupById(groupId){
        return Group.deleteOne({_id:groupId});
    },
    getOneById(id){
        return Group.findById(id).select(['+users'])
            .populate('users'); // ???? select and populate
    },
    //
    // getOneByParams(filter){
    //     return User.findOne(filter);
    // },
}