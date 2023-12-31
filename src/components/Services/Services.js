import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/Facebook-logo.png";
import imgCourse2 from "../../assets/img/logo-w.png";
import imgCourse3 from "../../assets/img/Youtube_logo.png";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Facebook",
            subtitle: "...",
            image: imgCourse1,
            footer: "Go",
            link: "https://es-la.facebook.com/",
        },
        {
            title: "Whatsapp",
            subtitle: "...",
            image: imgCourse2,
            footer: "Go",
            link: "https://web.whatsapp.com/",
        },
        {
            title: "Youtube",
            subtitle: "...",
            image: imgCourse3,
            footer: "Go",
            link: "https://www.youtube.com/",
        },
    ];

    return (
        <div className="services p-4 mt-5" id="services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
