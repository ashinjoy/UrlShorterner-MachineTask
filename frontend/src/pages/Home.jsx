
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Form from '../components/form/Form'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center items-center gap-[4rem] h-[calc(100dvh-5rem)] '>
    <div className='w-[92%]'>
    <Form />
    </div>
    <Link className='p-2 rounded-sm bg-[#1E90FF] text-white'>CLICK FOR URL ANALYTICS</Link>
    </div>
    </>
  )
} 

export default Home
