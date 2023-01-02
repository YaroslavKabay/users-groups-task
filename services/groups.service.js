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