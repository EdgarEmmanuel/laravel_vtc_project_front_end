import { Col, Row } from "reactstrap" ;
import "./css/HowItWorks.css" ;



const HowItWorks = () => {
    return (
        <div id="how_it_works">
            <Row xs="1" sm="2" md="1">
                <Col md="12">
                    <h1>
                        Comment ça marche ?
                    </h1>
                </Col>
                <Col md="12">
                    <Row xs="1"  sm="2"  md="3">
                    <Col md="4">
                        <Row>
                            <img src="https://images.unsplash.com/photo-1554672408-17395951edc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </Row>
                        <Row>
                            <p>
                                Activez l’application Faster.
                                Saisissez votre destination
                                via géolocalisation puis
                                validez le montant estimé
                                de votre trajet.
                            </p>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row>
                            <img src="https://images.unsplash.com/photo-1613638377394-281765460baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGF4aSUyMGRyaXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=80" alt="" />
                        </Row>
                        <Row>
                            <p>
                                Votre chauffeur Faster,
                                vous récupère et vous
                                dépose en toute sécurité à
                                la destination indiquée.
                            </p>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row>
                            <img src="https://images.unsplash.com/photo-1644574141709-c739285ae771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </Row>
                        <Row>
                            <p>
                                Recevez votre facture et
                                noter votre trajet ainsi que
                                votre chauffeur.
                            </p>
                        </Row>
                    </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HowItWorks;