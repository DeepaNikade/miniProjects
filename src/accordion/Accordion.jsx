import React,{useState} from 'react';
import questions from './data';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div>
        {questions.map((questions,index)=>(
            <div key={index}>
                <div onClick={()=>toggleAccordion(index)}>
                    <h2>{questions.title}</h2>
                    <span>{isOpen === index ? '-' : '+'}</span>
                </div>
                {isOpen === index && <div>{questions.info}</div>}
            </div>
        ))}
    </div>
  )
}

export default Accordion