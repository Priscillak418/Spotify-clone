import React from 'react'
import { getProviders ,signIn } from 'next-auth/react';

export default function login({providers}) {
  return (
    <div className='flex flex-col min-h-screen items-center bg-black w-full justify-center'>
      <img className='w-52 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="" />
      {
        providers && !!Object.keys(providers).length && Object.values(providers).map((provider) =>(
          <div key = {provider.name}>
            <button 
              className='bg-[#18D860] text-white p-5 rounded-full'
              onClick={() => signIn(provider.id,{callbackUrl:'/'})}
            >
              Login with {provider.name}
            </button>
          </div>
        ))
      }
    </div>
  )
}

export async function getServerSideProps(context) {

  const providers = await getProviders(context);
  return {
    props: {
      providers
    }, // will be passed to the page component as props
  }
}