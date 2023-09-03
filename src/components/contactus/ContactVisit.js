import { ParallaxProvider,ParallaxBanner  } from 'react-scroll-parallax';
import contact_bg from '../../assets/contact-bg.svg';
import Paragraph from '../../UI/Paragraph';
import classes from './ContactUs.module.css';
import involpe from '../../assets/icons/envolpe.svg';
import location from '../../assets/icons/location.svg';
import facebook from '../../assets/icons/001-facebook.svg';
import instagram from '../../assets/icons/004-instagram.svg';
import linkid from '../../assets/icons/linkidin.svg';

const Jarallax = ()=>{
    return (
        <>
        <div className={classes.pos_relative}>
            <div className={classes.img_bg}></div>
                    <div className={classes.visit}>
                                <Paragraph className={classes.visit_pages}>Visit us</Paragraph>
                                <Paragraph className='mb-5'>(you will love our coffee!)</Paragraph>
                                <div className='d-flex align-items-center mb-4'>
                                  <img loading='lazy' src={involpe} className='me-4' alt=''/> 
                                  <Paragraph className='mb-0'> Macber@gmail.com</Paragraph>
                                </div>
                                <div className='d-flex align-items-start mb-4'>
                                  <img loading='lazy' src={location} className='me-4' alt=''/>
                                  <Paragraph className='mb-0' >
                                     building 2, ground floor, apt. 1, <br/>
                                 talaat harb axis, district 3, area 4,<br/>
                                  fifth settlement, new cairo, egypt</Paragraph>
                                </div>
                                  <div className={classes.pages}>
                                       <img loading='lazy' src={facebook} alt=''/>
                                       <img loading='lazy' src={instagram} alt=''/>
                                       <img loading='lazy' src={linkid} alt=''/>
                                  </div>

                    </div>
        </div>
        </>
    )
}
export default Jarallax;
