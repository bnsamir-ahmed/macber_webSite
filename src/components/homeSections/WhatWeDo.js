import Paragraph from '../../UI/Paragraph';
import SectionTitle from '../../Layout/SectionTitle';
import classes from './WhatWeDo.module.css';
import Button from '../../UI/Button';
import Media from '../../UI/Media';
import MediaSrc from '../../assets/Bg_img.svg';
import uiuxLogo from '../../assets/icons/uiux_design.svg';
import mobileDevIcon from '../../assets/icons/mobileDev.svg';
import dedicatedDevIcon from '../../assets/icons/dedicated_dev.svg';
import sassDev from '../../assets/icons/sass_dev.svg';

const WhatWeDo = ()=>{
    return(
        <>
            <div className='container py_5'>
                <div className='row align-items-center'>
                    <div className='col-md-8'> 
                        <SectionTitle sectTilte = {'What we do'}/>
                            <div className='ps-5'>
                                <Paragraph className='desc-blue  mt-3 ms-5'>We care for earth, care for the coming birth</Paragraph>
                                <Paragraph className='desc-black mt-3 ms-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                </Paragraph>
                                <div className={`${classes.services} ps-4 mt-5 ms-5`}>
                                    <div className='d-flex justify-content-start align-items-start'>
                                        <img src={uiuxLogo} alt='uiuxLogo' loading='lazy'/>
                                        <div>
                                            <Paragraph className='title-dark ms-4'>UX/UI Design</Paragraph>
                                            <Paragraph className='desc-black w-70 ms-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Paragraph>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-start'>
                                        <img src={mobileDevIcon} alt='mobileDevIcon' loading='lazy'/>
                                        <div>
                                            <Paragraph className='title-dark ms-4'>Mobile Development</Paragraph>
                                            <Paragraph className='desc-black w-70 ms-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Paragraph>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-start'>
                                        <img src={dedicatedDevIcon} alt='dedicatedDevIcon' loading='lazy'/>
                                        <div>
                                            <Paragraph className='title-dark ms-4'>Dedicated development team</Paragraph>
                                            <Paragraph className='desc-black w-70 ms-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Paragraph>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-start'>
                                        <img src={sassDev} alt='sassDev' loading='lazy'/>
                                        <div>
                                            <Paragraph className='title-dark ms-4'>Saas development</Paragraph>
                                            <Paragraph className='desc-black w-70 ms-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Paragraph>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='col-md-4'>
                        <div className={classes.control}>
                            <Media type='img' src={MediaSrc} alt='media name' width='100%' />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <Button className='btn-outline-blue'>Learn more</Button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default WhatWeDo;