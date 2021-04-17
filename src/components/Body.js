import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from "../StateProvider";
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './SongRow';
import { useMediaQuery } from '@material-ui/core';


function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue()
  const isMobile = useMediaQuery('(max-width:500px)')


    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt=""/>

                <div className="body__infoText">
                    {!isMobile && <strong>PLAYLIST</strong>}

                    {!isMobile && <h2>Discover Weekly</h2>}
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite fontSize='large'/>
                    <MoreHoriz />
                </div>
                
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
