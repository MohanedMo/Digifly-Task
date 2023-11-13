import SocialIcon from "../../components/social-icon/social-icon";
import Title from "../../components/title/title";

import "./contact.css"

const Conatact = () => {

    const data = [
        {
            imgSrc: "./assets/contact/Component 6 – 3.svg",
            place: "contact"
        },
        {
            imgSrc: "./assets/contact/Component 7 – 3.svg",
            place: "contact"
        },
        {
            imgSrc: "./assets/contact/Component 8 – 3.svg",
            place: "contact"
        }
    ]


    return ( 
        <div className="contact d-flex flex-column flex-xl-row">
            <div className="clients col-xxl-6 d-flex flex-column align-items-center align-items-xl-start">
            <h1>Our Clients</h1>
                <div className="large-icons">
                    <img className="position-absolute" src="./assets/contact/4.png" alt="large-icons" />
                    <img className="position-absolute" src="./assets/contact/Group.png" alt="large-icons" />
                    <img className="position-absolute" src="./assets/contact/4.png" alt="large-icons" />
                    <img className="position-absolute" src="./assets/contact/5.png" alt="large-icons" />
                    <img className="position-absolute" src="./assets/contact/3.png" alt="small-icon" />
                    <div className="medium-icons">
                    <img className="position-absolute" src="./assets/contact/5.png" alt="medium-icon" />
                    <img className="position-absolute" src="./assets/contact/5.png" alt="medium-icon" />
                    <img className="position-absolute" src="./assets/contact/2.png" alt="medium-icon" />
                    <img className="position-absolute" src="./assets/contact/Group.png" alt="medium-icon" />
                    <div className="small-icons">
                    <img className="position-absolute" src="./assets/contact/4.png" alt="small-icon" />
                    <img className="position-absolute" src="./assets/contact/2.png" alt="small-icon" />
                    <img className="position-absolute" src="./assets/contact/3.png" alt="small-icon" />
                    <img className="position-absolute" src="./assets/contact/Group.png" alt="small-icon" />
                    <img className="clients-logo position-absolute" src="./assets/contact/firoz White 2.png" alt="logo" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="contact-us col-xxl-6 ">
            <div className="contact-content">
                <h2>Contact Us</h2>
                <form onSubmit={(e) => e.preventDefault()} className="user-data ">
                    <div className="inputs d-flex justify-content-between flex-column flex-sm-row">
                    <div className="col-sm-5 col-12">
                    <input  className="py-2 col-12" type="text"  name="name" placeholder="Name" autocomplete="off"/>
                    <input  className="py-2 col-12 mt-5" type="text"  name="mail" placeholder="E-mail" autocomplete="off"/>
                    </div>
                    <div className="col-sm-5 col-12 mt-4 mt-sm-0">
                    <input  className="py-2 col-12" type="text"  name="services" placeholder="Services" autocomplete="off"/>
                    <input  className="py-2 col-12 mt-5" type="text"  name="phone" placeholder="Phone" autocomplete="off"/>
                    </div>
                    </div>
                    <label className="mt-5" htmlFor="message">Message</label>
                    <textarea className="col-12 mt-5" rows="1" name="message" id="message" ></textarea>
                    <input className="send-btn" type="submit" value="Send"/>
                </form>
                <div className="contact-info d-flex justify-content-between mt-5 flex-column flex-sm-row">
                    <div className="col-sm-5 col-12">
                        <div className="address">
                        <h5><img className="me-2" src="./assets/contact/Group-3.svg" alt="" />Address:</h5>
                        <p className="ms-4">33 Ahmed Abul Ela St.,<br/> Nasr City, Cairo , Egypt</p>
                        </div>
                        <div className="email">
                        <h5><img className="me-2" src="./assets/contact/mail_546394.svg" alt="" />Address:</h5>
                        <p className="ms-4">33 Ahmed Abul Ela St.,<br/> Nasr City, Cairo , Egypt</p>
                        </div>
                    </div>
                    <div className="col-sm-5 col-12 mt-4 mt-sm-0">
                        <div className="phones">
                        <h5><img className="me-2" src="./assets/contact/mail_546394.svg" alt="" />Tel.No:</h5>
                        <p className="ms-4">+202 22728689<br/> 02 22748419 Cairo - 02 22745896</p>
                        </div>
                        <div className="sociales">
                        <h5>Social Media:</h5>
                        <div className="sociales-icons d-flex">
                            {data.map((el, index) => (
                        <SocialIcon key={index} data={el}/>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Conatact;