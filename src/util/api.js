export async function fetcher(apiRoute) {
  const url = "https://api.themoviedb.org/3/" + apiRoute
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjNlNWUzMDA2ZDdhMDZlYWQzNDU5MjkxNTI2YzUyMiIsInN1YiI6IjY1MDQzMzI5NmEyMjI3MDEzNzJlZWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPi94OH9K-txlJdxtOrL-s_FMfLaZP-leFYY1_qbw1o",
    },
  }
  const resp = await fetch(url, options)
  const data = await resp.json()
  return data
}
