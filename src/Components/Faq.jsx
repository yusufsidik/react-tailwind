import Accordion from "./Accordion"

export default function Faq(){
  return (
    <div>
      <div className="py-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-y-14 md:gap-y-10 max-w-screen-xl mx-auto px-4">
        <div className="text-center lg:text-start">
          <h1 className="text-3xl lg:text-[28px] text-dark-blue-font mb-4 font-bold">Frequenly Asked <br /> Questions</h1>
          <p className="text-slate-500">Masih bingung atau ragu? <br />Hubungi kami nomor +62 811 123 467</p>
        </div>
        <ul className="list-none w-full md:w-10/12 lg:w-2/3">
          <Accordion 
            number="01"
            title="Apakah kursus ini benar-benar gratis?"
            content="Kursus yang desediakan bisa diakses gratis untuk menunjang kebutuhan-kebutuhan dalam bidang kependidikan"
            addClass="pt-0"
          />
          <Accordion 
            number="02"
            title="Untuk siapa kursus ini?"
            content="Kursus ini untuk kalian yang baru memulai dari 0, karena materi yang akan diberikan dimulai dari basic sampai ke tingkat lanjut."
          />
          <Accordion 
            number="03"
            title="Apakah kursus ini bersertifikat?"
            content="Ya, kursus ini bersertifikat, yang nanti nya bisa kalian gunakan sebagai lampiran untuk melamar pekerjaan ataupun sebagai portfolio kalian."
          />
          <Accordion 
            number="04"
            title="Sampai kapan kursus ini berakhir?"
            content="Kursus ini bisa diakses selamanya, waktunya fleksibel mengkuti dengan jam waktu kalian untuk belajar di kursus ini."
          />
          <Accordion 
            number="05"
            title="Apakah ada penyaluran kerja setelah lulus?"
            content="Kami akan lakukan semaksimal mungkin hehe."
          />
        </ul>
      </div>
    </div>
  )
}