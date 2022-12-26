const {Group} = require('../dataBase');

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
    //
    // getOneByParams(filter){
    //     return User.findOne(filter);
    // },
}