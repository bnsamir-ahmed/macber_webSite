import Paragraph from "../../UI/Paragraph";
import team from '../../assets/icons/teamwork.svg';
import secured from '../../assets/icons/secrud.svg';
import learn from '../../assets/icons/learn.svg';
import upgrate from '../../assets/icons/upgrate.svg';



const CarrerSection = ()=>{
    const Carer = [
    {id:1,
      img:team
     ,text:'Team work'
     ,backgroundColor:'#E7F2FF' 
    , desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"},
    {id:2,
    img:secured
     ,text:'Secured Future' 
     ,backgroundColor:'#F1F7E8' 

    , desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"}, 
    {id:3,
     img:learn
     ,text:'Learning Opportunity' 
     ,backgroundColor:'#EFF2F5' 

    , desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"}, 
    {id:4,
    img:upgrate
     ,text:'Upgrate Skills' 
     ,backgroundColor:'#FFEEED' 

    , desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"},
]
    return(
       <>
       <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="pt-xl-4">
                    <Paragraph className='secBlue fs-25'>Benifets</Paragraph>
                    <Paragraph className="primaryBlue fs-39 fw-700">Why you Should Join<br/> Our Awesome Team</Paragraph>
                    <Paragraph className='black'>we want to feel like home when you are working at Macber & <br/> for that we have curated a great set of benefits for you.</Paragraph>
                    </div>
                    
                </div>
                <div className="col-xl-6  col-md-12">
                    <div className="row">
                    {Carer.map((i)=>{
                        return(
                            <div className="col-xl-6 col-md-6 " key={i.id}>
                                <div className="mb-5">
                                <img className="p-3 rounded mb-1"  style={{backgroundColor:`${i.backgroundColor}`}} src={i.img} loading="lazy" alt="/"/>
                                <Paragraph className='fw-700 fs-22 primaryBlue mb-1'>{i.text}</Paragraph>
                                <Paragraph className='lightGrey2 mt-0'>{i.desc}</Paragraph>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
       </section>
        </>
    )
    
}
export default CarrerSection;