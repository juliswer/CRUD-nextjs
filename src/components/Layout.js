import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Layout = ({children}) => {

    const router = useRouter();

    return (
        <div className="h-screen bg-gray-900 text-white">
            <header className="flex bg-gray-800 px-28 py-5">
                <Link href="/">
                <a>
                    <h1 className="font-black text-lg">Task App</h1>    
                </a>
                </Link>
                <div className="flex-grow text-right">
                    <button className="bg-green-500 hover:bg-green-400 py-2 px-5 font-bold rounded-sm inline-flex items-center" onClick={() => router.push('/new')}><AiOutlinePlus className="mr-2" /> Add task</button>
                </div>
            </header>
            <main className="px-28 ">
                {children}
            </main>
        </div>
    )
}

export default Layout
