export default function BenefitsItems(props){
  const {title,content,number} = props;
  return (
    <div className="bg-card-benefit px-8 py-12 max-w-[400px] min-h-[300px]">
      <div className="w-[40px] h-[40px] relative mb-4">
        <img src="./img/benefits.png"  alt="benefits" className="relative" />
        <span className="absolute top-[25%] left-[45%] text-white font-semibold">{number}</span>
      </div>
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <p className="leading-[1.7]">{content}</p>
    </div>
  ) 
}