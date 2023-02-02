import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {groupService} from "../../services";

const initialState = {
    cars: [],
    groups: [],
    groupForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'groupSlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await groupService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'groupSlice/create',
    async ({group}, {rejectWithValue})=>{
        try {
            const {data} = await groupService.create(
                group
            );
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const del = createAsyncThunk(
    'groupSlice/delete',
    async ({_id}, {rejectWithValue})=>{
        try {
            await groupService.deleteById(_id)
            return _id
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'groupSlice/updateById',
    async ({_id, group}, {rejectWithValue}) => {
        try {
            const {data} = await groupService.updateById(_id, group);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const groupSlice = createSlice({
    name: 'groupSlice',
    initialState,
    reducers: {
        setGroupForUpdate: (state, action) => { // стейт це інітіал стейт
            state.groupForUpdate = action.payload
        }
    },// логіка слайсу
    extraReducers: (builder) => // асинхронні методи з асинксанку
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.groups = action.payload
                // console.log(state.groups);
            })
            .addCase(updateById.fulfilled, (state, action) => {
                    const currentGroup = state.groups.find(value => value._id === action.payload._id);
                    Object.assign(currentGroup, action.payload);
                    state.groupForUpdate = null
                }
            )
            .addCase(del.fulfilled, (state, action) => {
                const index = state.groups.findIndex(group=>group.id === action.payload);
                state.groups.splice(index, 1)
            })
            .addCase(create.fulfilled, (state, action) => {
                state.groups.push(action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1); // забирає останній елемент стрічки
                if (type === 'rejected'){
                    state.errors = action.payload
                }else {
                    state.errors = null
                }
            })
});

const {reducer: groupReducer, actions: {setGroupForUpdate}} = groupSlice;

const groupActions = {
    getAll,
    setGroupForUpdate,
    updateById,
    create,
    del
}

export {
    groupReducer,
    groupActions
}