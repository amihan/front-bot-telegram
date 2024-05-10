import {NavLink } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) => isActive ? 'active-link link' : 'link'}
            {...props}
        >
            {children}
        </NavLink>
    )
}

export {CustomLink};