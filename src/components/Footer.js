import React from 'react'
import './Footer.css'
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__albumCover' src="https://th.bing.com/th/id/R821c199111903f17f9a6fd32931ccc9c?rik=4ubuVS4b49loBQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_mupIVJbjvuU%2fTE8-HAcDLOI%2fAAAAAAAAFbo%2fCKJfPZTCOXQ%2fs1600%2fUsher%2b-%2bYeah%2b(Official%2bSingle%2bCover).jpg&ehk=F1mPUf08x39%2bIKGIGhHsk6aPpXfBGzQKdozSlPVdKIs%3d&risl=&pid=ImgRaw" alt="cover"/>
                <div className="footer__songInfo">
                    <span className='footer__songTitle'>Yeah!</span>
                    <br/>
                    <span className='footer__songAuthor'>Usher</span>
                </div>
            </div>

            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline fontSize='large' className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
