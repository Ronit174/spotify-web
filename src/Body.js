import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{on_repeat}, dispatch]= useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={on_repeat?.images[0]?.url} alt="" />
                <div className="body_infotext">

                    <strong>PLAYLIST</strong>
                    <h2>On Repeat</h2>
                    <p>{on_repeat?.description}</p>
            </div>        

                </div>
                <div className="body_songs">
                    <div className="body_icons">
                        <PlayCircleFilledIcon className="body_shuffle" />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon />
                    </div>
                    {on_repeat?.tracks.items.map(item => (
                        <SongRow track={item.track} />
                    ))}

                </div>

            
            
        </div>
    )
}

export default Body;
