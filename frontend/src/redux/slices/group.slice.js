import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {groupService} from "../../services";

const initialState = {// початковий стан слайсу
    cars: [],
    groups: [],
    carForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            // dispatch(setCarForUpdate())
            // const state = getState();
            // console.log(state);
            const {data} = await groupService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue})=>{
        try {
            const {data} = await groupService.create(
                car
            );
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const del = createAsyncThunk(
    'carSlice/delete',
    async ({id}, {rejectWithValue})=>{
        try {
            await groupService.deleteById(id)
            return id
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await groupService.updateById(id, car);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const groupSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => { // стейт це інітіал стейт
            state.carForUpdate = action.payload
        }
    },// логіка слайсу
    extraReducers: (builder) => // асинхронні методи з асинксанку
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.groups = action.payload
                // console.log(state.groups);
            })
            // .addCase(updateById.fulfilled, (state, action) => {
            //         const currentCar = state.cars.find(value => value.id === action.payload.id);
            //         Object.assign(currentCar, action.payload);
            //         state.carForUpdate = null
            //     }
            // )
            .addCase(del.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=>car.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
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

const {reducer: groupReducer, actions: {setCarForUpdate}} = groupSlice;

const groupActions = {
    getAll,
    setCarForUpdate,
    updateById,
    create,
    del
}

export {
    groupReducer,
    groupActions
}