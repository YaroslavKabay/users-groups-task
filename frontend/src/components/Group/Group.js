import {useDispatch} from "react-redux";

import css from './Group.module.css';
import {carActions} from "../../redux";

const Group = ({group}) => {
    const {id, name, description, year} = group;

    const dispatch = useDispatch();
    return (
        <div className={css.Group}>
            {/*<div>id: {id}</div>*/}
            <div>name: {name}</div>
            <div>description: {description}</div>
            {/*<div>year: {year}</div>*/}
            {/*<button onClick={() => dispatch(carActions.setCarForUpdate(car))}>updateCar</button>*/}
            {/*<button onClick={() => dispatch(carActions.del({id}))}>delete</button>*/}
        </div>
    );
};

export {Group};