import { useDispatch, useSelector } from "react-redux";
import { openFields } from "../../rtk/slices/fieldsStatus";
import { useRef } from "react";
import { Link } from "react-router-dom";

import "./field.css"

const Field = (props) => {
    const {title, pragraph} = props
    const fieldStatus = useSelector((state) => state.fieldStatus);
    const dispatch = useDispatch()
    const ref = useRef()
    return ( 
        <>
            <div ref={ref} id={title}  onClick={fieldStatus === ref?.current?.id ? () => dispatch(openFields("")) : (e) => dispatch(openFields(e.currentTarget.id))} className={`field ${fieldStatus === ref?.current?.id ? "open-field" : ""} position-relative  mt-3`}>
                <div className="head d-flex align-items-center position-relative">
                <i style={ fieldStatus === ref?.current?.id ? {rotate: "-45deg"} : {rotate: "0deg"}} className="fa-solid fa-plus"></i>
                <h3>{title}</h3>
                </div>
                <div className="content">
                <p className="mt-3">{pragraph}
                </p>
                <Link className="more text-decoration-none position-absolute" to="/">More <i class="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
        </>
     );
}
 
export default Field;