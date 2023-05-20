import Card from "./Card"
export default function Courses(){
  return (
    <div>
      <div className="lg:flex lg:justify-between mx-auto max-w-screen-xl py-3 border-b-2 px-4 overflow-hidden">
        <div className="mb-4 text-center lg:text-start">
          <h1 className="text-[30px] lg:text-[38px] font-semibold leading-[1.5]">Rekomendasi Kursus <br /> Untuk Kamu</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <select className="border-none focus:outline-none w-[120px] py-4 cursor-pointer bg-transparent">
              <option value="" selected hidden disabled>Kategori</option>
              <option value="">UI/UX</option>
              <option value="">Frontend Developer</option>
              <option value="">Backend Developer</option>
            </select>
          </div>
          <div>
            <button className="bg-orange-300 px-8 py-4 hover:text-white hover:bg-orange-400">Lihat Semua</button>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-8 max-w-screen-xl mx-auto md:flex md:gap-3 px-4">
        <Card
          title="Dasar Pemrograman Web"
          content="Materi pembelajaran mengenai pembuatan website tingkat pemula."
          rating="4,9"
          image="course-1.jpg"
          hours="4,5"
          video="20"
          students="1.900"
        />
        <Card
          title="Digital Marketing 101"
          content="Materi mengenai startegi dan konsep marketing bagi pemula."
          rating="4,9"
          image="course-2.jpg"
          hours="6,2"
          video="32"
          students="930"
        />

        <Card
          title="Data Science Dasar"
          content="Materi pembelajaran mengenai dasar-dasar data science."
          rating="4,9"
          image="course-3.jpg"
          hours="8"
          video="46"
          students="1.043"
        />
      </div>
    </div>
  )
}