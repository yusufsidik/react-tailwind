import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-dark-blue'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-center px-2 py-4 lg:px-8 max-w-screen-xl mx-auto'>
        <div className='flex justify-between'>
          <div>
            <Link to="/" className='font-semibold text-white text-2xl'>[EDUFREE]</Link>
          </div>
          <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
            <button className='text-white focus:outline-none'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${!isOpen ? 'hidden' : 'flex'} lg:flex flex-col lg:flex-row pt-4 lg:pt-0`}>
          <div className='flex flex-col my-3 lg:flex-row lg:mr-4 text-white gap-6 lg:gap-8 lg:items-center'>
            <Link to="/" className='hover:text-slate-300'>HOME</Link>
            <Link to="/" className='hover:text-slate-300'>TENTANG KAMI</Link>
            <Link to="/" className='hover:text-slate-300'>KURSUS</Link>
            <Link to="/" className='hover:text-slate-300'>FAQ</Link>
            <Link to="/" className='hover:text-slate-300'>BLOG</Link>
          </div>
          <div className='text-white my-2 lg:ml-8 text-center flex items-center'>
            <Link to="/login" className='border border-white py-3 px-6 lg:px-8 rounded-md hover:text-slate-300 hover:border-slate-300'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}