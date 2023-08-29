import SectionHeader from '../Layout/SectionHeader';
import CardSection from '../UI/CardSection';
import bg from '../assets/service-bg.svg';

const Services = ()=>{
    return(
        <>
            <SectionHeader bg={bg}  title={'Services'} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} />
            <CardSection />
        </>
    )
}
export default Services;