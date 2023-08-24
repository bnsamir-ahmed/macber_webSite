const Media = (props)=>{
    return (
        <>
            {props.type === 'img' && <img src={props.src} alt={props.alt} loading="lazy" width={props.width} height={props.height}/>}
            {props.type === 'video' && <video src={props.src} alt={props.alt} loading="lazy" width="750" height="500" controls  />}
        </>
    );
}
export default Media;