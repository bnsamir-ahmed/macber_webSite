import { useEffect } from 'react';
import classes from './MainHeaderWrapper.module.css';
import Paragraph from '../UI/Paragraph';
import wow from 'wowjs';
import { NavLink } from 'react-router-dom';

const MainHeaderWrapper = (props)=>{
    useEffect(()=>{
        new wow.WOW({
            live: false
        }).init();
    },[])
    return (
        <>
            <div className={classes.header_bg} style={{
                backgroundImage: `linear-gradient(180deg, rgba(44, 96, 242, 0.50) 0%, rgba(19, 21, 24, 0.60) 100%),url(${props.bg})`,
                height: '38rem'
            }}>
                <div className={`container-fluid ${classes.px_5}`}>
                    <div className='col-xl-6 col-12 wow animate__animated animate__fadeInLeft' data-wow-duration="2s">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                        </ol>
                    </nav>
                        <Paragraph className={`mb-5 ${classes.h1_white}`}>{props.title}</Paragraph>
                        <Paragraph className={`mb-5 ${classes.p_white}`}>{props.desc}</Paragraph>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MainHeaderWrapper;