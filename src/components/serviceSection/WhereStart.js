import Paragraph from "../../UI/Paragraph";
import Button from "../../UI/Button"
import './Experience.css'
const WhereStart =()=>{
    return(
<>
<section className="where py-5">
    <div className="container text-center">
        <Paragraph className="service-title font-45">Don’t know where to start?</Paragraph>
        <Paragraph className="use-business py-4">Use our Business Impact Solutions as a starting off point to <br/>
         drive the conversationtowards fulfilling your needs.</Paragraph>
        <Button className="contact-us my-4">Contact us</Button>
    </div>
</section>
</>)
}
export default WhereStart;