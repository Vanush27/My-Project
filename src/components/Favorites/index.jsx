import React from 'react';
import FavoriteItem from "./FavoriteItem";

import ClearIcon from '@mui/icons-material/Clear';


const Favorites = ({onFavoritesHandler}) => {

    return (
        <div id='favorites'>
            <div className="favorite-title">
                <h5>My Favorites</h5>

                <button onClick={onFavoritesHandler} className='close-favorite'>
                    <ClearIcon/>
                </button>
            </div>

            <FavoriteItem/>
        </div>
    );
};

export default Favorites;