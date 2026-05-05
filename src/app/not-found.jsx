
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl text-red-600'>This Page is Not Found</h2>
           <div className='mt-7'>
             <Link href={'/'}>
                <button className='btn btn-active btn-error text-white/85'>Back to Home</button>
            </Link>
           </div>
        </div>
    );
};

export default NotFoundPage;