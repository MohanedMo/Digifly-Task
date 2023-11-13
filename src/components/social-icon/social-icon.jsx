import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../../rtk/slices/menuStatus";

import "./social-icon.css"

const SocialIcon = (props) => {

    const {data} = props
    const dispatch = useDispatch()

    return ( 
        <Link  onClick={data.place === "menu" ? () => dispatch(openMenu(false)) : null} to="/"><img className={data.place === "contact" ? "social-contact" : "social-menu"} src={data.imgSrc} alt="icon" /></Link>
     );
}
 
export default SocialIcon;