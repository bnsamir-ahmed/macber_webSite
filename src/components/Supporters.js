import Slider from "react-slick";
import classes from './Supporters.module.css';
import suporter_1 from '../assets/supporter_1.svg';
import suporter_2 from '../assets/supporter_2.svg';
import suporter_3 from '../assets/supporter_3.svg';
import suporter_4 from '../assets/supporter_4.svg';
import suporter_5 from '../assets/supporter_5.svg';

const Supporters = ()=>{
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 1,
        centerPadding: "30px",
        rows: 1,
        slidesPerRow: 5,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesPerRow: 4,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesPerRow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesPerRow: 1,
              }
            }
          ]
      };
    return (
        <>
        <div className="container py_5">
            <div className="title d-flex align-items-center">
                <p className={`${classes.p_title} mb-0 col-xl-2 col-lg-3 col-md-4 col-sm-8`}> our Supporters </p>
                <hr className={`${classes.hr}`}/>
            </div>
            <Slider {...settings} className={`py-5 d-flex justify-content-center align-items-center`}>
            <div>
                <img src={suporter_1} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_2} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_3} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_4} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_5} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_1} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_2} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_3} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_4} loading="lazy" alt="suporter_1"/>
            </div>
            <div>
                <img src={suporter_5} loading="lazy" alt="suporter_1"/>
            </div>
            </Slider>
        </div>
        </>
    )
}
export default Supporters;