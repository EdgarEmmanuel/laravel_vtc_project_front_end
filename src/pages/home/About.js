import React from 'react' ;
import { Col, Row } from 'reactstrap';



import "./css/About.css";


const About = () => {
    return (
        <div id="about">
            <Row>
                <Col md="12">
                    <h1>
                        A PROPOS DE FASTER
                    </h1>
                </Col>
                <Col md="12">
                    <Row xs="1" sm="2" md="2">
                        <Col md="6">
                            <div className="description">
                                <p>
                                    <h1>
                                        Le meilleur choix de transport
                                        pour une agréable journée.
                                    </h1>
                                    <h5>
                                        Faster est le service VTC à la demande qui
                                        vous accompagnera en toute sécurité dans
                                        tous vos déplacements.
                                    </h5>
                                </p>
                            </div>
                        </Col>
                        <Col md="6">
                           <div className="image">
                                <img src="https://images.unsplash.com/photo-1612966809104-7a454c1d4514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                           </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}


export default About;