import React from "react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-black">
        <div className="container mx-auto py-12">
          <div className="max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
            <img className="rounded-t-lg" src="/img/movie.jpg" alt="About Us" />
            <div className="mt-6">
              <h1 className="text-3xl font-semibold mb-5 mx-10">About Us</h1>
              <p className="text-gray-100 mb-2 mx-2">
                Re:Watch is a Web Application build out using API from TMDb
                database, witch you can search, browes movie information and
                actor as well, know the new released movies, and how much is
                Popular. You are very walcome to try it.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-center py-2  text-gray-500 mb-2 font-semibold">
          <p className="ms-3 mx-2">Created by</p>
          <a
            href="https://github.com/ismail-benlaredj"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Ismail
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/DigitalDeveloperAM"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Achraf
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/oualidelh"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Oualid
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/dalilia"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Dalila
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/samiraTbl"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Samira
            <img href="./imges/git.png"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
