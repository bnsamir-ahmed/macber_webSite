import Paragraph from '../../UI/Paragraph';
import DarkSvg from '../../UI/DarkSvg';
import classes from './KnowAbotUS.module.css';
import Button from '../../UI/Button';
import Media from '../../UI/Media';
import MediaSrc from '../../assets/BG_video.svg';
import VideoControl from '../../assets/icons/play_video_lg.svg';

const KnowAbotUS = ()=>{
    return(
        <>
            <div className='container py_5'>
                <div className='row align-items-center'>
                    <div className='col-md-8'>
                        <div className='d-flex justify-content-start align-items-start'>
                            <DarkSvg/>
                            <div>
                                <Paragraph className='title-blue mt-3 ms-4'>Know About us</Paragraph>
                                <Paragraph className='desc-blue  mt-3 ms-4'>We help nature smile and survive everywhere</Paragraph>
                                <Paragraph className='desc-black mt-3 ms-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                </Paragraph>
                                <Paragraph className='desc-black mt-3 ms-4'>
                                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                </Paragraph>
                                <Button className='btn-blue ms-4'>Learn more</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className={classes.control}>
                            <Media type='img' src={MediaSrc} alt='media name' width='100%' />
                            <img src={VideoControl} loading='lazy' alt='icon-play' className={classes.control_icon} width="64px" height='64px'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default KnowAbotUS;