
"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';

const RightSideBar = () => {
    const handleGoogleSignin = async () => {
       const data = await authClient.signIn.social({
       provider: "google",
     });
     console.log(data, "data");
    }

     const handleGithubSignin = async () => {
       const data = await authClient.signIn.social({
       provider: "google",
     });
     console.log(data, "data");
    }

    return (
        <div>
            <h2 className='text-xl font-semibold mb-5'>Login With</h2>
           <div className='flex flex-col gap-2'>
            <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}><FaGoogle /> Login with Google</button>
            <button className='btn' onClick={handleGithubSignin}><FaGithub /> Login with Github</button>
           </div>
           <div>
            <h2 className='text-xl font-semibold mt-5'>Find Us On</h2>
            <div className='flex flex-col mt-3'>
                <p className='flex items-center border-2 border-gray-200 p-3 gap-2 rounded-sm'><span className='p-3 bg-gray-100 rounded-full'><FaFacebook /></span> Facebook</p>
                <p className='flex items-center border-2 border-gray-200 p-3 gap-2 rounded-sm'><span className='p-3 bg-gray-100 rounded-full'><FaTwitter /></span> Twitter</p>
                <p className='flex items-center border-2 border-gray-200 p-3 gap-2 rounded-sm'><span className='p-3 bg-gray-100 rounded-full'><FaInstagramSquare /></span> Instagram</p>
            </div>
           </div>
        </div>
    );
};

export default RightSideBar;