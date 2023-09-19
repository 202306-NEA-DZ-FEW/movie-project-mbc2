import React from 'react'
import MovieCard from '@/component/movieCard';
import { fetcher } from '@/util/api';
import MainLayout from '@/layouts/mainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function GenreMoviesPage({ moviedata }) {
    const router = useRouter();
    console.log("moviedata walidddddd:", moviedata)
    return (
        <MainLayout>
            <h2 className='text-2xl my-8 font-bold'>{router.query.prop1.toUpperCase()} MOVIES</h2>
            {/* <hr className='my-4'></hr> */}
            <div className="flex flex-row flex-wrap gap-6 justify-around">

                {moviedata.results.map((movie, index) => (
                    <Link key={index} href={`/movies/${movie.id}`}>
                        <MovieCard key={index} {...movie} />
                    </Link>
                ))}
            </div>
        </MainLayout>
    )
}
export async function getServerSideProps(context) {
    const { id } = context.query
    console.log(id)
    try {
        const movieId = parseInt(id);
        if (!isNaN(movieId)) {
            const data = await fetcher(`discover/movie?api_key=063e5e3006d7a06ead3459291526c522&with_genres=${id}`);
            return {
                props: {
                    moviedata: data,
                },
            };
        } else {
            console.log(id);
            const data = await fetcher(`movie/${id}?language=en-US&page=1`);
            return {
                props: {
                    moviedata: data,
                },
            };
        }
    } catch (error) {
        console.error('Error:', error.message);

        return {
            notFound: true,
        };
    }

}
