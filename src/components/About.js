import SectionHeader from '../Layout/SectionHeader';
import SectionTitle from '../Layout/SectionTitle';
import bg from '../assets/about_bg.svg';

const About = ()=>{
    return(
        <>
            <SectionHeader bg={bg} title={'About Us'} desc={'Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,'} />
            <SectionTitle />
        </>
    )
}
export default About;