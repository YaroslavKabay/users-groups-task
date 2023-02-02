import {Route, Routes} from "react-router-dom" ;

import {
    GroupsPage,
    NotFoundPage,
    UsersPage,
    UserEditPage,
    UserCreatePage,
    GroupEditPage,
    GroupCreatePage
} from "./pages";
import {MainLayout} from "./layouts";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':_id'} element={<UserEditPage/>}/>
                    <Route path={'create'} element={<UserCreatePage/>}/>
                </Route>
                <Route path={'groups'} element={<GroupsPage/>}>
                    <Route path={':_id'} element={<GroupEditPage/>}/>
                    <Route path={'create'} element={<GroupCreatePage/>}/>
                </Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export {App};