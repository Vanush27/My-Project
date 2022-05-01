import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {data} from "../data";


const FavoriteItem = () => {

    return (

        <>

            {data.map((item) => (
                <div className="favorite-wrapper">
                    <div className="favorite-box">
                        <img src={item.image} alt="houseImg"/>
                        <div className="fav-badge">
                            Favorites
                        </div>
                    </div>

                    <div className="favorite-box">
                        <h6>{item.id}</h6>
                        <h4>{item.text}</h4>
                        <p>{item.location}</p>
                        <p className="price">{item.price}</p>
                        <button className='delete-btn'><DeleteOutlineIcon/></button>
                    </div>
                </div>
            ))}


        </>

    );
};

export default FavoriteItem;