import { Col, Row } from "reactstrap";


import "./css/BusinessPart.css" ;


const BusinessPart = () => {
    return (
        <div id="business_part">
            <Row>
                <Col md="12">
                    <h1>
                        FASTER BUSINESS
                    </h1>
                </Col>
                <Col md="12">
                    <Row xs="1" sm="2" md="2">
                        <Col md="6">
                           <div className="image">
                                <img src="https://images.unsplash.com/photo-1619722087489-f0b1a6fdbc6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                           </div>
                        </Col>
                        <Col md="6">
                            <div className="description">
                                <p>
                                    <h1>
                                        Simplifiez vos déplacements professionnels
                                        ainsi que ceux de vos collaborateurs.
                                    </h1>
                                    <h5>
                                        Nos solutions Faster Business
                                        répondent à toutes vos problématiques
                                        de mobilité.
                                    </h5>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}


export default BusinessPart;