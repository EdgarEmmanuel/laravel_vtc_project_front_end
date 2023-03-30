import { Col, Row } from "reactstrap";


import "./css/Footer.css" ;


const Footer = () => {
    return (
        <div id="footer">
            <Row md="4">
                <Col md="3">
                    <Row>
                        <div>
                            <h1>
                                VTC | APP
                            </h1>
                        </div>
                    </Row>
                </Col>
                <Col md="3">
                    <Row>
                        <div>
                            <h1>
                                Navigation
                            </h1>
                        </div>
                    </Row>
                    <Row>
                        <ul>
                            <li>
                                Accueil
                            </li>
                            <li>
                                Passagers
                            </li>
                            <li>
                                Chauffeurs
                            </li>
                            <li>
                                Business
                            </li>
                        </ul>
                    </Row>
                </Col>
                <Col md="3">
                    <Row>
                        <div>
                            <h1>
                                Faster
                            </h1>
                        </div>
                    </Row>
                    <Row>
                        <ul>
                            <li>
                                Mon Compte
                            </li>
                            <li>
                                Mes Courses
                            </li>
                            <li>
                                CGV
                            </li>
                        </ul>
                    </Row>
                </Col>
                <Col md="3">
                    <Row>
                        <div>
                            <h1>
                                Contact
                            </h1>
                        </div>
                    </Row>
                    <Row>
                        <ul>
                            <li>
                                contact@faster.com
                            </li>
                            <li>
                                Facebook
                            </li>
                            <li>
                                Instagram
                            </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer ;