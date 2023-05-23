import Statistik from "./Statistik";
import Benefits from "./Benefits";
import About from "./About";
import Courses from "./Courses";
import Testimoni from "./Testimoni";
import Faq from "./Faq";
import Register from "./Register";
import Blog from "./Blog";
import Footer from "./Footer";
import Lazyload from "react-lazyload";

export default function HomePage() {
  return (
    <>
      <div className="bg-dark-blue lg:min-h-[570px] flex items-center">
        <div className="max-w-screen-xl flex items-center mx-auto py-24">
          <div className="px-4">
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-[60px] lg:leading-[70px] mb-10 max-w-2xl">
              Bangun dan Wujudkan Cita Bersama EDUFREE
            </h1>
            <p className="text-white text-sm max-w-xl">
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secata
              online yang bertujuan untuk membantu kamu meraih cita di bidang
              teknologi
            </p>
            <div className="flex mt-10">
              <button className="bg-btn-orange hover:opacity-90 rounded-md text-sm md:text-normal py-3 px-5 lg:py-4 lg:px-12 font-bold mr-4">
                Lihat kursus
              </button>
              <button className="bg-none hover:opacity-90 text-white text-sm md:text-normal px-2 lg:px-4 flex items-center gap-2">
                Lihat Alur Belajar
                <img src="./img/right-arrow.png" alt="right arrow" width="20" />
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Lazyload>
              <img
                src="./img/homepage.png"
                alt="homepage_image"
                className="max-w-screen-sm mr-4"
              />
            </Lazyload>
          </div>
        </div>
      </div>
      <Statistik />
      <Benefits />
      <About />
      <Courses />
      <Testimoni />
      <Faq />
      <Register />
      <Blog />
      <Footer />
    </>
  );
}
