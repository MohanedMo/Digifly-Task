import { useSelector } from "react-redux";

import Field from "../../components/field/field";
import Title from "../../components/title/title";

import "./fields.css"

const Fields = () => {

    const fieldStatus = useSelector((state) => state.fieldStatus);

    const data = [
        {
        title: "Kitchens",
        pragraph:"We cover all equipment for food service, bakery, and pastry, starting from food preparation machines, going through cooking lines and bakery and pastry equipment Taking into consideration different types of refrigeration and dishwashing appliances. The performance and quality standards in all these stages are set to match all applications and requirements. What Al-Fayrouz Company offers in the field of kitchen equipment",
    },
        {
            title: "Laundry",
            pragraph:"We cover all equipment for food service, bakery, and pastry, starting from food preparation machines, going through cooking lines and bakery and pastry equipment Taking into consideration different types of refrigeration and dishwashing appliances. The performance and quality standards in all these stages are set to match all applications and requirements. What Al-Fayrouz Company offers in the field of kitchen equipment"
        },
        {
            title: "Heating Solutions",
        pragraph:"We cover all equipment for food service, bakery, and pastry, starting from food preparation machines, going through cooking lines and bakery and pastry equipment Taking into consideration different types of refrigeration and dishwashing appliances. The performance and quality standards in all these stages are set to match all applications and requirements. What Al-Fayrouz Company offers in the field of kitchen equipment"
    },
]



    return ( 
        <>
        <div className="fields-parent d-flex justify-content-sm-center justify-content-lg-between flex-wrap">
        <div className="fields-text position-relative col-12 col-lg-5">
        <Title title="Fields"/>
        <div className={`fields-content position-relative mt-5 ${fieldStatus ? "fields-open" : ""}`}>
            {data.map(el => (
            <Field title= {el.title} pragraph= {el.pragraph}/>
            ))}
        </div>
        </div>
        <div className="kitchens position-relative col-12 col-lg-5">
            <img className="fields-photo position-absolute" src="./assets/fields/DSC00994.png" alt="fields" />
            <img className=" position-absolute" src="./assets/fields/Group 190.svg" alt="fields" />
            <img className=" position-absolute" src="./assets/fields/Group 191.svg" alt="fields" />
        </div>
        </div>
        </>
     );
}
 
export default Fields;