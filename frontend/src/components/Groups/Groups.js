import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Group} from "../Group/Group";
import {groupActions} from "../../redux";

const Groups = () => {
    const {groups} = useSelector(state => state.groups); // дістає шось зі стору(стейт це стор а стейткарс це редюсер а карс це інішнстейт)
    const dispatch = useDispatch();// ceтає в стор карс

    useEffect(() => {
        dispatch(groupActions.getAll())//ceтає в стор карс
    }, [])

    return (
        <div>
            {groups.map(group => <Group key={group._id} group={group}/>)}
        </div>
    );
};

export {Groups};