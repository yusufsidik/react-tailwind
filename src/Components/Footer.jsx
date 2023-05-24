import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="mt-24 bg-dark-blue">
        <div className="max-w-screen-xl mx-auto pt-[50px] px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="pb-[50px]">
              <h1 className="font-semibold text-[24px] text-white">
                [EDUFREE]
              </h1>
              <p className="text-white">
                Bangun dan wujudkan cita bersama <br /> EDUFREE
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-x-8 gap-y-8 w-full lg:w-1/2">
              <div className="text-white flex flex-col gap-y-2">
                <h1 className="text-[20px] mb-4">Social Media</h1>
                <a href="/" className="text-[18px]">
                  Instagram
                </a>
                <a href="/" className="text-[18px]">
                  Twitter
                </a>
                <a href="/" className="text-[18px]">
                  LinkedIn
                </a>
              </div>
              <div className="text-white flex flex-col gap-y-2">
                <h1 className="text-[20px] mb-4">Program</h1>
                <a href="/" className="text-[18px]">
                  Merdeka Belajar
                </a>
                <a href="/" className="text-[18px]">
                  Pinterpreneur
                </a>
              </div>
              <div className="text-white flex flex-col gap-y-2">
                <h1 className="text-[20px] mb-4">Dukungan</h1>
                <a href="/" className="text-[18px]">
                  Tentang Kami
                </a>
                <a href="/" className="text-[18px]">
                  Ketentuan
                </a>
                <a href="/" className="text-[18px]">
                  Kebijakan Privasi
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 bg-[#FCD980] py-4 px-6 rounded-t-md w-fit mt-12">
            <div className="text-sm lg:text-[18px]">
              <div className="mb-2">Email</div>
              <div>contact@website.com</div>
            </div>
            <div className="text-sm lg:text-[18px]">
              <div className="mb-2">Telephone</div>
              <div>+62 8212 1211 331</div>
            </div>
          </div>
        </div>
      </footer>
      <nav className="max-w-screen-xl bg-white mx-auto block md:flex justify-between items-center py-6 px-4">
        <div className="font-medium text-center">
          &copy; Copyright EDUFREE 2021 - 2022
        </div>
        <div className="flex gap-4 lg:gap-8 text-sm lg:text-normal mt-4 md:mt-0 justify-center">
          <Link to="/" className="uppercase">
            Home
          </Link>
          <Link to="/" className="uppercase">
            Tentang Kami
          </Link>
          <Link to="/" className="uppercase">
            Kursus
          </Link>
          <Link to="/" className="uppercase">
            FAQ
          </Link>
          <Link to="/" className="uppercase">
            Blog
          </Link>
        </div>
      </nav>
    </>
  );
}
