import "./about.css";

import Navbar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Button from "../../components/button/button";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-parent d-flex justify-content-sm-center justify-content-lg-between flex-wrap">
        <div className="about-text position-relative col-12 col-lg-5">
          <Title title="About Us"/>
          <p>
            Firoz is a specialized company for studying , Designing, supplying
            and installing of commercial equipment
            <br /> that is used in :
          </p>
          <p>
            Kitchens, Laundry, Freezers & Refrigerator
            <br /> Heating Solutions
          </p>
          <p>
            Firoz’s wealth of experience, technical capability and partners can
            provide the market with equipment that not only offers ideal
            solution to today’s high standard of requirements along with
            consistently good results , but does so whilst retaining the very
            best in quality.
          </p>
          <Button btnText="Read More" />
        </div>
        <div className="presentation position-relative col-12 col-lg-5 ">
          <img
            src="./assets/about/powerpoint-presentation-visual-impact.png"
            alt="presentation"
            className="about-photo position-absolute"
          />
          <img
            src="./assets/about/Group 189.png"
            alt="presentation"
            className="Group-189 position-absolute"
          />
        </div>
      </div>
    </>
  );
};

export default About;
