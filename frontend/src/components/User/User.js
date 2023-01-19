import {useDispatch} from "react-redux";

import css from './User.module.css';
import {userActions} from "../../redux";
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {_id, username, email} = user;

    const dispatch = useDispatch();
    return (
        <div className={css.User}>
            <div>_id: {_id}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            {/*<div>year: {year}</div>*/}
            <Link to={`${_id}`} state={user}>
                <button onClick={() => dispatch(userActions.setUserForUpdate(user))}>updateUser</button>
            </Link>

            <Link to={`${_id}`} state={user}>
                <button onClick={() => dispatch(userActions.del({_id}))}>delete</button>
            </Link>
        </div>
    );
};

export {User};