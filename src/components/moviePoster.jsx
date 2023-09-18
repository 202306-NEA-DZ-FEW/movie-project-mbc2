import Image from "next/image"
import Link from "next/link"
import { BsStarHalf } from "react-icons/bs"
import { IMAGE_URL } from "@/constant"

const MoviePoster = ({ movie }) => {
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
                <span>{movie.vote_average.toFixed(1)}</span>
                <span>|</span>
                <span className="opacity-80">Action</span>
                <span className="opacity-80">•</span>
                <span className="opacity-80">Action</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default MoviePoster
