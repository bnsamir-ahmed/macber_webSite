import Paragraph from '../UI/Paragraph';
import '../UI/Paragraph.css'
import Card from '../UI/Card';
import search from "../assets/icons/search.svg"
import setting from "../assets/icons/setting.svg"
import team from "../assets/icons/team.svg"
import  '../UI/Card.css'
import graiphic from '../assets/icons/grachic.svg'
import ui from '../assets/icons/ui.svg'
import web from '../assets/icons/webdesign.svg'
import mobile from '../assets/icons/mobilecard.svg'
import webcard from '../assets/icons/webcard.svg'
import sass from '../assets/icons/sass.svg'
import va from '../assets/icons/va.svg'
import vr from '../assets/icons/vr.svg'

const CardSection = ()=>{
    return(
        <>
            
              <section>
                <div className='container py-5'>
                    {/* //////////cardOne///////////// */}
                    <Paragraph className="title-blue-bold" >
                        Strategy
                    </Paragraph>
                    <div className='row py-4'>
                        <div className='col-xl-4 col-md-4 col-sm-6'>
                            <Card className="card-service pad-card" image={search} title={"Product Discovery"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                        </div>
                        <div className='col-xl-4 col-md-4 col-sm-6'>
                            <Card className="card-service pad-card" image={setting} title={"Product Development"}  desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                        </div>
                        <div className='col-xl-4 col-md-4 col-sm-6'>
                            <Card className="card-service" image={team} title={"Dedicated development team"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                        </div>
                    </div>
                    {/* //////////cardOne//////////// */}
                    {/* //////////cardTwo////////// */}
                         <div className='container py-4'>
                         <Paragraph className="title-blue-bold" >
                             Design
                         </Paragraph>
                         <div className='row py-4'>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service pad-card" image={ui} title={"UX\UI Design"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service pad-card" image={web} title={"Web Design"}  desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service  pad-card" image={graiphic} title={"Graphic Design"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                         </div>                             
                         </div>
                    {/* //////////cardTwo////////// */}
                               {/* //////////cardThree////////// */}
                         <div className='container py-4'>
                         <Paragraph className="title-blue-bold" >
                             Development
                         </Paragraph>
                         <div className='row py-4'>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service pad-card" image={mobile} title={"Mobile Development"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service pad-card" image={webcard} title={"Web Development"}  desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service  pad-card" image={sass} title={"Saas Development"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                         </div>                             
                         </div>
                               {/* //////////cardThree////////// */}
                                            {/* //////////cardFour////////// */}
                         <div className='container py-4'>
                         <Paragraph className="title-blue-bold" >
                             Game
                         </Paragraph>
                         <div className='row py-4'>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service pad-card" image={va} title={"AR Development"} desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>
                             <div className='col-xl-4 col-md-4 col-sm-6'>
                                 <Card className="card-service pad-card" image={vr}  title={"VR Development"}  desc={'We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.'} btn={'Learn more'}/>
                             </div>                          
                         </div>                             
                         </div>
                               {/* //////////cardFour////////// */}


                    </div>
              </section>
             
         
        </>
    )
}
export default CardSection;