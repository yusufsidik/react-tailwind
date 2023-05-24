import Lazyload from "react-lazyload";

export default function BlogCard(props) {
  const { image, date, title, content } = props;
  return (
    <div className="max-w-[350px] lg:max-w-[375px] mt-4 mb-16">
      <a href="/">
        <Lazyload className="overflow-hidden">
          <img
            src={`./img/${image}`}
            alt="blog"
            className="max-w-[350px] lg:max-w-[375px] hover:scale-110 transition-all ease-in"
          />
        </Lazyload>
      </a>
      <div className="pt-8 leading-[1.5] flex flex-col justify-between min-h-[270px]">
        <div>
          <p className="text-slate-500 my-2">{date}</p>
          <a href="/" className="text-[20px] font-medium my-2">
            {title}
          </a>
          <p className="text-slate-600 my-4">{content}</p>
        </div>
        <div>
          <a href="/" className="text-[16px]">
            <span className="inline mr-3">Selengkapnya</span>
            <img
              src="./img/right-arrow.svg"
              alt="arrow"
              width="24px"
              className="inline"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
