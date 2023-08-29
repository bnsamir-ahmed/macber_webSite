import './Card.css';
import arrow from '../assets/icons/arrow.svg';
import Paragraph from './Paragraph';
import Button from './Button';
import Media from '../UI/Media';
const Card = (props)=>{
    return(
        <>
            <div className={`${props.className}`} >
                <Media src={props.image} className='' alt="icon" type='img' />
                <Paragraph  className='service-title  my-3'>{props.title}</Paragraph>
                <Paragraph  className='card-desc pb-4'>{props.desc}</Paragraph>
                <Button className='border-0 btn-card p-0'><img src={arrow} className='me-2 p-0' alt='' loading='lazy'/>{props.btn}</Button>
            </div>
          
        </>
    )
}
export default Card;