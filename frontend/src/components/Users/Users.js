import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {User} from "../User/User";
import {userActions} from "../../redux";
import {Outlet} from "react-router-dom";
// import {useForm} from "react-hook-form";


const Users = () => {
    const {users} = useSelector(state => state.users); // дістає шось зі стору(стейт це стор а стейтюзерс це редюсер а юзерс це інішнстейт)
    const dispatch = useDispatch();// ceтає в стор юзерс
    // const {userForUpdate, errors} = useSelector(state => state.users);
    // const {setValue} = useForm();



    useEffect(() => {
        dispatch(userActions.getAll())//ceтає в стор карс
    },
        // () => {
        //     dispatch(groupActions.getAll())
        // },
        // [userForUpdate,dispatch]
    )

    return (
        <div>
            <Outlet/>
            <div>
                {users.map(user => <User key={user._id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {Users};