import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer,groupReducer} from "./slices";


const rootReducer = combineReducers({
    users: userReducer,
    groups: groupReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}