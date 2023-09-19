import React from 'react'
import MainLayout from '@/layouts/mainLayout'
import MovieCard from '@/component/movieCard';
import Link from 'next/link';
import { fetcher } from '@/util/api';

export default function NowPlaying({ allMovies }) {
    console.log('moviesprom :', allMovies)
    // // console.log("geea3 movies :", allMovies)
    // console.log("id :", id)
    return (
        <MainLayout>
            <h2 className='text-2xl my-8 font-bold'>NOWPLAYING MOVIES</h2>
            {/* <hr className='my-4'></hr> */}
            <div className="flex flex-row flex-wrap gap-6 justify-around">

                {allMovies.results.map((movie, index) => (
                    <Link key={index} href={`/movies/${movie.id}`}>
                        <MovieCard key={index} {...movie} />
                    </Link>
                ))}
            </div>
        </MainLayout >

    )
}
export async function getServerSideProps(context) {
    const { movielist } = context.query
    const data = await fetcher(`movie/now_playing?language=en-US&page=1`);

    return {
        props: {
            allMovies: data,
        },
    }

}
