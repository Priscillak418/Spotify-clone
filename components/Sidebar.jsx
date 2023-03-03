import React from 'react'
import {HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon, RssIcon} from '@heroicons/react/24/outline'
import { signOut,useSession } from 'next-auth/react'


function Sidebar() {
    const { data: session, status } = useSession()

    console.log(session);
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
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
        <p className='cursor-pointer hover:text-white'>playlist</p>
        <p className='cursor-pointer hover:text-white'>playlist</p>
        <p className='cursor-pointer hover:text-white'>playlist</p>
        <p className='cursor-pointer hover:text-white'>playlist</p>
        <p className='cursor-pointer hover:text-white'>playlist</p>
        <p className='cursor-pointer hover:text-white'>playlist</p>
        <p className='cursor-pointer hover:text-white'>playlist</p>
    </div>
  )
}

export default Sidebar

