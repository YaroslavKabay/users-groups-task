import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {// початковий стан слайсу
    cars: [],
    users: [],
    userForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'userSlice/create',
    async ({car}, {rejectWithValue})=>{
        try {
            const {data} = await userService.create(
                car
            );
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const del = createAsyncThunk(
    'userSlice/delete',
    async ({_id}, {rejectWithValue})=>{
        try {
            await userService.deleteById(_id)
            return _id
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'userSlice/updateById',
    async ({id, user}, {rejectWithValue}) => {
        try {
            const {data} = await userService.updateById(id, user);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserForUpdate: (state, action) => { // стейт це інітіал стейт
            state.userForUpdate = action.payload
        }
    },// логіка слайсу
    extraReducers: (builder) => // асинхронні методи з асинксанку
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.users = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentUser = state.users.find(value => value._id === action.payload._id);
                console.log('current user',current(currentUser));
                console.log('new user',action.payload);
                Object.assign(currentUser, action.payload);
                state.userForUpdate = null
                })
            .addCase(del.fulfilled, (state, action) => {
                const index = state.users.findIndex(car=>car.id === action.payload);
                state.users.splice(index, 1)
            })
            // .addCase(create.fulfilled, (state, action) => {
            //     state.users.push(action.payload)
            // })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1); // забирає останній елемент стрічки
                if (type === 'rejected'){
                    state.errors = action.payload
                }else {
                    state.errors = null
                }
            })
});

const {reducer: userReducer, actions: {setUserForUpdate}} = userSlice;

const userActions = {
    getAll,
    setUserForUpdate,
    updateById,
    create,
    del
}

export {
    userReducer,
    userActions
}