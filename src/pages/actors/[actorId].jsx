import MainLayout from "@/layouts/mainLayout"
import { IMAGE_URL } from "@/constants"
import { fetchApi } from "@/util/FetchApi"
import { SINGLE_ACTOR, MOVIES_BY_ACTOR } from "@/constants"
import Link from "next/link"
import MoviesList from "@/components/moviesList"
export default function ActorId({ actorDetails, actorMovies }) {
  let gen = ""
  if (actorDetails.gender === 1) gen = "Female"
  else if (actorDetails.gender === 2) gen = "Male"

  return (
    <MainLayout>
      <div className="bg-darkblue   w-screen  absolute left-0  top-80">
        <nav className="flex  container pt-10  justify-start ">
          <div className="items-center">
            <img
              className="rounded-lg max-w-sm"
              src={IMAGE_URL + actorDetails.profile_path}
              alt={actorDetails.name}
            />
          </div>
          <div className="flex flex-col px-20">
            <h1 className="text-brightRed p-3  text-3xl">
              {actorDetails.name}
            </h1>

            <h3 className="text-white">Gender: {gen}</h3>
            <h3 className="text-white">Born: {actorDetails.birthday}</h3>
            <h3 className="text-white">
              Place of birth: {actorDetails.place_of_birth}
            </h3>
            <h3 className="text-white">
              Popularity: {actorDetails.popularity}
            </h3>
          </div>
        </nav>
        <div className="container pt-10  ">
          <h2 className="text-brightRed">Biography</h2>
          <p className="text-white">{actorDetails.biography}</p>
        </div>
        <div className="container pt-10  ">
          <h2 className="text-brightRed">Related Movies </h2>
          <div className="flex flex-wrap	">
            <MoviesList movies={actorMovies.cast} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
export async function getServerSideProps(context) {
  const { actorId } = context.query

  const actorDetails = await fetchApi(
    SINGLE_ACTOR + actorId + "?language=en-US",
  )
  const actorMovies = await fetchApi(
    SINGLE_ACTOR + actorId + MOVIES_BY_ACTOR + "?language=en-US",
  )
  return {
    props: {
      actorDetails,
      actorMovies,
    },
  }
}
