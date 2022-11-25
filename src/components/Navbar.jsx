import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { useHistory } from "react-router-dom";

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    const history = useHistory();
    const handlelogout=(e)=>{
      let path = '/'; 
      history.push(path);
    }

  return (
    <div className='w-screen h-[80px] z-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
          <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-fuchsia-400">Home</Link></li>
          <li><Link to="watermark" smooth={true} offset={-200} duration={500} className="cursor-pointer hover:text-fuchsia-400">Watermark</Link></li>
          <li><Link to="extract" smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-fuchsia-400">Extract</Link></li>
          <li><Link to="faq" smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-fuchsia-400">FAQ</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          {/* <button className='border-none bg-transparent text-fuchsia-200 mr-4'>
            Logout
          </button> */}
          <button className='px-8 py-3' onClick={handlelogout}>Logout</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 cursor-pointer hover:text-fuchsia-400 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 cursor-pointer hover:text-fuchsia-400 w-full'><Link onClick={handleClose} to="watermark" smooth={true} offset={-200} duration={500}>Watermark</Link></li>
          <li className='border-b-2 border-zinc-300 cursor-pointer hover:text-fuchsia-400 w-full'><Link onClick={handleClose} to="extract" smooth={true} offset={-50} duration={500}>Extract</Link></li>
          <li className='border-b-2 border-zinc-300 cursor-pointer hover:text-fuchsia-400 w-full'><Link onClick={handleClose} to="faq" smooth={true} offset={-100} duration={500}>FAQ</Link></li>

        <div className='flex flex-col my-4'>
            {/* <button className='bg-transparent text-fuchsia-200 px-8 py-3 mb-4'>Sign In</button> */}
            <button className='px-8 py-3 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-fuchsia-200' onClick={handlelogout}>Logout</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
