import Paragraph from '../../UI/Paragraph';
import DarkSvg from '../../UI/DarkSvg';

const OurProjects = ()=>{
    return (
        <>
            <div className='container py_5'>
                <div className='d-flex justify-content-start align-items-start'>
                    <DarkSvg/>
                    <div>
                        <Paragraph className='title-blue mt-3 ms-4'>Projects we have done</Paragraph>
                        <Paragraph className='desc-blue  mt-3 ms-4'>We are Uneven Creative.</Paragraph>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurProjects;