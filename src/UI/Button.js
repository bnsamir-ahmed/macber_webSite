import './Button.css';
const Button = (props)=>{
    return(
        <button className={`${props.className} btn`} onClick={props.onclick}>{props.children}</button>
    )
}
export default Button;