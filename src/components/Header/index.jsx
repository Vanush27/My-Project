import React, {useState} from 'react';
import Logo from "../../images/logo.png";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import {NavLink} from "react-router-dom";
import DropDownLanguage from "../../elements/DropDownLanguage";
import Favorites from "../Favorites";

const Header = () => {

    const [show, setShow] = useState(false);
    const [headerScroll, setHeaderScroll] = useState(false);

    const [favoriteToggle, setFavoriteToggle] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);

    const [activeAuthTab, setActiveAuthTab] = useState('login');


    const onFavoritesHandler = () => {
        setFavoriteToggle(!favoriteToggle);
    }

    const onNotificationsHandler = () => {
        setNotificationToggle(!notificationToggle);
    }


    return (
        <>
            <header>

                <div className="content">
                    <div className="header-wrapper">

                        <div className="logo">
                            <NavLink to="/">
                                <img src={Logo} alt="logo"/>
                            </NavLink>
                        </div>

                        <div className="navbar">
                            <ul>
                                <li>
                                    <NavLink to="/create-property">
                                        <button className="btn">Submit Your Property</button>
                                    </NavLink>

                                </li>

                                <li><NavLink to="/how-works">
                                    How it Works
                                </NavLink>
                                </li>

                                <li><DropDownLanguage/></li>

                                <li>
                                    <button className="btn-icon active"
                                            onClick={onNotificationsHandler}>
                                        <NotificationsNoneIcon/>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn-icon active" onClick={onFavoritesHandler}>
                                        <FavoriteBorderIcon/>
                                    </button>
                                </li>
                                <li>
                                    <PermIdentityIcon/>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </header>

            {favoriteToggle &&  <Favorites onFavoritesHandler={onFavoritesHandler}/>}

        </>

    );
};

export default Header;