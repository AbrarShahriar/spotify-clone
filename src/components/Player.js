import React from 'react'
import Body from './Body'
import './Player.css'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useMediaQuery } from '@material-ui/core'

function Player({ spotify }) {
    const isMobile = useMediaQuery('(max-width:500px)')

    return (
        <div className='player'>
            <div className="player__body">
                {!isMobile && <Sidebar />}
                <Body spotify={spotify}/>
            </div>
            
            <Footer />
        </div>
    )
}

export default Player
