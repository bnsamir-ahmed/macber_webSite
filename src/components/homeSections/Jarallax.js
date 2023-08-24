
import { ParallaxProvider,ParallaxBanner } from 'react-scroll-parallax';
import parallax_bg from '../../assets/parallax_bg.svg';
import Paragraph from '../../UI/Paragraph';
import Button from '../../UI/Button';

const Jarallax = ()=>{
    return (
        <>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        { image: parallax_bg , speed: -20 },
                    ]}
                    className="aspect-[1]"
                    >
                        <div className='container col-md-8 col-12 text-center parallax_bg_gradiant'>
                            <div className="parallax_bg">
                                <Paragraph className='title-white mb-4'> Got a project in mind?<br />Tell us about it.</Paragraph>
                                <Paragraph className='desc-white mb-4 w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.</Paragraph>
                                <Button className='btn-outline-white'>Contact us</Button>
                            </div>
                        </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </>
    )
}
export default Jarallax;
