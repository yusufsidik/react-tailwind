import { useState } from 'react';
const Accordion = (props) => {
  const { title, content, number, addClass } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className={`border-b-2 py-6 px-4 cursor-pointer flex items-start gap-x-10 w-full ${addClass}`} onClick={toggleAccordion}>
        <div>
          <h1 className="text-blue-700 font-semibold text-[18px] lg:text-[24px]">{number}</h1>
        </div>
        <div className='w-full'>
          <div className='relative'>
            <h1 className="text-[18px] lg:text-[24px]">{title}</h1>
            <img src={`./img/faq-${isOpen ? 'cross' : 'plus'}.jpg`} alt="icon" width="22px" height="22px" className='absolute top-0 right-0' />
          </div>
          {isOpen && (
            <p className="text-sm lg:text-[18px] text-slate-500 mt-2 lg:mt-6">{content}</p>
          )}
        </div>
      </li>
    </>
  );
};

export default Accordion;
