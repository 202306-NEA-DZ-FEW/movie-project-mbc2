import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"

export default function MainLayout({ children }) {
  return (
    <div className="container">
      <section className="box-border h-[80vh]">
        <div
          className="-z-10 w-screen h-[80vh]  absolute left-0 bg-[url('/img/movie.jpg')] bg-[center_center] 
                bg-[length:120%_140%] bg-no-repeat"
        >
          <div className="relative w-full h-full ">
            <div className="w-full h-32  absolute top-0  bg-gradient-to-b from-black to-transparent"></div>
            <div className="w-full h-32  absolute bottom-0  bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <Navbar />
      </section>
      <main className="py-10">{children}</main>
      <footer>
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Re:watch</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Re:watch</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Re:watch</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  )
}
