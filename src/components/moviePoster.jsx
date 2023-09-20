import Image from "next/image"
import Link from "next/link"
import { BsStarHalf } from "react-icons/bs"
import { IMAGE_URL } from "@/constants"
const genresData = [
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
]
const MoviePoster = ({ movie }) => {
  const getgenreName = (id) => {
    if (!id) return "no genre"
    const genre = genresData.find((genre) => genre.id === id)
    return genre.name.slice(0, 7) + "..."
  }
  return (
    <div className="py-3  w-64 relative  ">
      <Link href={`/movie/${movie?.id}`} className="max-w-64 h-fit ">
        <div className="border-2 border-gray-800 rounded-2xl p-1">
          <div className="rounded-2xl ">
            <Image
              className="rounded-2xl"
              src={`${IMAGE_URL + movie.poster_path}`}
              width={500}
              height={500}
              alt={movie.title}
            />
          </div>
          <div className="absolute box-border bottom-2 w-full p-2  bg-gradient-to-t from-black to-transparent">
            <div className="flex flex-col h-24  justify-end">
              <h3 className="text-xl font-semibold">{movie.title}</h3>
              <div className="flex flex-row justify-start gap-2 items-center">
                <BsStarHalf color="yellow" />
                <span>
                  {movie.vote_average && movie.vote_average.toFixed(1)}
                </span>
                <span>|</span>
                <span className="opacity-80">
                  {getgenreName(movie.genre_ids[1])}
                </span>
                <span className="opacity-80">•</span>
                <span className="opacity-80">
                  {getgenreName(movie.genre_ids[2])}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default MoviePoster
