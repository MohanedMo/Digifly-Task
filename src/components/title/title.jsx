import "./title.css"

const Title = (props) => {

    const {title } = props
    return ( 
        <h1 className="main-title fw-bold">{title}</h1>
     );
}
 
export default Title;