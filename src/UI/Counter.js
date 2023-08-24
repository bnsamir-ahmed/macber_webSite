import CountUp from 'react-countup';
import Paragraph from '../UI/Paragraph';
import classes from './Counter.module.css';


const Counter = ()=>{
    return (
        <>
                <div className='container py_5'>
                    <div className='row'>
                        <div className={`col-lg-3 col-6 ${classes.border_right} ${classes.flex_box}`}>
                            <Paragraph className='desc-blue'>
                                <CountUp 
                                    start={100} 
                                    end={1250} 
                                    duration={3} 
                                    enableScrollSpy={true} 
                                    scrollSpyDelay={2}>
                                </CountUp>+
                            </Paragraph>
                            <Paragraph className='title-black'>Projects</Paragraph>
                        </div>
                        <div className={`col-lg-3 col-6 ${classes.border_right} ${classes.flex_box}`}>
                            <Paragraph className='desc-blue'>
                                <CountUp 
                                    start={10} 
                                    end={401} 
                                    duration={3} 
                                    enableScrollSpy={true} 
                                    scrollSpyDelay={2}>
                                </CountUp>+
                            </Paragraph>
                            <Paragraph className='title-black'>Clients</Paragraph>
                        </div>
                        <div className={`col-lg-3 col-6 ${classes.border_right} ${classes.flex_box}`}>
                            <Paragraph className='desc-blue'>
                                <CountUp 
                                    start={10} 
                                    end={46} 
                                    duration={3} 
                                    enableScrollSpy={true} 
                                    scrollSpyDelay={2}>
                                </CountUp>
                            </Paragraph>
                            <Paragraph className='title-black'>Team</Paragraph>
                        </div>
                        <div className={`col-lg-3 col-6 ${classes.border_right} ${classes.flex_box}`}>
                            <Paragraph className='desc-blue'>
                                <CountUp 
                                    start={0} 
                                    end={9} 
                                    duration={3} 
                                    enableScrollSpy={true} 
                                    scrollSpyDelay={2}>
                                </CountUp>
                            </Paragraph>
                            <Paragraph className='title-black'>years</Paragraph>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Counter;
