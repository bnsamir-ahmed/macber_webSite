import { useState } from "react";
import FormInput from "../../UI/FormInput";
import Button from "../../UI/Button";
import Paragraph from "../../UI/Paragraph";
import classes from './ContactUs.module.css';
import { useNavigate , Link} from "react-router-dom";

const   ContactForm= ()=>{
    // const Navgate = useNavigate()
    const [values , setValues] = useState({
        name:"",
        phone:"",
        email:"",
        company:""

    })

    const inputs = [
        {
        id:1,
        name:"name",
        type:"text",
        placeholder:"Your Name",
        label:"name"
        },
         {
        id:2,
        name:"phone",
        type:"text",
        placeholder:"Phone"
        ,label:"phone"
        }, {
        id:3,
        name:"email",
        type:"text",
        placeholder:"Email",
        label:"name"
        }, {
        id:4,
        name:"company",
        type:"text",
        placeholder:"Company"
        ,label:"name"
        },
]
    
    const onChange = (e)=>{
        setValues({...values , [e.target.name]: e.target.value})
    } 
    const handleSubmit = (e)=>{
          e.preventDefault();
        }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="row">
            {inputs.map((input)=>(
                <div className="col-6">
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                </div>
            ))}
            </div>
                <div className="form-input">  
                <label className="text-capitalize fw-bold">reason</label>
                <select className="my-2 select-form" >
                    <option value={0} className="ps-2">select reason</option>
                </select>
                </div>
            <div className="form-input">
                 <label className="text-capitalize fw-bold">massage</label> 
                 <input type="text" placeholder="massage" className="massage-form ps-2 my-2"/>
            </div>
               <div className="d-flex hint-form">
                <Paragraph className='m-0'>By proceeding, you are agreeing <br/> to Macber Company’s
                 <br/><Link path='/' alt="#/" className={classes.policy}>privacy policy</Link>  & communication</Paragraph>
                 <Button className="btn-blue text-capitalize">get in touch</Button>
               </div>
        </form>
        </>
    )
}
export default ContactForm ;