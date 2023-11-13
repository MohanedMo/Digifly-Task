import { Link } from "react-router-dom";
import "./button.css"
const MainButton = (props) => {
    const {btnText} = props
    return ( 
        <Link className="main-btn text-decoration-none d-flex justify-content-center align-items-center text-light" to="/">{btnText}</Link>
     );
}
 
export default MainButton;
