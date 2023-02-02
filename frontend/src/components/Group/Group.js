import {useDispatch} from "react-redux";

import css from './Group.module.css';
import { groupActions } from "../../redux";
import {Link} from "react-router-dom";

const Group = ({group}) => {
    const { _id, name, description} = group;

    const dispatch = useDispatch();
    return (
        <div className={css.Group}>
            <div>name: {name}</div>
            <div>description: {description}</div>

            <Link to={`${_id}`} state={group}>
                <button onClick={() => dispatch(groupActions.setGroupForUpdate(group))}>Edit</button>
            </Link>

            <Link to={`${_id}`} state={group}>
                <button onClick={() => dispatch(groupActions.del({_id}))}>Delete</button>
            </Link>
        </div>
    );
};

export {Group};