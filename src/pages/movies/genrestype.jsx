import React from 'react'
import MainLayout from '@/layouts/mainLayout'
import MovieCard from '@/component/movieCard';
import Link from 'next/link';
import { fetcher } from '@/util/api';
import { useRouter } from 'next/router';

export default function GenresTypes({ genres }) {
    console.log('moviesprom :', genres)
    console.log("genre name", genres.genres[0].name)
    const router = useRouter();

    // Define the props you want to send
    // const customProps = {
    //     prop1: genres.genres[0].name,
    // };

    return (
        <MainLayout>
            <hr className='my-4'></hr>
            <div className="flex flex-row flex-wrap gap-3 justify-around">

                {genres.genres.map((genre, index) => {
                    const customProps = {
                        prop1: genre.name,
                    };

                    return (
                        <Link key={index} href={{
                            pathname: `/geners/${genre.id}`,
                            query: customProps,
                        }}>
                            <h2>{genre.id} and {genre.name}</h2>
                        </Link>
                    );
                })}
            </div>
        </MainLayout >

    )
}
export async function getStaticProps() {

    const data = await fetcher(`genre/movie/list?language=en`);

    return {
        props: {
            genres: data,
        },
    }

}
