import React from "react"
import MainLayout from "@/layouts/mainLayout"
import MoviesList from "@/components/moviesList"
import { fetcher } from "@/util/api"

export default function Popular({ movies }) {
  return (
    <MainLayout>
      <h3 className="text-xl my-7 font-semibold">POPULAR MOVIES</h3>
      <MoviesList movies={movies} />
    </MainLayout>
  )
}
export async function getStaticProps() {
  const data = await fetcher(`movie/popular?language=en-US&page=1`)

  return {
    props: {
      movies: data.results,
    },
  }
}