import { Inter } from "next/font/google"
import MainLayout from "@/layouts/mainLayout"
import { fetchApi } from "@/util/FetchApi"
import MoviesList from "@/components/moviesList"
import { ALL_MOVIES_API } from "@/constants"

const inter = Inter({ subsets: ["latin"] })

export default function Home({ movies }) {
  return (
    <>
      <MainLayout>
        <MoviesList movies={movies} />
      </MainLayout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetchApi(ALL_MOVIES_API)
  return {
    props: {
      movies: res.results,
    },
  }
}
