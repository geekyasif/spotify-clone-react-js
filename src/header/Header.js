import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStateProviderValue } from '../StateProvider'
import './Header.css'

function Header() {
    const [{user}] = useStateProviderValue()
    const [show, handleShow] = useState()

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        // return () => {
        //     window.removeEventListener("scroll")
        // }
    }, [])

    
  return (
    <div className={`headerContainer ${show && "headerContainerBlack"}`}>
        <div className='headerLeft'>
            <Search/>
            <input placeholder='Search for artist, song & more...' type="text"/>
        </div>

        <div className='headerRight'>
            <Avatar className='avatar' scr={user?.images[0]?.url}  alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header