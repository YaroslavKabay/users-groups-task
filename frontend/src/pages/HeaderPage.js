import React from 'react';
import {BodyPage} from "./BodyPage";
import {GroupsPage,UsersPage} from "../pages";

const HeaderPage = () => {
    return (
        <div>
            <GroupsPage/>
            <UsersPage/>
        </div>
    );
};

export {HeaderPage};