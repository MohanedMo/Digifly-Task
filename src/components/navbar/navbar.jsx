import { Link, useLocation } from "react-router-dom";
import "./navbar.css"
import SocialIcon from "../social-icon/social-icon";
import MenuLink from "../menu-link/menu-link";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../rtk/slices/menuStatus";
import { useEffect, useState } from "react";

const Navbar = () => {

    const location = useLocation();
    console.log(location.pathname);

    const socialIcons = [
        {
            imgSrc :"./assets/navbar/Component 6 – 1.svg",
            place: "menu"
        },
        {
            imgSrc :"./assets/navbar/Component 7 – 1.svg",
            place: "menu"
        },
        {
            imgSrc :"./assets/navbar/Component 8 – 1.svg",
            place: "menu"
        }
    ]

    const pagesLinks1 = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Fields",
            path: "/fields"
        },
        {
            name: "Service",
            path: "/services"
        },
        {
            name: "Knowledge Hub",
            path: "/knowledge"
        }
    ]
    const pagesLinks2 = [
        {
            name: "Gallery",
            path: "/gallery"
        },
        {
            name: "Events",
            path: "/"
        },
        {
            name: "Projects",
            path: "/"
        },
        {
            name: "Partners",
            path: "/"
        },
        {
            name: "Contact Us",
            path: "/contact"
        }
    ]

    const menuStatus = useSelector((state) => state.menuStatus)
    const dispatch = useDispatch()


    return ( 
        <>        
        <nav>
            <Link onClick={() => dispatch(openMenu(false))} className="logo position-absolute" to="/"/>
            <button  onClick={() => dispatch(openMenu(true))} className="menu-bold position-absolute "></button>
        </nav>
        <div className={`menu position-absolute ${menuStatus ? "open-menu" : "close-menu"} ${location.pathname === "/gallery" &&  menuStatus === true ? "open-menu-services" : ""}`}>
            <Link to="/"><img className="menu-logo position-absolute" src="./assets/navbar/Group 452.png" alt="logo" /></Link>
            <button onClick={() => dispatch(openMenu(false))} className="menu-close position-absolute"><img src="./assets/navbar/Path 163.svg" alt="close" /></button>
            <div className="menu-content d-flex flex-column flex-lg-row">
                <div className="info col-12 col-lg-6 me-2">
                    <div className="mail d-flex">
                        <img src="./assets/navbar/mail_546394.svg" alt="" />
                        <div className="info-text text-light">
                        <h4>Email:</h4>
                        <p className="m-0">firoz@al-firoz.com</p>
                        </div>
                    </div>
                    <div className="phone d-flex mt-4">
                        <img  src="./assets/navbar/telephone_159844.svg" alt="" />
                        <div className="info-text text-light">
                        <h4>Tel.No:</h4>
                        <p className="m-0">+202 22728689 <br/> 02 2274841902 22745896</p>
                        </div>
                    </div>
                    <div className="mail d-flex mt-4">
                        <img src="./assets/navbar/Group.svg" alt="" />
                        <div className="info-text text-light">
                        <h4>Address:</h4>
                        <p className="m-0">firoz@al-firoz.com</p>
                        </div>
                    </div>
                    <div className="social text-light">
                        <h4>Social Media:</h4>
                        <div className="social-icons">
                            {socialIcons.map((el, index) => (
                                <SocialIcon key={index} data={el}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="links my-5 d-flex col-12 col-lg-6 flex-column flex-lg-row">
                    <ul className="links-1 col-12 col-lg-6 ps-0">
                        {pagesLinks1.map((el, index) => (
                        <li  className="position-relative mt-5">
                            <MenuLink link={el} key={index}/>
                        </li>
                        ))}
                    </ul>
                    <ul className="links-2 col-12 col-lg-6 ps-0">
                    {pagesLinks2.map((el, index) => (
                        <li className="position-relative mt-5">
                            <MenuLink link={el} key={index}/>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;