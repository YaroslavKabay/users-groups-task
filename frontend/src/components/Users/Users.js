import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {User} from "../User/User";
import {userActions} from "../../redux";
import {Link, Outlet} from "react-router-dom";


const Users = () => {

    const {users} = useSelector(state => state.users); // дістає шось зі стору(стейт це стор а стейтюзерс це редюсер а юзерс це інішнстейт)
    const dispatch = useDispatch();// ceтає в стор юзерс

    useEffect(() => {
        dispatch(userActions.getAll())//ceтає в стор карс
    },

        [dispatch]
    )

    return (
        <div>

            <Link to={`create`} >
                <button>Create user</button>
            </Link>
            <Outlet/>
            <div>
                {users.map(user => <User key={user._id} user={user}/>)}
            </div>
        </div>
    );
};

export {Users};