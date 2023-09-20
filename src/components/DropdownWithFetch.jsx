import Dropdown from "@/components/Dropdown"
import { fetchApi } from "@/util/FetchApi"
import { GENRES_LIST } from "@/constants"
import { useEffect, useState } from "react"

export default function DropdownWithFetch() {
  const [genresList, setGenresList] = useState([])
  useEffect(() => {
    fetchApi(GENRES_LIST).then((genres) => setGenresList(genres.genres))
  }, [])
  return <Dropdown genresList={genresList} lable={"Movie genres"} url="genre" />
}
