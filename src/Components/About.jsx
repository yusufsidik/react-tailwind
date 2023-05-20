import Lazyload from 'react-lazyload'

function About() {
  return (
    <section className="my-[80px]">
      <div className="max-w-[1280px] text-center lg:text-start flex flex-col lg:flex-row lg:justify-between items-center mx-auto overflow-hidden px-4">
        <div className="mb-12 lg:mb-0 max-w-3xl">
          <h2 className="text-[18px] mb-4">Tentang Kami</h2>
          <h1 className="text-[26px] lg:text-[38px] mb-4 font-bold lg:leading-[1.2] max-w-[624px]">EDUFREE Layanan <br className="hidden md:block" /> E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h1>
          <p className="text-slate-400 text-[16px] max-w-[624px]">Edufree diharapkan bisa menjadi layanan yang bermanfaat bagi kedepannya dalam bidang pendidikan.</p>
        </div>
        <Lazyload>
          <img src="./img/about-us.jpg" alt="" className="max-w-[350px] lg:max-w-[575px] rounded-md" />
        </Lazyload>
      </div>
    </section>
  );
}

export default About;
