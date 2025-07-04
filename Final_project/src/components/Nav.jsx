import React from 'react';
import { Link } from 'react-router';

const nav = () => {
  return (
    <div className='max-w-11/12 mx-auto flex flex-row justify-between items-center'>
      <div className='flex justify-between items-center p-4'>
        <h2><span className='text-fuchsia-600 font-semibold'>Medi</span><span className='text-violet-600 font-semibold'>Sync</span></h2>
      </div>
      <div className='flex justify-between items-center p-4 '>
          <ul className='gap-5'>
            <Link className='m-1 hover:text-[#007E85]' to='/Home'>Home</Link>
            <Link className='m-1 hover:text-[#007E85]' to='/Service'>Service</Link>
            <Link className='m-1 hover:text-[#007E85]' to='/Contact'>Contact-us</Link>
            <Link className='m-1 hover:text-[#007E85]' to='/Blog'>Blog</Link>
          </ul>
      </div>
      <div>
        <Link className='m-1.5'><button className='hover:bg-[#007E85] bg-[#6EAB36] text-white p-2 rounded-[10px]'>Sign-up</button></Link>
        <Link className='m-1.5'><button className='hover:bg-[#007E85] bg-[#6EAB36] text-white p-2 rounded-[10px]'>Login</button></Link>
      </div>
    </div>
  );
};

export default nav;