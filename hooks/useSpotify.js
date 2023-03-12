import { useEffect } from 'react';
import {signIn, useSession} from 'next-auth/react'
import SpotifyWebApi from 'spotify-web-api-node';


const spotifyApi = new SpotifyWebApi ({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
});

export default function useSpotify() {
    const { data: session, status} = useSession()

    useEffect(() =>{
        if (session){
            //if refresh access token fails direct user to signin
            if(session.error === 'RefreshAcessTokenDenied'){
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }
    },[session])

  return spotifyApi;
}
