import React from "react"
import MainLayout from "@/layouts/mainLayout"
import MoviesList from "@/components/moviesList"
import { fetcher } from "@/util/api"

export default function TopRated({ movies }) {
  return (
    <MainLayout>
      <h3 className="text-xl my-7 font-semibold">TOPRATED MOVIES</h3>
      <MoviesList movies={movies} />
    </MainLayout>
  )
}
export async function getStaticProps() {
  const data = await fetcher(`movie/top_rated?language=en-US&page=1`)

  return {
    props: {
      movies: data.results,
    },
  }
}