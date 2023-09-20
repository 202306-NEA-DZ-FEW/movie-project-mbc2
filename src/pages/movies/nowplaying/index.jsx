import React from "react"
import MainLayout from "@/layouts/mainLayout"
import { fetcher } from "@/util/api"
import MoviesList from "@/components/moviesList"

export default function NowPlaying({ movies }) {
  return (
    <MainLayout>
      <h3 className="text-xl my-7 font-semibold">NOWPLAYING MOVIES</h3>
      <MoviesList movies={movies} />
    </MainLayout>
  )
}
export async function getStaticProps() {
  const data = await fetcher(`movie/now_playing?language=en-US&page=1`)

  return {
    props: {
      movies: data.results,
    },
  }
}
