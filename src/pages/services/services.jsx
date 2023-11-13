import Service from "../../components/service/service";
import Title from "../../components/title/title";
import "./services.css"


const Services = () => {

    const servicesData = [
        {
            title: "Consultation & Design",
            imgSrc: "pf-64da7c11--DSC02274.png",
            description: "Our designers have the unique ability to transform spaces to functional area. They take into account numerous factors to attain the most fitting layout, considering the operation & maintenance space requirements, ease of equipment & storage accessibility, general cycle, not to mention the hygiene and the site consideration."
    },
        {
            title: "After Sale Service",
            imgSrc: "Rectangle 1395.png",
            description: "Our designers have the unique ability to transform spaces to functional area. They take into account numerous factors to attain the most fitting layout, considering the operation & maintenance space requirements, ease of equipment & storage accessibility, general cycle, not to mention the hygiene and the site consideration."
    },
        {
            title: "Supply & Install",
            imgSrc: "oxford_saïd_strategic_management_course_stack_course_page_large_header_banner.png",
            description: "Our designers have the unique ability to transform spaces to functional area. They take into account numerous factors to attain the most fitting layout, considering the operation & maintenance space requirements, ease of equipment & storage accessibility, general cycle, not to mention the hygiene and the site consideration."
    },
        {
            title: "Custom Fabrication",
            imgSrc: "DSC00975.png",
            description: "Our designers have the unique ability to transform spaces to functional area. They take into account numerous factors to attain the most fitting layout, considering the operation & maintenance space requirements, ease of equipment & storage accessibility, general cycle, not to mention the hygiene and the site consideration."
    },
    ]

    return ( 
        <div className="services">
            <div className="serivces-background position-absolute"></div>
            <div className="services-content position-relative">
                <Title title="Services"/>
                <div className="our-services d-flex flex-wrap justify-content-between">
                    {servicesData.map(el => (
                    <Service title ={el.title} imgSrc={el.imgSrc} description= {el.description}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Services;