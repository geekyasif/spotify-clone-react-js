import React from 'react'
import Footer from '../footer/Footer'
import PlayerBody from '../playerBody/PlayerBody'
import Sidebar from '../sidebar/Sidebar'
import './Player.css'

function Player({spotify}) {
  return (
    <div className="player">
        
        <div className="playerBody">

        {/* sidebar */}
        <Sidebar/>
        {/* player body  */}
        <PlayerBody spotify={spotify}/>


        </div>

        {/* footer  */}
        <Footer/>

    </div>
  )
}

export default Player