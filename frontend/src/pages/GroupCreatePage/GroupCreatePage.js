import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {groupActions} from "../../redux";

const GroupCreatePage = () => {

    const {reset, register, handleSubmit} = useForm();
    const {errors} = useSelector(state => state.groups)
    const dispatch = useDispatch();


    useEffect( () => {
            dispatch(groupActions.getAll())
        },
        [dispatch])


    const submit = async (data) => {
        await dispatch(groupActions.create({group: data}))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'description'} {...register('description')}/>

                <button>Create</button>

                {errors && <div>{JSON.stringify(errors)}</div>}
            </form>
        </div>
    );
};

export {GroupCreatePage};

