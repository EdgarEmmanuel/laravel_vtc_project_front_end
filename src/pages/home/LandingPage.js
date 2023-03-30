/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row } from "reactstrap"

import image_vtc from "./assets/vtc.jpg"

import "./css/LandingPage.css";


const LandingPage = () => {
    return (
        <div id="landing_page">
            <Row md="4"
                sm="2"
                xs="1">
                <Col md="4">
                   <div className="description">
                        <p>
                            <h1>Bienvenue chez FASTER,</h1>
                            <h5>le VTC qui vous accompagne en toute securite dans vos trajets.</h5>
                        </p>
                        <p>
                            <Row>
                                <Col>
                                    <a className="btn btn-google" href="#" title="Google Play">Google Play</a>
                                </Col>
                                <Col>
                                    <a href="#" target="_blank" class="market-btn apple-btn" role="button">
                                        <span class="market-button-subtitle">Download on the</span>
                                        <span class="market-button-title">App Store</span>
                                    </a>
                                </Col>
                            </Row>
                        </p>
                   </div>
                </Col>
                <Col md="8">
                    <div className="image">
                        <img src={image_vtc} alt="vtc" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage ;