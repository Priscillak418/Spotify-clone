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
        console.log("session status:", status);
        console.log("session data:", session);
        if (session){
            console.log(session.accessToken);
            //if refresh access token fails direct user to signin
            if(session.error === 'RefreshAcessTokenDenied'){
                signIn();
            }

            spotifyApi.setAccessToken(session.accessToken)
        }
    },[session])

    // useEffect(() => {
    //     console.log("session status:", status);
    //     console.log("session data:", session);
    //     if (!session) {
    //         console.log("No session found");
    //         return;
    //     }
      
    //     const accessToken = session.accessToken;
    //     const expirationTime = session.user.accessTokenMetadata?.expirationTime;
    //     const timeUntilExpiration = expirationTime - Date.now();
      
    //     if (!expirationTime || timeUntilExpiration <= 0 || timeUntilExpiration <= 60 * 1000) {
    //       signIn();
    //       return;
    //     }
      
    //     spotifyApi.setAccessToken(accessToken);
    // }, [session]);
      

  return spotifyApi;
}
