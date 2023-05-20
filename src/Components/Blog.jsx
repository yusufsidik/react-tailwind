import BlogCard from "./BlogCard"
export default function Blog(){
  return (
    <section className="py-24 lg:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex justify-between items-center">
          <h1 className="text-[22px] md:text-[30px] lg:text-[38px] font-medium">Blog, Berita dan Event</h1>
          <a href="/" className="bg-transparent text-slate-700 text-[16px] hover:underline hover:text-slate-600">
            <span className="inline mr-3">
              Lihat Semua
            </span>
            <img src="./img/right-arrow.svg" className="inline" alt="->" width="20px" />
          </a>
        </div>
        <div className="py-8 flex flex-wrap justify-evenly gap-x-3 mx-auto">
          <BlogCard 
            image="blog-1.jpg" 
            date="19 Jan 2023"
            title="Cara Mudah Untuk Belajar Programming - EDUFREE" 
            content="Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun." 
          />
          <BlogCard 
            image="blog-2.jpg" 
            date="20 Jan 2023"
            title="Tips Membuat Website Landing Page Business - EDUFREE" 
            content="Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis membuat..." 
          />
          <BlogCard 
            image="blog-3.jpg" 
            date="21 Jan 2023"
            title="Cara Instalasi Wordpress Untuk Pemula - EDUFREE" 
            content="Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuat nya dengan..." 
          />
        </div>
      </div>
    </section>
  )
}