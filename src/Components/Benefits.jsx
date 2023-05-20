import BenefitsItems from "./BenefitsItems"

export default function Benefits(){
  return(
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="mx-auto w-full pt-20 pb-12">
        <h1 className="text-[26px] lg:text-[38px] text-center font-semibold leading-[50px] max-w-4xl mx-auto text-dark-blue-font">Keuntungan Bergabung Dengan <br /> E-Learning EDUFREE</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-y-8 gap-x-4 lg:gap-x-5">
        <BenefitsItems 
          number="1"
          title="Kursus Gratis"
          content="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
        />
        <BenefitsItems 
          number="2"
          title="Akses Selamanya"
          content="Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru"
        />
        <BenefitsItems 
          number="3"
          title="Grup Konsultasi"
          content="Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan sesuatu pertanyaan dan kamu juga bisa membuka diskusi baru"
        />
        <BenefitsItems 
          number="4"
          title="Sertifikat dan Portfolio"
          content="Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portfolio dari project kursus yang telah diselesaikan"
        />
        <BenefitsItems 
          number="5"
          title="Belajar Lebih Terarah"
          content="Kursus menyediakan kursus dari level dasar hingga expert sehingga semua bisa belajar dengan layanan yang kami sediakan."
        />
        <BenefitsItems 
          number="6"
          title="Instruktur Berpengalaman"
          content="Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya"
        />
      </div>
    </div>
  )
}