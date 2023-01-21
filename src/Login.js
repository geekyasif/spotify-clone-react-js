import React from 'react'
import { loginUrl } from './Spotify'

function Login() {
  return (
    <div>
          <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login