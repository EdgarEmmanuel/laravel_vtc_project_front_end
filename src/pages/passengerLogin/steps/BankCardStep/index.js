import { Container, Form, Row , Label, Col, FormGroup, Input, FormFeedback, } from "reactstrap";
import CardImage from "./CardImage";

const BankCardStep = ({validation}) => {
    return (
        <div>
            <Container>
                <CardImage/>
            </Container>
            <Container>
            <Form>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="nom">
                        CVV
                        </Label>
                        <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            type="text"
                            value={validation.values.cvv || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.cvv && validation.errors.cvv ? true : false
                            }
                        />
                        {validation.touched.cvv && validation.errors.cvv ? (
                                    <FormFeedback type="invalid">{validation.errors.cvv}</FormFeedback>
                                ) : null}
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="expiry_date">
                            EXPIRE FIN
                            </Label>
                            <Input
                                id="expiry_date"
                                name="expiry_date"
                                placeholder="12/20"
                                type="text"
                                value={validation.values.expiry_date || ""}
                                className="form-control pe-5"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                    validation.touched.expiry_date && validation.errors.expiry_date ? true : false
                                }
                            />
                            {validation.touched.expiry_date && validation.errors.expiry_date ? (
                                        <FormFeedback type="invalid">{validation.errors.expiry_date}</FormFeedback>
                                    ) : null}
                        </FormGroup>
                    </Col>
                </Row>
                <div className="mb-3">
                    <Label htmlFor="email" className="form-label">Numero Carte</Label>
                    <Input
                        name="numero_carte"
                        className="form-control"
                        placeholder="5555 5555 6666 7777"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.numero_carte || ""}
                        invalid={
                            validation.touched.numero_carte && validation.errors.numero_carte ? true : false
                        }
                    />
                    {validation.touched.numero_carte && validation.errors.numero_carte ? (
                        <FormFeedback type="invalid">{validation.errors.nuemro_carte}</FormFeedback>
                    ) : null}
                </div>
            </Form>
            </Container>
        </div>
    )
}

export default BankCardStep ;