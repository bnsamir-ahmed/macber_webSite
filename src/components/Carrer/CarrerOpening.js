import Paragraph from "../../UI/Paragraph";
import arrow from '../../assets/icons/arrowright.svg';
import './Carer.css'
const CarrerOpening = () =>{
    const tools = [
        {id:1, 
        tool:'Wordpress Developer',
        experience:"Experience",
        years:'2 Years',
        line:'Deadline',
        data:'2021-05-08'
        },
         {id:2, 
        tool:'Javascript',
        experience:"Experience",
        years:'2 Years',
        line:'Deadline',
        data:'2021-05-08'
        }, 
        {id:3, 
        tool:'IOS Developer',
        experience:"Experience",
        years:'2 Years',
        line:'Deadline',
        data:'2021-05-08'
        },
         {id:4, 
        tool:'Node JS Developer',
        experience:"Experience",
        years:'2 Years',
        line:'Deadline',
        data:'2021-05-08'
        },
        
        
        
        ]
    return(
        <>
        <section className='py-5 carer'>
            <div className="container px-5">
                <div className="text-center mb-5">
                    <Paragraph className='lightGrey2 mb-1'>Come join us</Paragraph>
                    <Paragraph className='fs-25 fw-700 primaryBlue mb-1'> Career Openings</Paragraph>
                    <Paragraph className='lightGrey2'>We're always looking for creative, talented self-starters to join Macber 
                        family.<br/> Check out our open roles below and fill out an application.</Paragraph>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-12">
                        <div className="">
                        <Paragraph className='fw-500 mb-2'>HT & Admin</Paragraph>
                        <Paragraph className='fw-500 mb-2 primaryBlue'>Engineering (20)</Paragraph>
                        <Paragraph className='fw-500 mb-2'>Support</Paragraph>
                        <Paragraph className='fw-500 mb-2'>Design</Paragraph>
                        <Paragraph className='fw-500 mb-2'>Digital Marketing</Paragraph>
                        </div>
                    </div>
                    <div className="col-xl-9 col-md-12">
                        {tools.map((tool)=>{
                            return(
                        <div className="d-flex align-items-center justify-content-between border-carer mb-4 ">
                            <Paragraph className='mb-xl-0 mb-sm-2 fw-500'>{tool.tool}</Paragraph>
                            <div>
                            <Paragraph className='mb-xl-0 mb-sm-2 lightGrey2'>{tool.experience}</Paragraph>
                            <Paragraph className='mb-xl-0 mb-sm-2 fw-500'>{tool.years}</Paragraph>                                
                            </div>
                             <div>
                            <Paragraph className='mb-xl-0 mb-sm-2 lightGrey2'>{tool.line}</Paragraph>
                            <Paragraph className='mb-xl-0 mb-sm-2 fw-500'>{tool.data}</Paragraph>                                
                            </div>
                            <img src={arrow} loading="lazy"/>
                        </div>

                            )
                        })}
                    </div>

                </div> 
            </div>
        </section>
        </>
    )
}
export default CarrerOpening;