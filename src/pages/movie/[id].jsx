import {
  MOVIE_DETAILS,
  IMAGE_URL,
  ACTORS_BY_MOVIE,
  SIMILAR_MOVIES,
  MOVIE_VIDEO,
  YOUTUBE_LINK,
} from "@/constant"
import { fetchApi } from "@/util/fetchApi"
import MainLayout from "@/layouts/mainLayout"
import Image from "next/image"
import { BsStarHalf } from "react-icons/bs"
import Link from "next/link"
import MoviesList from "@/components/moviesList"
let movie1 = {
  adult: false,
  backdrop_path: "/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg",
  belongs_to_collection: null,
  budget: 45000000,
  genres: [
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 27,
      name: "Horror",
    },
  ],
  homepage: "https://www.demetermovie.com",
  id: 635910,
  imdb_id: "tt1001520",
  original_language: "en",
  original_title: "The Last Voyage of the Demeter",
  overview:
    "The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.",
  popularity: 637.297,
  poster_path: "/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg",
  production_companies: [
    {
      id: 11317,
      logo_path: "/hMboqqmeILXFeOJjuCsn3FvCIT3.png",
      name: "Phoenix Pictures",
      origin_country: "US",
    },
    {
      id: 7,
      logo_path: "/vru2SssLX3FPhnKZGtYw00pVIS9.png",
      name: "DreamWorks Pictures",
      origin_country: "US",
    },
    {
      id: 205662,
      logo_path: "/kr2xlGwzYfKgpqBt5GT8IXIpyW1.png",
      name: "Wise Owl Media",
      origin_country: "US",
    },
    {
      id: 7294,
      logo_path: "/kK4PRgceWp9KNrycD8xx8seWxYU.png",
      name: "Reliance Entertainment",
      origin_country: "IN",
    },
    {
      id: 264,
      logo_path: "/fA90qwUKgPhMONqtwY60GaHRyrW.png",
      name: "Studio Babelsberg",
      origin_country: "DE",
    },
    {
      id: 206581,
      logo_path: null,
      name: "StoryWorks Productions",
      origin_country: "GB",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "DE",
      name: "Germany",
    },
    {
      iso_3166_1: "IN",
      name: "India",
    },
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2023-08-09",
  revenue: 21576744,
  runtime: 119,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Russian",
      iso_639_1: "ru",
      name: "Pусский",
    },
  ],
  status: "Released",
  tagline: "The legend of Dracula is born.",
  title: "The Last Voyage of the Demeter",
  video: false,
  vote_average: 7.355,
  vote_count: 597,
}
const actors1 = [
  {
    adult: false,
    gender: 2,
    id: 1154054,
    known_for_department: "Acting",
    name: "Corey Hawkins",
    original_name: "Corey Hawkins",
    popularity: 22.569,
    profile_path: "/habqxQgt2ouTrrrjpbTfL6YVH7C.jpg",
    cast_id: 8,
    character: "Clemens",
    credit_id: "6012207fa6ddcb003eb3091f",
    order: 0,
  },
  {
    adult: false,
    gender: 1,
    id: 1323109,
    known_for_department: "Acting",
    name: "Aisling Franciosi",
    original_name: "Aisling Franciosi",
    popularity: 17.402,
    profile_path: "/g6qewxM4EEg02HUTLUw9KGkLdNj.jpg",
    cast_id: 11,
    character: "Anna",
    credit_id: "60dcdee1d95420002b5c0ef6",
    order: 1,
  },
  {
    adult: false,
    gender: 2,
    id: 83854,
    known_for_department: "Acting",
    name: "David Dastmalchian",
    original_name: "David Dastmalchian",
    popularity: 39.263,
    profile_path: "/o9oOnTUbsFVYzifDZDdwrsAidy8.jpg",
    cast_id: 9,
    character: "Wojchek",
    credit_id: "60dcded63af929005c5400a1",
    order: 2,
  },
  {
    adult: false,
    gender: 2,
    id: 111090,
    known_for_department: "Acting",
    name: "Javier Botet",
    original_name: "Javier Botet",
    popularity: 9.862,
    profile_path: "/nuVbt1oreUUPPR0MhKKL7y6i9Dt.jpg",
    cast_id: 12,
    character: "Dracula / Nosferatu",
    credit_id: "60dcdeee992fe60074a68216",
    order: 3,
  },
  {
    adult: false,
    gender: 2,
    id: 15498,
    known_for_department: "Acting",
    name: "Liam Cunningham",
    original_name: "Liam Cunningham",
    popularity: 22.831,
    profile_path: "/ljmFT9zYqh4k2bmEcNU6rxoE7fW.jpg",
    cast_id: 10,
    character: "Captain Eliot",
    credit_id: "60dcdedb5690b5005e53054f",
    order: 4,
  },
  {
    adult: false,
    gender: 2,
    id: 1656685,
    known_for_department: "Acting",
    name: "Chris Walley",
    original_name: "Chris Walley",
    popularity: 6.036,
    profile_path: "/qASA1oFOwEvL7epg0HZkPE4SRwc.jpg",
    cast_id: 18,
    character: "Abrams",
    credit_id: "60dcdf21976e4800477aa270",
    order: 5,
  },
  {
    adult: false,
    gender: 2,
    id: 1224010,
    known_for_department: "Acting",
    name: "Jon Jon Briones",
    original_name: "Jon Jon Briones",
    popularity: 11.698,
    profile_path: "/rMLbpS7OgWcrDMKcJxrfk54Lm56.jpg",
    cast_id: 13,
    character: "Joseph",
    credit_id: "60dcdef6ef9d72007e0745f7",
    order: 6,
  },
  {
    adult: false,
    gender: 2,
    id: 80507,
    known_for_department: "Acting",
    name: "Stefan Kapičić",
    original_name: "Stefan Kapičić",
    popularity: 4.628,
    profile_path: "/6BLiyw6Ibt57C2aDxfrbHsHtczf.jpg",
    cast_id: 14,
    character: "Olgaren",
    credit_id: "60dcdefe9979d2005d3cdf98",
    order: 7,
  },
  {
    adult: false,
    gender: 2,
    id: 1291166,
    known_for_department: "Acting",
    name: "Martin Furulund",
    original_name: "Martin Furulund",
    popularity: 1.124,
    profile_path: "/6zGIHDbSMCITEmpmXi3JX5171Gh.jpg",
    cast_id: 17,
    character: "Larsen",
    credit_id: "60dcdf1b7e403d007fdf135c",
    order: 8,
  },
  {
    adult: false,
    gender: 2,
    id: 1238110,
    known_for_department: "Acting",
    name: "Nikolai Nikolaeff",
    original_name: "Nikolai Nikolaeff",
    popularity: 7.777,
    profile_path: "/nNXhasub1J9IikQx53oKgnyEBYH.jpg",
    cast_id: 15,
    character: "Petrofsky",
    credit_id: "60dcdf10976e4800250ef404",
    order: 9,
  },
  {
    adult: false,
    gender: 2,
    id: 1945369,
    known_for_department: "Acting",
    name: "Woody Norman",
    original_name: "Woody Norman",
    popularity: 14.206,
    profile_path: "/tAUT5x2RjxOOSmmaT7klf3G0sOx.jpg",
    cast_id: 16,
    character: "Toby",
    credit_id: "60dcdf15b458b80046ca7eb0",
    order: 10,
  },
  {
    adult: false,
    gender: 2,
    id: 1715223,
    known_for_department: "Acting",
    name: "Graham Turner",
    original_name: "Graham Turner",
    popularity: 2.254,
    profile_path: null,
    cast_id: 25,
    character: "Constable",
    credit_id: "6274e46d5800c479b6d48362",
    order: 11,
  },
  {
    adult: false,
    gender: 2,
    id: 1476138,
    known_for_department: "Acting",
    name: "Andy Murray",
    original_name: "Andy Murray",
    popularity: 3.43,
    profile_path: "/dDV0e7WtrzoVT1nPYNEiGDvbw54.jpg",
    cast_id: 92,
    character: "Deputy Fisher",
    credit_id: "64e3ab72e0ca7f01006f430d",
    order: 12,
  },
  {
    adult: false,
    gender: 2,
    id: 1803376,
    known_for_department: "Acting",
    name: "Nicolo Pasetti",
    original_name: "Nicolo Pasetti",
    popularity: 3.853,
    profile_path: "/frDjCKXnuiVp3EnOYIIj2FNf3nI.jpg",
    cast_id: 23,
    character: "Deputy Hirsch",
    credit_id: "6274e4465800c479b6d4830f",
    order: 13,
  },
  {
    adult: false,
    gender: 0,
    id: 2810585,
    known_for_department: "Acting",
    name: "Christopher York",
    original_name: "Christopher York",
    popularity: 1.244,
    profile_path: null,
    cast_id: 27,
    character: "Fletcher - Whitby",
    credit_id: "6274e49ec56d2d5b66d3af1e",
    order: 14,
  },
  {
    adult: false,
    gender: 0,
    id: 4227135,
    known_for_department: "Acting",
    name: "Vladimir Cabak",
    original_name: "Vladimir Cabak",
    popularity: 1.214,
    profile_path: null,
    cast_id: 94,
    character: "Harbour Master",
    credit_id: "64e3ac175258ae00add2733c",
    order: 15,
  },
  {
    adult: false,
    gender: 2,
    id: 2210243,
    known_for_department: "Acting",
    name: "Rudolf Danielewicz",
    original_name: "Rudolf Danielewicz",
    popularity: 0.6,
    profile_path: null,
    cast_id: 95,
    character: "Old Romani Wiseman",
    credit_id: "64e3ac31c613ce012cc2d8ec",
    order: 16,
  },
  {
    adult: false,
    gender: 2,
    id: 234767,
    known_for_department: "Acting",
    name: "Noureddine Farihi",
    original_name: "Noureddine Farihi",
    popularity: 3.66,
    profile_path: "/7Q2VVUwIkLk697Jo4b08qbICeZF.jpg",
    cast_id: 80,
    character: "One-Eyed Sailor",
    credit_id: "64bc1c0fc3aa3f00c6af8b70",
    order: 17,
  },
  {
    adult: false,
    gender: 2,
    id: 121549,
    known_for_department: "Acting",
    name: "Malcolm Galea",
    original_name: "Malcolm Galea",
    popularity: 2.268,
    profile_path: "/acMGIXcRvgUkXG1ErIvQHL4brSD.jpg",
    cast_id: 96,
    character: "Sailor #1 - Card Game",
    credit_id: "64e3ac671feac1011b2aafaa",
    order: 18,
  },
  {
    adult: false,
    gender: 2,
    id: 1229334,
    known_for_department: "Acting",
    name: "Adam Shaw",
    original_name: "Adam Shaw",
    popularity: 2.805,
    profile_path: "/z64T9K6vic4oK3PdMMCWvDs8jRJ.jpg",
    cast_id: 24,
    character: "Lightkeeper",
    credit_id: "6274e45bb6cff1168e4161af",
    order: 19,
  },
  {
    adult: false,
    gender: 0,
    id: 4227129,
    known_for_department: "Acting",
    name: "Jack Doggart",
    original_name: "Jack Doggart",
    popularity: 0.6,
    profile_path: null,
    cast_id: 93,
    character: "Son of Lightkeeper",
    credit_id: "64e3abf3c9054f00ac782036",
    order: 20,
  },
  {
    adult: false,
    gender: 0,
    id: 1957570,
    known_for_department: "Acting",
    name: "Joe Depasquale",
    original_name: "Joe Depasquale",
    popularity: 0.94,
    profile_path: null,
    cast_id: 97,
    character: "Sailor #2 - Card Game",
    credit_id: "64e3ac82c613ce010b8a916e",
    order: 21,
  },
  {
    adult: false,
    gender: 1,
    id: 1089519,
    known_for_department: "Acting",
    name: "Sally Reeve",
    original_name: "Sally Reeve",
    popularity: 1.348,
    profile_path: "/th07Oczvdkb2wJSsbPoDnJ9LmOs.jpg",
    cast_id: 26,
    character: "Barmaid",
    credit_id: "6274e48929c62639cd72d37a",
    order: 22,
  },
]
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
                {movie.vote_average.toFixed(1)}
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
                <Link href={`/actor/${actor.id}`} key={actor.id}>
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
