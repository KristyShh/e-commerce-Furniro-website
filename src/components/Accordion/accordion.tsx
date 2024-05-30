import  { useState } from 'react'
import './accordion.scss'
import { IAccordion } from '../../types/types'


const Accordion = ({title, content}: IAccordion) => {
 const [open, setOpen] = useState(false)

 const toggleAccordion = () => { setOpen (!open) };
    return (
        <div className="accordion">
<div className={`accordion-title ${open ? 'active' : ''}`}
 onClick={toggleAccordion}>
    {title}
    <span className="icon"> {open ? '-' : '+'} </span>
    </div>
    <div className={`accordion-content ${open ? 'active' : ''}`}>
    <p>{content}</p>
    </div>    
        </div>
    )
}

export default Accordion