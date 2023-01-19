import {useEffect} from 'react';
// import {useLocation, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {groupActions,userActions} from "../../redux";
import {useParams} from "react-router-dom";

const UserEditPage = () => {

    const {_id} = useParams();
    console.log(_id);
    // console.log('params', _id);
    // const {state} = useLocation()
    // console.log('state', state);

    const {reset, register, handleSubmit, setValue} = useForm();
    const { userForUpdate, errors} = useSelector(state => state.users);
    const {groups} = useSelector(state => state.groups)
    const dispatch = useDispatch();
    console.log('userForUpdate', userForUpdate._id);
    console.log('groups',groups);

    useEffect( () => {
        console.log('userForUpdate', userForUpdate);
        if (userForUpdate.toString() !== _id.toString() ) {
            // if (userForUpdate._id !== _id ) {

            setValue('username', userForUpdate.username)
            setValue('email', userForUpdate.email)
            // setValue('group', userForUpdate.group)
            dispatch(groupActions.getAll())

        }

    },


    // () => {
    //     dispatch(groupActions.getAll())
    // },
        [userForUpdate, setValue, dispatch])


    const submit = async (data) => {
        if (userForUpdate) {
            await dispatch(userActions.updateById({_id: userForUpdate._id, user: data}))
        } else {
            await dispatch(userActions.create({car: data}))
        }

        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                {/*<input type="text" placeholder={'group'} {...register('group')}/>*/}
                <select {...register('group'
                    ,{required: true}
                )}>
                    <option value={''} disabled selected> Please choose a group </option>
                    {groups.map((value, index) => {
                        // console.log(value)
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

