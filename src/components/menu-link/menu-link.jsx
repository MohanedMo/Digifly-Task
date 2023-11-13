import { Link } from "react-router-dom";
import "./menu-link.css"
import { useDispatch } from "react-redux";
import { openMenu } from "../../rtk/slices/menuStatus";


const MenuLink = (props) => {

    const {link} = props
    const dispatch = useDispatch()
    return ( 
        <Link onClick={() => dispatch(openMenu(false))} className="menu-link text-decoration-none text-light" to={link.path}>{link.name}</Link>
     );
}
 
export default MenuLink;