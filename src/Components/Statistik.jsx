export default function Statistik(){
  return (
    <div className="bg-[#EEF4FA]">
      <div className="px-4 py-10 lg:py-16 lg:flex lg:justify-center lg:gap-6">
        <div className="flex justify-center">
          <div className="mx-4 lg:mx-2">
            <h1 className="text-dark-blue-font font-semibold text-[24px] lg:text-[32px]">21.000+</h1>
            <span className="text-slate-500">Siswa terdaftar</span>
          </div>
          <div className="mx-4 lg:mx-2">
            <h1 className="text-dark-blue-font font-semibold text-[24px] lg:text-[32px]">100+</h1>
            <span className="text-slate-500">Instruktur Ahli</span>
          </div>
          <div className="mx-4 lg:mx-2">
            <h1 className="text-dark-blue-font font-semibold text-[24px] lg:text-[32px]">150+</h1>
            <span className="text-slate-500">Kursus Gratis</span>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 flex flex-wrap gap-x-8 lg:gap-x-4 gap-y-2 justify-center">
          <div className="flex items-center lg:items-end">
            <img src="./img/lorem.png" alt="lorem" className="w-[24px] lg:w-[28px] mr-2 lg:mb-1" />
            <h1 className="font-bold text-[20px] lg:text-[24px]">LOREM</h1>
          </div>
          <div className="flex items-center lg:items-end">
            <img src="./img/ditlance.png" alt="lorem" className="w-[24px] lg:w-[28px] mr-2 lg:mb-1" />
            <h1 className="font-bold text-[20px] lg:text-[24px]">DITLANCE</h1>
          </div>
          <div className="flex items-center lg:items-end">
            <img src="./img/owthest.png" alt="lorem" className="w-[24px] lg:w-[28px] mr-2 lg:mb-1" />
            <h1 className="font-bold text-[20px] lg:text-[24px]">OWTHEST</h1>
          </div>
          <div className="flex items-center lg:items-end">
            <img src="./img/neovasi.png" alt="lorem" className="w-[24px] lg:w-[28px] mr-2 lg:mb-1" />
            <h1 className="font-bold text-[20px] lg:text-[24px]">NEOVASI</h1>
          </div>
          <div className="flex items-center lg:items-end">
            <img src="./img/onago.png" alt="lorem" className="w-[24px] lg:w-[28px] mr-2 lg:mb-1" />
            <h1 className="font-bold text-[20px] lg:text-[24px]">ONAGO</h1>
          </div>
        </div>
      </div>
    </div>
  )
}