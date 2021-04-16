import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi()

function App() {

  const [{ user, token }, dispatch] = useStateValue()

  useEffect(() => {
      const hash = getTokenFromURL()
      window.location.hash = ''
      
      const _token = hash.access_token

      if(_token) {
        dispatch({ type: 'SET_TOKEN', token: _token })

        spotify.setAccessToken(_token)

        spotify.getMe()
        .then(user => {
          console.log(user);
          dispatch({ type: 'SET_USER', user })
        })

        spotify.getUserPlaylists()
        .then(playlists => {
          dispatch({ type: 'SET_PLAYLISTS', playlists })
        })

        spotify.getPlaylist('37i9dQZEVXcIUTuhk2k0zV')
        .then(res => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: res
          })
        })
        
      }
      
  }, [])
  

  return (
    <div className="App">
      
      {/* LOGO */}
      {
        token ? <Player spotify={spotify}/> : <Login />
      }
    </div>
  );
}

export default App;
