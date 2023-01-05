const {Group} = require('../dataBase');

module.exports = {

    createGroup(userObject) {
        return Group.create(userObject);
    },
    getAllGroups: () => Group.find(),
    updateGroupByID(groupId, newUserObject) {
        return Group.findOneAndUpdate({ _id: groupId }, newUserObject, { new: true });
    },
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
            .populate('users');
    },
    getOneByParams(filter){
        return Group.findOne(filter);
    },

};
