import Lazyload from 'react-lazyload'
export default function Card(props){
  const {title,image,rating,content,hours,video,students} = props;
  return (
    <>
      <div className="flex max-w-[350px] max-h-[420px] flex-col mx-auto mb-8 lg:mb-2">
        <a href="/" className="overflow-hidden rounded-t-lg">
          <Lazyload>
            <img src={`./img/${image}`} alt="card" className="rounded-t-lg flex-1 hover:scale-110 transition-all ease-in-out" />
          </Lazyload>
        </a>
        <div className="p-4 relative flex flex-col min-h-[205px]">
          <div className="bg-dark-blue rounded-2xl absolute py-1 px-4 right-2 top-0 mt-[-15px]">
            <Lazyload className='inline'>
              <img src="./img/star.png" alt="star" className="w-[18px] mr-1 inline" />
            </Lazyload>
            <span className="text-sm text-white font-semibold">{rating}</span>
          </div>
          <div className='h-full grow'>
            <a href="/" className="text-[24px] font-semibold">{title}</a>
            <p className="text-slate-400 mt-4">{content}</p>
          </div>
          <div className="flex justify-between mt-4 grow">
            <div>
              <Lazyload className='inline'>
                <img src="./img/clock.png" alt="clock" className="w-[24px] mr-2 inline" />
              </Lazyload>
              <p className="inline">{hours} Jam</p>
            </div>
            <div>
              <Lazyload className='inline'>
                <img src="./img/video.png" alt="video" className="w-[24px] mr-2 inline" />
              </Lazyload>
              <p className="inline">{video} Video</p>
            </div>
            <div>
              <Lazyload className='inline'>
                <img src="./img/students.png" alt="siswa" className="w-[24px] mr-2 inline" />
              </Lazyload>
              <p className="inline">{students} Siswa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}