import React, { useEffect, useState } from 'react'
import './Footer.css'
import { PlaylistPlay, Shuffle, VolumeDown } from '@mui/icons-material'
import { SkipPrevious } from '@mui/icons-material'
import { SkipNext } from '@mui/icons-material'
import { Repeat } from '@mui/icons-material'
import { PlayCircleFilledOutlined } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'
import SpotifyPlayer from 'react-spotify-web-playback';
import { useStateProviderValue } from '../StateProvider'


function Footer() {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), ['spotify:playlist:5Mf1XEXK05P22NYWxeqn1g'])

    const [{token}] = useStateProviderValue()

    console.log("THis is token", token)
    if (!token) return null
  return (
    <div className='footer'>
        <div className='footerLeft'>

            <p>Album and Song Details</p>

        </div>

        <div className='footerCenter'>
            <Shuffle className='footerCenterShuffleIcon'/>
            <SkipPrevious  className='footerCenterSkiPrevIcon'/>
            <PlayCircleFilledOutlined fontSize='large' className='footerCenterPlayIcon'/>
            <SkipNext className='footerCenterSkipNextIcon'/>
            <Repeat className='footerCenterRepeatIcon'/>
            
        {/* <SpotifyPlayer
        styles={{
            activeColor: 'red',
            bgColor: 'black',
            color: 'white',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
            token={token}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={ ['spotify:playlist:5Mf1XEXK05P22NYWxeqn1g']}
            
        /> */}


        </div>

        <div className='footerRight'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay/>
                </Grid>
                <Grid item>
                    <VolumeDown/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>

            </Grid>

        </div>
    </div>
  )
}

export default Footer