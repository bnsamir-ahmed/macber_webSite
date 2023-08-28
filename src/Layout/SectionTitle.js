import Paragraph from '../UI/Paragraph';
import DarkSvg from '../UI/DarkSvg';

const SectionTitle = (props)=>{
    return(
        <>
            <div className='d-flex justify-content-start align-items-start'>
                <DarkSvg/>
                <div>
                    <Paragraph className='title-blue mt-3 ms-4'>{props.sectTilte}</Paragraph>
                </div>
            </div>
        </>
    );
}
export default SectionTitle;