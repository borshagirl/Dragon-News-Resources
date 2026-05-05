
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegBookmark, FaStar } from 'react-icons/fa';
import { MdOutlineShare, MdRemoveRedEye } from 'react-icons/md';

const NewsCards = ({news}) => {
    console.log(news, "News");
    return (
        <div>
          <div className="card bg-base-100 shadow-sm">
           <div className="card-body">
           {/* Author info */}
             <div className='flex justify-between items-center bg-slate-200 p-4'>
                <div className='flex gap-1 items-center'>
                   <Image
                      src={news.author?.img}
                      alt={news.author?.name}
                      height={40}
                      width={40}
                      className='rounded-full'
                   ></Image>

                   <div>
                    <h2 className='font-semibold'>{news.author?.name}</h2>
                    <p className='text-xs'>{news.author?.published_date}</p>
                   </div>
                </div>    
                <div className='flex justify-between items-center gap-2'>
                     <FaRegBookmark />
                    <MdOutlineShare className='text-lg'/>
                </div>
             </div>
             <h2 className="card-title">{news.title}</h2>

             <figure>
               <Image
               src={news.image_url}
               alt={news.title}
               width={450}
               height={450} />
             </figure>
               <p className='line-clamp-3'>{news.details}</p>

               <div className='flex justify-between items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <h2 className='flex items-center gap-2'><FaStar className='text-orange-500'/>{news.rating.number}</h2>
                    <h2 className='flex items-center gap-2'><MdRemoveRedEye className='text-lg'/>{news.total_view}</h2>
                </div>
                <Link href={`/news/${news._id}`}>
                   <button className='btn text-red-600'>Read More</button>
                </Link>
               </div>
           </div>
       </div>
     </div>
    );
};

export default NewsCards;