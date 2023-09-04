import SectionHeader from '../Layout/SectionHeader';
import bg from '../assets/carrer.svg';
import CarrerOpening from './Carrer/CarrerOpening';
import CarrerSection from './Carrer/CarrerSection';

const Careers = ()=>{
    return(
        <>
            <SectionHeader bg={bg}  title={'Careers'} desc={'Join Our Team to Shape the Future of Design'} />
             <CarrerSection/>
             <CarrerOpening/>
        </>
    )
}
export default Careers;