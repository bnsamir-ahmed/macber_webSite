import { useEffect } from 'react';
import classes from './MainHeaderWrapper.module.css';
import bg from '../assets/mainHeaderBackg.svg';
import Button from '../UI/Button';
import wow from 'wowjs';

const MainHeaderWrapper = (props)=>{
    useEffect(()=>{
        new wow.WOW({
            live: false
        }).init();
    },[])
    return (
        <>
            <div className={classes.header_bg} style={{
                backgroundImage: `linear-gradient(180deg, rgba(44, 96, 242, 0.50) 0%, rgba(19, 21, 24, 0.60) 100%),url(${bg})`
            }}>
                <div className={`container-fluid ${classes.px_5}`}>
                    <div className='col-xl-6 col-12 wow animate__animated animate__fadeInLeft' data-wow-duration="2s">
                        <h1 className={`mb-5 ${classes.h1_white}`}><span className={classes.digital}>Digital Crafters</span><br />Clean Code & Neat <br className='d-sm-none'/>Design</h1>
                        <p className={`mb-5 ${classes.p_white}`}>Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet</p>
                        <Button className='btn-white'>Let's Talk</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MainHeaderWrapper;