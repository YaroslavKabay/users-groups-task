import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {groupActions,userActions} from "../../redux";

const UserEditPage = () => {

    const {_id} = useParams();
    const {reset, register, handleSubmit, setValue} = useForm();
    const { userForUpdate, errors} = useSelector(state => state.users);
    const {groups} = useSelector(state => state.groups)
    const dispatch = useDispatch();


    useEffect( () => {

        if (userForUpdate) {

            setValue('username', userForUpdate.username)
            setValue('email', userForUpdate.email)
            dispatch(groupActions.getAll())

        }

    },
        [userForUpdate, setValue, dispatch, _id])


    const submit = async (data) => {

            await dispatch(userActions.updateById({_id: userForUpdate._id, user: data}))

        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <select {...register('group'
                    ,{required: true}
                )}>
                    <option value={''} disabled selected> Please choose a group </option>
                    {groups.map((value, index) => {
                        return <option key={index} value={value._id}>{value._id}</option>
                    })}
                </select>

                <button>{userForUpdate ? 'Update' : 'Create'}</button>

                {errors && <div>{JSON.stringify(errors)}</div>}
            </form>
        </div>
    );
};

export {UserEditPage};

