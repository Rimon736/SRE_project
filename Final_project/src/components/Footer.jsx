import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='max-w-11/12 mx-auto grid grid-cols-4 rounded-t-xl shadow-md '>
            <div className='col-span-2 flex flex-col justify-center items-center my-auto mx-auto p-4'>
                <h2><span className='text-fuchsia-600 font-semibold'>Medi</span><span className='text-violet-600 font-semibold'>Sync</span></h2>
                <small>Copyright © 2025 MediSync | All Rights Reserved </small>
            </div>
            <div className='col-span-1 my-auto mx-auto p-4 flex flex-col '> 
                <h2 className='font-semibold text-fuchsia-600 text-center'>Important Links</h2>
                <ul>
                    <li><Link className='p-4 text-violet-600 '>Contact-us</Link></li>
                    <li><Link className='p-4 text-violet-600 '>About-us</Link></li>
                    <li><Link className='p-4 text-violet-600 '>Culture</Link></li>
                    <li><Link className='p-4 text-violet-600 '>Report-Issue</Link></li>
                    <li><Link className='p-4 text-violet-600 '>Blog</Link></li>
                </ul>
            </div>
            <div className='col-span-1 my-auto mx-auto p-4 flex flex-col '>
                <h2 className='font-semibold text-fuchsia-600 text-center'>Follow Us</h2>
                <ul>
                    <li><Link className='p-4 text-violet-600'>Facebook</Link></li> 
                    <li><Link className='p-4 text-violet-600'>Instagram</Link></li>
                    <li><Link className='p-4 text-violet-600'>LinkeIn</Link></li>
                    <li><Link className='p-4 text-violet-600'>Reddit</Link></li>
                    <li><Link className='p-4 text-violet-600'>X</Link></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;