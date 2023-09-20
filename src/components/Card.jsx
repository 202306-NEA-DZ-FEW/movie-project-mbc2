import React from "react"
import movieList from "./moviesList"

const Card = ({ title, poster_path, release_date, id }) => {
  return (
    <div
      className="
      bg-gray-950 text-gray-700
    w-60 min-h-[20rem]
    shadow-lg rounded-md overflow-hidden

    "
    >
      <div className="flex justify-between">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        ></img>
      </div>

      <div
        className="
      flex justify-center  text-slate-100
      font-semibold text-2xl
      overflow-ellipsis overflow-hidden whitespace-nowrap
      

      "
      >
        {title}
      </div>

      <div
        className="
      flex justify-center text-slate-100
      font-semibold
      tracking-wider
      "
      >
        {release_date}
      </div>

      <div
        className="
      flex justify-center text-slate-100
      font-semibold
      tracking-wider
      "
      >
        {/* {id} */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY5NGU0YWVhMGQ0MGZmOWNmYjQ5NzJmOWQzYmJmYyIsInN1YiI6IjY1MDM1ZmM3NjNhYWQyMDBlMTJjYTRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bB3j5OZBoJsZvKOJws5XQZT9zZvFvc1jpw8tnmmUwkQ",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      movieList: data,
    },
  }
}

export default Card
