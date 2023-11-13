import "./company-info.css"


const CompanyInfo = (props) => {

    const {data} = props

    console.log(data[0].info)
    return ( 
        <div className="comapny-info d-flex">
            <p>{data[0].info.toHtmlObject}</p>
        </div>
     );
}
 
export default CompanyInfo;