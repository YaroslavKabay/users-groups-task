import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Group} from "../Group/Group";
import {groupActions} from "../../redux";
import {Link, Outlet} from "react-router-dom";

const Groups = () => {
    const {groups} = useSelector(state => state.groups);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupActions.getAll())
    }, [dispatch])

    return (

        <div>

            <Link to={`create`} >
                <button>Create group</button>
            </Link>
            <Outlet/>
            {groups.map(group => <Group key={group._id} group={group}/>)}

        </div>
    );
};

export {Groups};