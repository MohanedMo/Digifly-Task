import { useDispatch, useSelector } from "react-redux";
import { openCertificate } from "../../rtk/slices/certificateStatus";

import "./certificate.css"

const Certificate = (props) => {

    const {id, name, imgSrc} = props

    const certStatus = useSelector((state) => state.certificateStatus);
    const dispatch = useDispatch()
    
    return ( 
        <div  onClick={certStatus === id ? () => dispatch(openCertificate("")) : () => dispatch(openCertificate(id))} className={`certificate ms-md-4 mt-3 position-relative ${certStatus === id ? "open-certificate" : ""}`}>
            <img className="certificate-photo  " src={`./assets/certificates/${imgSrc}`} alt="metallic" />
            <span className="position-absolute">{name}</span>
        </div>
     );
}
 
export default Certificate;