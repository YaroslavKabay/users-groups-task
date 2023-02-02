import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {groupActions} from "../../redux";
import {useParams} from "react-router-dom";

const GroupEditPage = () => {

    const {_id} = useParams();

    const {reset, register, handleSubmit, setValue} = useForm();
    const { groupForUpdate, errors} = useSelector(state => state.groups);
    const dispatch = useDispatch();


    useEffect( () => {
            if (groupForUpdate) {

                setValue('name', groupForUpdate.name)
                setValue('description', groupForUpdate.description)
                dispatch(groupActions.getAll())

            }

        },
        [groupForUpdate, setValue, dispatch, _id])


    const submit = async (data) => {

        await dispatch(groupActions.updateById({_id: groupForUpdate._id, group: data}))

        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'description'} {...register('description')}/>
                <button>Update</button>

                {errors && <div>{JSON.stringify(errors)}</div>}
            </form>
        </div>
    );
};

export {GroupEditPage};

