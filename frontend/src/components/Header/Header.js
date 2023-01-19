import {NavLink} from "react-router-dom";
import css from './Header.module.css'

function Header() {
    return (
        <div className={css.Header}>
            <NavLink to={'users'} className={css.NavLink}>Users</NavLink>
            <NavLink to={'groups'} className={css.NavLink}>Groups</NavLink>
        </div>);
}

export {Header};