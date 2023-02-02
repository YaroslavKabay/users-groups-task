import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {groupActions,userActions} from "../../redux";

const UserCreatePage = () => {

    const {reset, register, handleSubmit} = useForm();
    const {errors} = useSelector(state => state.users);
    const {groups} = useSelector(state => state.groups)
    const dispatch = useDispatch();


    useEffect( () => {
                dispatch(groupActions.getAll())
        },
        [dispatch])


    const submit = async (data) => {
            await dispatch(userActions.create({user: data}))
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

                <button>Create</button>

                {errors && <div>{JSON.stringify(errors)}</div>}
            </form>
        </div>
    );
};

export {UserCreatePage};

