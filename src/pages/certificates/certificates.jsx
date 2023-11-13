import Title from "../../components/title/title";

import "./certificates.css";
import Certificate from "../../components/certificate/certificate";

const Certificates = () => {

    const data = [
        {
            imgSrc: "closed-metallic-gate.png",
            name: "Certificate"
        },
        {
            imgSrc: "closed-metallic-gate.png",
            name: "Certificate"
        },
        {
            imgSrc: "closed-metallic-gate.png",
            name: "Certificate"
        },
        {
            imgSrc: "closed-metallic-gate.png",
            name: "Certificate"
        }
    ]

  return (
    <div className="certificates position-relative">
      <Title title="Certificates" />
      <div className="certificates-content d-flex justify-content-between flex-column flex-xxl-row">
        <div className="text position-relative col-12 col-xxl-5">
        <p className="fs-4 ">
        <span className="fw-bold">Firoz’s wealth of experience,</span><br/>technical capability and partners can
        provide the market with equipment that not only offers ideal solution to
        today’s high standard of requirements along with consistently good
        results , but does so whilst retaining the very best in quality.
        </p>
        </div>
        <div className="photos col-12 col-xxl-6 position-relative d-flex justify-content-xxl-end flex-column flex-md-row ">
          {data.map((el,index) => (
            <Certificate key={index} id={index} name={el.name} imgSrc={el.imgSrc}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
