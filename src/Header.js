import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ user }, dispach] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artist, Songs or Albums" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="AK" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
