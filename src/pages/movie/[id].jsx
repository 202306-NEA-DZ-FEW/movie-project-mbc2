import {
  MOVIE_DETAILS,
  IMAGE_URL,
  ACTORS_BY_MOVIE,
  SIMILAR_MOVIES,
  MOVIE_VIDEO,
  YOUTUBE_LINK,
} from "@/constants"
import { fetchApi } from "@/util/FetchApi"
import MainLayout from "@/layouts/mainLayout"
import Image from "next/image"
import { BsStarHalf } from "react-icons/bs"
import Link from "next/link"
import MoviesList from "@/components/moviesList"

const MovieDetails = ({ movie, actors, similarMovies, movieVideoId }) => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-1/3  p-3 box-border border border-gray-800">
            <Image
              src={`${IMAGE_URL + movie.poster_path}`}
              width={500}
              height={500}
              alt={movie.title}
            />
          </div>
          <div className="flex flex-col w-2/3 pl-8 box-border">
            <div className="flex flex-row items-center w-fit max-w-full text-3xl gap-3">
              <h2 className=" font-bold">{movie.title}</h2>
              <span>|</span>
              <span className="flex flex-row items-center">
                <BsStarHalf color="yellow" />
                {movie.vote_average && movie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="flex flex-row text-lg gap-2">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="text-gray-400">
                  {genre.name + " •"}
                </span>
              ))}
            </div>
            <div className="mt-6 text-lg">
              <p>{movie.overview}</p>
            </div>
            <div className="flex justify-center mt-4">
              <Link
                href={YOUTUBE_LINK + movieVideoId}
                target="_blanck"
                className="mx-auto my-5 w-fit text-xl px-12 py-3 rounded-lg bg-red-600 "
              >
                Watch Trailer
              </Link>
            </div>
            <hr className="border-gray-800" />
            <p className="text-2xl">Actors</p>
            <div className="flex flex-row mt-4 gap-3">
              {actors.map((actor) => (
                <Link href={`/actors/${actor.id}`} key={actor.id}>
                  <div className=" w-36 relative box-border">
                    <Image
                      src={`${IMAGE_URL + actor.profile_path}`}
                      width={500}
                      height={500}
                      alt={actor.name}
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-0 box-border w-full h-3/4 bg-gradient-to-t from-black to-transparent">
                      <div className="relative flex flex-col justify-end ite box-border w-full h-full pl-4 ">
                        <h4 className="text-xl font-semibold text-center">
                          {actor.name}{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-3xl mb-8">You may aslo like:</p>
          <MoviesList movies={similarMovies} />
        </div>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps({ params }) {
  const { id } = params
  const movie = await fetchApi(MOVIE_DETAILS + id)
  const actors = await fetchApi(MOVIE_DETAILS + id + ACTORS_BY_MOVIE)
  const similarMovies = await fetchApi(MOVIE_DETAILS + id + SIMILAR_MOVIES)
  const movieVideo = await fetchApi(MOVIE_DETAILS + id + MOVIE_VIDEO)
  // const movieVideoId = movieVideo.results[0]?.site == "YouTube" ? movieVideo.results[0].key : movieVideo.results[1].key
  const movieVideoId = movieVideo.results[1]?.key || ""
  return {
    props: {
      movie,
      actors: actors.cast.slice(0, 5),
      similarMovies: similarMovies.results.slice(0, 8),
      movieVideoId,
    },

    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const paths = ["/movie/55"]
  return { paths, fallback: "blocking" }
}

export default MovieDetails
