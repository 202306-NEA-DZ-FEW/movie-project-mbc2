import React from "react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="flex items-center justify-center max-w-screen-3xl">
      <div className=" bg-black w-full mx-auto max-w-screen-xl md:items-center">
        <div className="grid grid-cols-0 gap-2 place-content-center">
          <p className="flex text-center justify-between text-slate-100 text-xl mt-6">
            Our platform is trusted by millions & features best updated movies
            all around the world.
          </p>
          <p className="flex text-center justify-between text-slate-100 text-2xl"></p>
          <p className="flex text-center justify-between ms-4 text-slate-100 text-2xl"></p>
          <p className="flex text-center justify-between text-slate-100 text-2xl"></p>
        </div>
        <div className="grid grid-cols-2 gap-4 place-content-center h-4">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4 hover:underline md:mr-6 ">
              {/* <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a> */}
              <Link href="about">About</Link>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div>
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Re:Coded-mbc2™
            </a>
            .All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
