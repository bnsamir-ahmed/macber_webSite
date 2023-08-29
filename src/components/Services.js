import SectionHeader from '../Layout/SectionHeader';
import CardSection from '../UI/CardSection';
import bg from '../assets/service-bg.svg';
import Experince from './serviceSection/Experince';
import WhereStart from './serviceSection/WhereStart';

const Services = ()=>{
    return(
        <>
            <SectionHeader bg={bg}  title={'Services'} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} />
            <CardSection />
            <Experince/>
            <WhereStart/>
        </>
    )
}
export default Services;