const API_URL = "https://api.themoviedb.org"
// ACTORS
export const SINGLE_ACTOR = "https://api.themoviedb.org/3/person/",
  MOVIES_BY_ACTOR = "/movie_credits",
  POPULAR_ACTORS =
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"

//EXTERNAL LINKS
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/",
  YOUTUBE_LINK = "https://www.youtube.com/watch?v="

//MOVIES
export const ALL_MOVIES_API =
    "https://api.themoviedb.org/3/trending/movie/week",
  MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/",
  ACTORS_BY_MOVIE = "/credits", // example : https://api.themoviedb.org/3/movie/{movie_id}/credits
  SIMILAR_MOVIES = "/similar", // example : https://api.themoviedb.org/3/movie/{movie_id}/similar
  MOVIE_VIDEO = "/videos",
  SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie?query="

// GENRES

export const GENRES_LIST =
  "https://api.themoviedb.org/3/genre/movie/list?language=en"

//MOVIES RELEASES PAGES
export const MOVIES_FILTER = [
  {
    name: "popular",
    id: 1,
  },
  {
    name: "toprated",
    id: 2,
  },
  {
    name: "upcoming",
    id: 3,
  },
  {
    name: "nowplaying",
    id: 4,
  },
]
