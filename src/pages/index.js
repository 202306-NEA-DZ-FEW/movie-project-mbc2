import { Inter } from "next/font/google"
import MainLayout from "@/layouts/mainLayout"
import { fetchApi } from "@/util/fetchApi"
import Movie from "@/components/moviePoster"
import MoviesList from "@/components/moviesList"
import { ALL_MOVIES_API } from "@/constant"

const inter = Inter({ subsets: ["latin"] })
const obj = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
}
export default function Home({ movies }) {
  return (
    <>
      <MainLayout>
        <MoviesList movies={movies} />
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetchApi(ALL_MOVIES_API)
  return {
    props: {
      movies: res.results,
    },
  }
}
