import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'






const PassengerStep = ({validation, telephone, setTelephone}) => {


    return (
        <div>
            <Form>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="nom">
                        Nom
                        </Label>
                        <Input
                            id="nom"
                            name="nom"
                            placeholder="Entrez le nom"
                            type="text"
                            value={validation.values.nom || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.password && validation.errors.password ? true : false
                            }
                        />
                        {validation.touched.nom && validation.errors.nom ? (
                                    <FormFeedback type="invalid">{validation.errors.nom}</FormFeedback>
                                ) : null}
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="prenom">
                        Prenom
                        </Label>
                        <Input
                            id="prenom"
                            name="prenom"
                            placeholder="Entrez votre Prenom"
                            type="text"
                            value={validation.values.prenom || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.prenom && validation.errors.prenom ? true : false
                            }
                        />
                        {validation.touched.prenom && validation.errors.prenom ? (
                                    <FormFeedback type="invalid">{validation.errors.prenom}</FormFeedback>
                                ) : null}
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">
                    Telephone
                    </Label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={telephone}
                        defaultCountry="SN"
                        onChange={setTelephone}
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">
                        Numero de Telephone avec Identfiant Pays 
                        </Label>
                        <Input
                            id="exampleCity"
                            name="city"
                            value={telephone}
                            disabled
                        />
                    </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default PassengerStep ;