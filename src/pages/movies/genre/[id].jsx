import React from "react"
import MoviesList from "@/components/moviesList"
import { fetcher } from "@/util/api"
import MainLayout from "@/layouts/mainLayout"
import { useRouter } from "next/router"

export default function MoviePage({ movies }) {
  const router = useRouter()
  const { name } = router.query
  return (
    <MainLayout>
      <h1 className="text-4xl mb-8">{name + " Movies:"}</h1>
      <MoviesList movies={movies} />
    </MainLayout>
  )
}
export async function getServerSideProps(context) {
  const { id } = context.query
  try {
    const movieId = parseInt(id)
    if (!isNaN(movieId)) {
      const data = await fetcher(
        `discover/movie?api_key=063e5e3006d7a06ead3459291526c522&with_genres=${id}`,
      )
      return {
        props: {
          movies: data.results,
        },
      }
    } else {
      const data = await fetcher(`movie/${id}?language=en-US&page=1`)
      return {
        props: {
          movies: data.results,
        },
      }
    }
  } catch (error) {
    console.error("Error:", error.message)

    return {
      notFound: true,
    }
  }
}
