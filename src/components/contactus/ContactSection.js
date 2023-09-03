import Paragraph from "../../UI/Paragraph";
import classes from './ContactUs.module.css';
import ContactForm from "./ContactForm";

const ContactSection = ()=>{
    return(
        <>
          <section className={classes.Contact_Padding}>
             <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                        <Paragraph className={classes.Home}>
                            <a class="" href="/" className={classes.Home}>Home /</a> Contact us
                        </Paragraph>
                         <Paragraph className={classes.Home_Work}>
                            Contact us let’s work together
                        </Paragraph>
                        <Paragraph className={classes.Home_Text}>
                            Reach out to us for a consultation, overview, and to know <br/> more about our services.
                        </Paragraph>
                        
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <ContactForm/>
                    </div>
                </div>
             </div> 
          </section>
        </>
    )
}
export default ContactSection;