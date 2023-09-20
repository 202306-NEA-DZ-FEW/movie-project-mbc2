import React from 'react'
import Image from 'next/image';
import MainLayout from '@/layouts/mainLayout';
// {
//     "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
//         "genre_ids": [
//           28,
//           80,
//           53
//         ],
//         "id": 385687,
//         "original_language": "en",
//         "original_title": "Fast X",
//         "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
//         "popularity": 3870.68,
//         "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
//         "release_date": "2023-05-17",
//         "title": "Fast X",
//         "video": false,
//         "vote_average": 7.3,
//         "vote_count": 3668
//       },

export default function MovieCard({ title, vote_average, poster_path }) {

    return (
        <div className="relative w-[30vh] h-[250px] text-transparent  hover:text-white bg-black rounded overflow-hidden shadow-md">
            <img className='object-cover'
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
            />
            <div className=''>
                <div className='relative w-full bottom-0 text-center'>
                    <div className='absolute z-40 bottom-14 right-0 left-0  '>
                        <p >{title}</p>
                        <p> | {vote_average}</p>
                    </div>
                </div>
                <div className='absolute w-full h-[250px] bottom-0 right-0 bg-gradient-to-t from-black to-transparent z-10'>
                </div>
            </div>
        </div>
    )
}
