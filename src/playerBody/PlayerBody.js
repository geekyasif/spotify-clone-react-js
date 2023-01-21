import { FavoriteOutlined, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
import SongRow from '../SongRow/SongRow';
import { useStateProviderValue } from '../StateProvider';
import './PlayerBody.css';

function PlayerBody({ spotify }) {
  const [{ user, discover_weekly }] = useStateProviderValue()
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)

  useEffect(()=> {

    let _duration = 0

    discover_weekly?.tracks.items.map((item)=>{
      _duration = _duration + item.track.duration_ms
    })

    let hours   = (_duration / (1000*60*60)) % 24;
    let minutes = (_duration / (1000*60)) % 60;

    setHours(hours)
    setMins(minutes)
  
  },[])



  console.log("this si wekekly", discover_weekly)
  return (
    <div className='playerBodyContainer'>
      <Header spotify={spotify} />

      <div className='playerBodyInfo'>
        <img className='discoverWeeklyImg' src={discover_weekly?.images[0].url} alt="" />
        <div className='playerBodyText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p className='weeklyDescription'>{discover_weekly?.description}</p>
          <p className='playerBodyTextUsernameAndTotalSongParagraph' ><span className='playerBodyTextUsername'>{user?.display_name}</span> <span className='dot'>.</span> <span className='playerBodyTextTotalSong'>{discover_weekly?.tracks.total} songs,</span> <span className='playerBodyTextDuration'>{hours.toFixed(0) + " hr and " + mins.toFixed(0) + " min"}</span></p>
        </div>
      </div>

      <div className="bodySong">
        <div className="bodyIcon">
          <PlayCircleFilled/>
          <FavoriteOutlined className='bodyIconFav'/>
          <MoreHoriz/>
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track}/>
        )) }

      </div>


    </div>
  )
}

export default PlayerBody