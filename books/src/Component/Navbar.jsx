import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
    {/* Nav bar */}
      <nav className='shadow-xl shadow-yellow-500 flex justify-around items-center text-white '>
        {/* logo which also goes to the starting page */}
        <Link to='/'>
          <img className='h-16 rounded-full' src={logo} alt='logo' />
        </Link>
        {/* search bar */}
        <input
          onChange={handleSearch} value={search} className='border-2 rounded-xl text-black' type='text' placeholder=' 🔍 Search'/>
        {/* link to go to registration form */}
        <div className='border-2 hover:border-transparent hover:text-white hover:bg-yellow-400 p-2 border-yellow-500'>
          <Link to='/Form'>Register Now</Link> 
        </div>
      </nav>
    </>
  );
}
