import MoviePoster from "@/components/moviePoster"

const MoviesList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      {movies &&
        movies.map((movie) => <MoviePoster key={movie.id} movie={movie} />)}
    </div>
  )
}

export default MoviesList
