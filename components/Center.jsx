import React from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {useState, useEffect} from 'react/'
import { shuffle } from 'lodash';


const colors = [
    'from-indigo-500',
    'from-green-500',
    'from-orange-500',
    'from-yellow-500',
    'from- pink-500',
    'from-purple-500',
]

export default function Center() {
    const { data: session} = useSession()
    const [color, setColor] = useState(null);
    
    useEffect (() => {
        setColor(shuffle(color).pop())
    },[])

  return (
    <div className='flex-grow'>
        <header className='absolute top-5 right-8'>
            <div 
                className='flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'
            >
                <img className = 'rounded-full w-10 h-10'src={session?.user.image} alt="" />
                <h2>{session?.user.name}</h2>
                <ChevronDownIcon className='w-5 h-5'/>
            </div>
        </header>

        <section
            className={`flex items-end space-x-7 bg-gradient-to-b to-black ${colors} h-80 padding-8`}
        >

        </section>
    </div>
  )
}
