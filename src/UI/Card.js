import './Card.css'
import arrow from '../assets/icons/arrow.svg'
const Card = (props)=>{
    return(
        <>
            <div className={`${props.className}`} >
                <img src={props.image} className='mb-3' alt=""/>
                <h4 className='card-title mb-3 '>{props.title}</h4>
                <p className='card-desc pb-4'>{props.desc}</p>
                <button className='border-0 btn-card'><img src={arrow} className='me-2 p-0' alt='' loading='lazy'/>{props.btn}</button>
            </div>
          
        </>
    )
}
export default Card;