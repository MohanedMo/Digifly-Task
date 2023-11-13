
import { useDispatch, useSelector } from "react-redux";
import { openService } from "../../rtk/slices/servicesStatusSlice";
import { useRef } from "react";

import "./service.css"


const Service = (props) => {

    const {title, imgSrc, description} = props

    const sericeStatus = useSelector((state) => state.serviceStatus);
    const dispatch = useDispatch()
    const ref = useRef()
    return ( 
        <>
        
        <div ref={ref} id={title} onClick={sericeStatus === ref?.current?.id ? () => dispatch(openService("")) : (e) => dispatch(openService(e.currentTarget.id))} className={`service  ${sericeStatus ===  ref?.current?.id ? "open-service" : ""}`}>
            <h2 className={`${sericeStatus ===  ref?.current?.id ? "opacity-0" : "opacity-1 "}`}>{title}</h2>
            <div className="service-content  d-flex flex-column flex-md-row">
            <img src={`./assets/services/${imgSrc}`} alt="service" />
            <div className={`${sericeStatus ===  ref?.current?.id ? "d-block" : "d-none"}`}>
                <h3 className="fs-5 mt-2 ">{title}</h3>
                <p className={`${sericeStatus ===  ref?.current?.id ? "opacity-1" : "opacity-0"}`}>{description}</p>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Service;