import React from "react"

function MovieInfo({ poster_path, title, release_date }) {
  return (
    <div
      className="
        bg-black text-gray-700
        w-60 min-h-[20rem]
        shadow-lg rounded-md overflow-hidden
    
        "
    >
      <div></div>

      <div className="flex justify-between">
        <img
          src={`https://api.themoviedb.org/3/movie/${poster_path}`}
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

export default MovieInfo
