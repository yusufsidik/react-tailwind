import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="bg-dark-blue min-h-screen">
      <div className="lg:flex max-w-screen-2xl mx-auto">
        <div className="text-white w-1/2 hidden lg:block pl-[75px] py-[80px] relative overflow-hidden">
          <img
            src="./img/bg-1.png"
            alt="hero"
            className="absolute bottom-0 right-0 object-fill z-1"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark-blue opacity-40 z-2"></div>
          <div className="flex flex-col justify-center relative z-10">
            <div className="mb-4 text-[42px] font-semibold">
              <h1 className="mb-4">Selangkah Lebih</h1>
              <h1 className="mb-4">Dekat Dengan</h1>
              <h1 className="mb-4">Impianmu</h1>
            </div>
            <div className="relative z-10">
              <p>
                Sebuah layanan E-Learning gratis yang siap <br /> membantu
                menjadi seorang ahli
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:w-1/2 w-full py-[80px]">
          <div className="w-2/3 mx-auto">
            <h1 className="text-[28px] font-semibold text-white mb-4">Login</h1>
            <p className="text-sm text-white">
              Persiapkan diri untuk masa depan yang penuh dengan bintang
            </p>
          </div>
          <div className="w-2/3 mx-auto my-8 lg:my-14">
            <div>
              <input
                type="text"
                className="border border-slate-600 text-white bg-transparent rounded-md px-6 py-4  w-full mb-6"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="border border-slate-600 text-white bg-transparent rounded-md px-6 py-4  w-full mb-6"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="inline mr-4 border border-slate-600 rounded-md"
              />
              <span className="text-slate-600">simpan info masuk</span>
            </div>
            <div className="mt-6">
              <button className="bg-btn-orange w-full rounded-md py-4 font-bold tracking-widest">
                MASUK
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="text-white">
                Belum punya akun? &nbsp;
                <Link to="/register" className="underline">
                  Daftar
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
