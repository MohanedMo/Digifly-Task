import MainButton from "../../components/button/button"
import Navbar from "../../components/navbar/navbar";
import "./home.css"


const Home = () => {
    return ( <>    
    <Navbar/>
    <div className="home-parent position-relative d-flex justify-content-sm-center align-items-center justify-content-lg-between flex-wrap">
    <div className="group-4 col-9 col-lg-4">
        <h1>Firoz is a specialized company in Analyzing that is used for</h1>
        <p>supplying and installing of commercial <br/> equipment supplying and installingofcom<br/> equipment supplying and</p>
    <MainButton btnText="Contact Us" to="#"></MainButton>
    </div>
    <div className='company position-relative col-11 col-lg-6 col-xxl-5'>
        <img className="position-absolute home-photo" src="./assets/home/image129.png" alt="" />
        <div className="text position-absolute">
            <div className="photo-text d-flex justify-content-between align-items-center">
                <p className="text-dark m-0">Heating Solutions</p>
                <div className="arrows d-flex flex-column justify-content-center align-items-center">
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
);
}
 
export default Home;