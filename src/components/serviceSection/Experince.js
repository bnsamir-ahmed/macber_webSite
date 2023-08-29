import SectionTitle from "../../Layout/SectionTitle";
import Paragraph from "../../UI/Paragraph";
import './Experience.css';
 const Experince = (props) => {
  return (
    <>
    <div className="container ">
    <SectionTitle  sectTilte = {'Our Experience'}/>
      <div className="total-work py-5">
        <div className="projects  ">
            <Paragraph className="service-title ms-xl-4 ms-0  experience-title-tab">Web Design</Paragraph>
            <Paragraph className="work-do">The Legal Clinic , Golden deal ........</Paragraph>
            <Paragraph className="count me-xl-4 me-0">10 Projects</Paragraph>
        </div>
         <div className="projects ">
            <Paragraph className="service-title ms-xl-4 ms-0  experience-title-tab">Mobile App</Paragraph>
            <Paragraph className="work-do">OZ App , Golden Deal , Tager ........</Paragraph>
            <Paragraph className="count me-xl-4 me-0">7 Projects</Paragraph>
        </div>
         <div className="projects ">
            <Paragraph className="service-title ms-xl-4 ms-0 experience-title-tab">Game Development </Paragraph>
            <Paragraph className="work-do margin-last">OZ App , Golden Deal , Tager ........</Paragraph>
            <Paragraph className="count me-xl-4 me-0">5 Projects</Paragraph>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experince;

