import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import Supporters from './Supporters';
import KnowAbotUS from '../components/homeSections/KnowAboutUs';
import WhatWeDo from '../components/homeSections/WhatWeDo';
import Counter from '../UI/Counter';
import Jarallax from './homeSections/Jarallax';
import OurProjects from './homeSections/OurProjects';

const Home = ()=>{
    return(
        <>
            <MainHeaderWrapper />
            <Supporters />
            <KnowAbotUS />
            <Counter />
            <WhatWeDo />
            <OurProjects />
            <Jarallax />
        </>
    )
}
export default Home;