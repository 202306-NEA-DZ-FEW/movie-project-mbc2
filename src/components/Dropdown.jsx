import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { fetchApi } from "@/util/FetchApi"
import { GENRES_LIST } from "@/constants"

const Dropdown = ({ genresList, url, lable }) => {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  return (
    <div className="relative" ref={wrapperRef}>
      <button
        className=" rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        onClick={() => setOpen(!open)}
      >
        {lable}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } z-10 absolute max-h-96 overflow-y-scroll  divide-y divide-gray-100 rounded-lg shadow w-44 bg-[#000000c2]`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
          {genresList &&
            genresList.map((genre) => (
              <li key={genre.id}>
                <Link
                  href={{
                    pathname:
                      url === "genre"
                        ? `/movies/${url}/${genre.id}`
                        : "/movies/" + genre.name,
                    query: { name: genre.name },
                  }}
                  className="block px-4 py-2 hover:bg-[#494949e8] "
                >
                  {genre.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
export default Dropdown
