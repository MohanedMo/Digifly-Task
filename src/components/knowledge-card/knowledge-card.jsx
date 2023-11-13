import { Link } from "react-router-dom";
import "./knowledge-card.css"


const KnowledgeCard = (props) => {

    const {imgSrc, description, status} = props

    return ( 
        <div className={`knowledge-card position-relative p-4 me-3 d-flex col-2.5 ${status === "light" ? "light-card" : "dark-card"}`}>
            <img className="me-2" src={`./assets/knowledge/${imgSrc}`} alt="knowledge" />
            <div className="card-content">
            <p>{description}</p>
            <Link className="text-decoration-none ">Read More</Link>
            </div>
        </div>
    );
}
 
export default KnowledgeCard;