import React, { useContext } from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { useStateProviderValue } from '../StateProvider';
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
    const [{playlist}] = useStateProviderValue()

  return (
    <div className='sidebar'>
        <img 
        className='sidebarLogo'
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
        <SidebarOption Icon={HomeIcon}  title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        {/* <SidebarOption Icon={LibraryMusicIcon} title="Library"/> */}
        <br />
        <div>
            <p className='playlistTitle'>Playlist</p>
            {
                playlist?.items?.map((playlist) => (
                    <SidebarOption key={playlist.id} title={playlist.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar