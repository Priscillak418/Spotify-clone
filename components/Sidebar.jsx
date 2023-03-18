import React from 'react'
import {useState, useEffect} from 'react'
import {HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon, RssIcon} from '@heroicons/react/24/outline'
import { signOut,useSession } from 'next-auth/react'
import useSpotify from '@/hooks/useSpotify';


function Sidebar() {
    const spotifyApi = useSpotify();
    
    const { data: session, status } = useSession()
    const [playlists, setPlaylists] = useState([]);
    const [playlistId, setPlaylistId] = useState(null);

    console.log('You picked playlist >>>', playlistId);
    
    useEffect (() => {
        if (spotifyApi.getAccessToken()){
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items);
            })
        }
    },[session, spotifyApi]);

    console.log(playlists);

    // useEffect(() => {
    //     const fetchPlaylists = async () => {
    //       try {
    //         const data = await spotifyApi.getUserPlaylists();
    //         setPlaylists(data.body.items);
    //         console.log(playlists);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
      
    //     if (spotifyApi.getAccessToken()) {
    //       fetchPlaylists();
    //     }
    //   }, [session, spotifyApi]);
      

    
    //console.log(session);
  return (
    <>
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen'>
            <div className ='space-y-4'>
            <button 
                className='flex items-center space-x-2 hover:text-white'
                onClick={() =>signOut()}
                >
                <p>Log out</p>
            </button> 
            <button className='flex items-center space-x-2 hover:text-white'>
                <HomeIcon className='h-5 w-5' />
                <p>Home</p>
            </button> 
            <button className='flex items-center space-x-2 hover:text-white'>
                <MagnifyingGlassIcon className='h-5 w-5' />
                <p>Search</p>
            </button> 
            <button className='flex items-center space-x-2 hover:text-white'>
                <BuildingLibraryIcon className='h-5 w-5' />
                <p>Library</p>
            </button> 
            <hr className='border-t-[0.1px] border-gray-900'/>
            <button className='flex items-center space-x-2 hover:text-white'>
                <PlusCircleIcon className='h-5 w-5' />
                <p>Create playlists</p>
            </button> 
            <button className='flex items-center space-x-2 hover:text-white'>
                <HeartIcon className='h-5 w-5' />
                <p>Liked songs</p>
            </button> 
            <button className='flex items-center space-x-2 hover:text-white'>
                <RssIcon className='h-5 w-5' />
                <p>My episodes</p>
            </button> 
            <hr className='border-t-[0.1px] border-gray-900'/>
            </div>
            <hr className='border-t-[0.1px] border-gray-900'/>
            {/* playlists */}
            <div className=''>
            {playlists.map((playlist) => (
                <p 
                    key= {playlist.id} 
                    className='cursor-pointer hover:text-white'
                    onClick={() => setPlaylistId(playlist.id)}
                >
                    {playlist.name}
                </p>
            ))}
            </div>
        </div>
    </>
  )
}

export default Sidebar

