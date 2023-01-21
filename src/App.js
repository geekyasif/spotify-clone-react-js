import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './player/Player';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider';


const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{user, playlist}, dispatch] = useStateProviderValue();

  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token)

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.getMe().then(user => {
        // console.log("this is user", user)
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlist
        })
      })
    }

    spotify.getPlaylist('5Mf1XEXK05P22NYWxeqn1g').then( (playlist) => {

      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly : playlist
      })

    })
  }, [])


  console.log("this is my user", user)
  console.log("My playlist", playlist)



  return (
    <div className="App">
      {

        token ? ( <Player spotify={spotify}/>) : ( <Login/>)

      }
      
    </div>
  );
}

export default App;
