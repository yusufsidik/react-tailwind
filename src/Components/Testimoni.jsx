import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
export default function Testimoni(){
  return (
    <article className='bg-[#EEF4FA] my-16 lg:my-28'>
      <div className='py-16 flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto px-4 overflow-hidden'>
        <div className="text-center lg:text-start">
          <h1 className="text-3xl lg:text-[28px] text-dark-blue-font mb-4 font-bold">Kata Mereka Tentang <br /> Kursus EDUFREE</h1>
          <p className="text-sm text-slate-500">EDUFREE lebih dipercaya lebih dari <br /> 10.000 siswa</p>
        </div>
        <Swiper 
          className='mySwiper max-w-[340px] md:max-w-[600px] lg:max-w-[843px] mx-0'
          pagination={true}
          modules={[Pagination]}
        >
          <SwiperSlide loading="lazy">
            <div className='py-12 lg:py-0 px-6'>
              <div className='mb-5'>
                <blockquote className='text-dark-blue font-semibold text-xl'>"Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat-sangat saya rekomendasikan!!"</blockquote>
              </div>
              <div className='flex gap-3'>
                <img src="/img/user.jpg" width="52px"  alt="user" />
                <div>
                  <p className='text-[18px]'>Jenny Wilson</p>
                  <p className='text-[12px]'>Vice President</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide loading="lazy">
            <div className='py-12 lg:py-0 px-6'>
              <div className='mb-5'>
                <blockquote className='text-dark-blue font-semibold text-xl'>"Materi yang disampaikan sangat mudah dimengerti, selain mempelajari teori kita juga diberikan task-task untuk kita dapat berlatih. Cocok untuk beginner."</blockquote>
              </div>
              <div className='flex gap-3'>
                <img src="/img/user.jpg" width="52"  alt="user" />
                <div>
                  <p className='text-[18px]'>Alice Wonder</p>
                  <p className='text-[12px]'>Staff President</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide loading="lazy">
            <div className='py-12 lg:py-0 px-6'>
              <div className='mb-5'>
                <blockquote className='text-dark-blue font-semibold text-xl'>"Cocok untuk pemula, banyak materi yang dipelajari, latihan-latihan juga membuat kita jadi lebih paham, mentor yang sangat baik dalam menyampaikan materi. The best !! "</blockquote>
              </div>
              <div className='flex gap-3'>
                <img src="/img/user.jpg" width="52"  alt="user"/>
                <div>
                  <p className='text-[18px]'>Mariana Cross</p>
                  <p className='text-[12px]'>Staff Admin</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  )
}