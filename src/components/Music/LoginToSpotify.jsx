import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ab3fa29992104aa593d2d0602e642ebc&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Login = () => {
    return (
        <div>
            <button><a href={AUTH_URL}>
            Login with Spotify    
            </a></button>
        </div>
    )
}